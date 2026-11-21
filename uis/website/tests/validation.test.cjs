"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const validationSource = fs.readFileSync(
  path.join(__dirname, "..", "validation.js"),
  "utf8"
);

class MockElement {
  constructor(id, { value = "", required = false, classes = [] } = {}) {
    this.id = id;
    this.value = value;
    this.required = required;
    this.validity = { typeMismatch: false };
    this.textContent = "";
    this.disabled = false;
    this.attributes = new Map();
    this.listeners = new Map();
    this.classNames = new Set(classes);
    this.classList = {
      add: (...names) => names.forEach((name) => this.classNames.add(name)),
      remove: (...names) => names.forEach((name) => this.classNames.delete(name)),
      contains: (name) => this.classNames.has(name),
      toggle: (name, force) => {
        const shouldAdd = force === undefined ? !this.classNames.has(name) : force;
        if (shouldAdd) this.classNames.add(name);
        else this.classNames.delete(name);
        return shouldAdd;
      }
    };
  }

  addEventListener(type, listener) {
    const listeners = this.listeners.get(type) || [];
    listeners.push(listener);
    this.listeners.set(type, listeners);
  }

  dispatch(type, event = {}) {
    for (const listener of this.listeners.get(type) || []) {
      listener(event);
    }
  }

  setAttribute(name, value) {
    this.attributes.set(name, value);
  }

  getAttribute(name) {
    return this.attributes.get(name) ?? null;
  }

  removeAttribute(name) {
    this.attributes.delete(name);
  }

  focus() {
    this.ownerDocument.activeElement = this;
  }
}

function createForm() {
  const fieldDefinitions = [
    ["company_name", true],
    ["contact_name", true],
    ["email", true],
    ["phone", false],
    ["country", true],
    ["service", true],
    ["monthly_orders", true],
    ["details", true]
  ];
  const fields = fieldDefinitions.map(([id, required]) =>
    new MockElement(id, { required, classes: ["border-slate-700"] })
  );
  const errors = new Map(
    fields.map((field) => [
      field.id,
      new MockElement(`${field.id}-error`, { classes: ["hidden"] })
    ])
  );
  const feedback = new MockElement("form-feedback");
  const submitButton = new MockElement("submit-button");
  submitButton.disabled = true;
  const form = new MockElement("application-form");
  const elementsById = new Map([
    ["application-form", form],
    ["form-feedback", feedback],
    ...fields.map((field) => [field.id, field]),
    ...Array.from(errors.values(), (error) => [error.id, error])
  ]);
  const document = {
    activeElement: null,
    getElementById(id) {
      return elementsById.get(id) || null;
    }
  };

  for (const element of [...fields, ...errors.values(), feedback, submitButton, form]) {
    element.ownerDocument = document;
  }

  form.querySelectorAll = () => fields;
  form.querySelector = (selector) =>
    selector === 'button[type="submit"]' ? submitButton : null;

  vm.runInNewContext(validationSource, { document });

  return { form, fields, errors, feedback, submitButton, document };
}

function setValidFormValues(fields) {
  const values = {
    company_name: "Acme Logistics",
    contact_name: "Ana García",
    email: "ana@example.com",
    phone: "",
    country: "US",
    service: "warehousing",
    monthly_orders: "250",
    details: "Necesitamos almacenamiento y distribución."
  };
  for (const field of fields) {
    field.value = values[field.id];
  }
}

test("validación de campos en DOM simulado (no es una prueba de navegador)", async (t) => {
  const cases = [
    {
      name: "nombre de empresa válido",
      field: "company_name",
      value: "Acme Logistics",
      expected: ""
    },
    {
      name: "nombre de empresa compuesto solo por números",
      field: "company_name",
      value: "12345",
      expected: "Introduce un nombre de empresa, no solo números o un RUT."
    },
    {
      name: "nombre internacional con acentos",
      field: "contact_name",
      value: "José María",
      expected: ""
    },
    {
      name: "nombre internacional con caracteres CJK",
      field: "contact_name",
      value: "李小龍",
      expected: ""
    },
    {
      name: "correo válido",
      field: "email",
      value: "contacto@empresa.com",
      expected: ""
    },
    {
      name: "correo sin arroba",
      field: "email",
      value: "contacto.empresa.com",
      expected: "Introduce un correo válido, por ejemplo: contacto@empresa.com."
    },
    {
      name: "correo sin dominio de nivel superior",
      field: "email",
      value: "contacto@empresa",
      expected: "Introduce un correo válido, por ejemplo: contacto@empresa.com."
    },
    {
      name: "teléfono internacional válido",
      field: "phone",
      value: "+1 (213) 555-0100",
      expected: ""
    },
    {
      name: "teléfono con menos de siete dígitos",
      field: "phone",
      value: "123456",
      expected: "Introduce un teléfono válido de entre 7 y 15 dígitos."
    },
    {
      name: "Estados Unidos como país permitido",
      field: "country",
      value: "US",
      expected: ""
    },
    {
      name: "España como país permitido",
      field: "country",
      value: "ES",
      expected: ""
    },
    {
      name: "país no permitido",
      field: "country",
      value: "MX",
      expected: "Selecciona Estados Unidos o España."
    },
    {
      name: "servicio de almacenamiento permitido",
      field: "service",
      value: "warehousing",
      expected: ""
    },
    {
      name: "servicio de devoluciones permitido",
      field: "service",
      value: "returns",
      expected: ""
    },
    {
      name: "servicio no disponible",
      field: "service",
      value: "express",
      expected: "Selecciona un servicio logístico disponible."
    },
    {
      name: "pedidos mensuales como entero positivo",
      field: "monthly_orders",
      value: "1",
      expected: ""
    },
    {
      name: "pedidos mensuales iguales a cero",
      field: "monthly_orders",
      value: "0",
      expected: "Introduce un número entero de pedidos mayor que cero."
    },
    {
      name: "pedidos mensuales no enteros",
      field: "monthly_orders",
      value: "1.5",
      expected: "Introduce un número entero de pedidos mayor que cero."
    },
    {
      name: "descripción inferior al mínimo",
      field: "details",
      value: "a".repeat(19),
      expected: "La descripción debe tener entre 20 y 1000 caracteres."
    },
    {
      name: "descripción en el mínimo permitido",
      field: "details",
      value: "a".repeat(20),
      expected: ""
    },
    {
      name: "descripción superior al máximo",
      field: "details",
      value: "a".repeat(1001),
      expected: "La descripción debe tener entre 20 y 1000 caracteres."
    }
  ];

  assert.equal(cases.length, 21);

  for (const item of cases) {
    await t.test(item.name, () => {
      const { fields, errors } = createForm();
      const field = fields.find((candidate) => candidate.id === item.field);
      field.value = item.value;
      field.dispatch("input");
      assert.equal(errors.get(item.field).textContent, item.expected);
    });
  }
});

test("el envío válido muestra el mensaje de simulación en DOM simulado", () => {
  const { form, fields, feedback, document } = createForm();
  setValidFormValues(fields);
  let prevented = false;

  form.dispatch("submit", {
    preventDefault() {
      prevented = true;
    }
  });

  assert.equal(prevented, true);
  assert.equal(
    feedback.textContent,
    "Solicitud validada correctamente. Este envío es una simulación: no se enviaron ni almacenaron datos."
  );
  assert.equal(feedback.classList.contains("text-emerald-300"), true);
  assert.equal(document.activeElement, feedback);
});

test("el envío inválido muestra errores y enfoca el primer campo inválido en DOM simulado", () => {
  const { form, fields, errors, feedback, document } = createForm();
  setValidFormValues(fields);
  fields.find((field) => field.id === "company_name").value = "";
  fields.find((field) => field.id === "email").value = "correo-inválido";
  let prevented = false;

  form.dispatch("submit", {
    preventDefault() {
      prevented = true;
    }
  });

  assert.equal(prevented, true);
  assert.equal(
    feedback.textContent,
    "Revisa los campos señalados antes de continuar."
  );
  assert.equal(errors.get("company_name").textContent, "Este campo es obligatorio.");
  assert.equal(errors.get("email").textContent, "Introduce un correo válido, por ejemplo: contacto@empresa.com.");
  assert.equal(document.activeElement, fields.find((field) => field.id === "company_name"));
});

test("restablecer el formulario limpia errores en DOM simulado", () => {
  const { form, fields, errors, feedback } = createForm();
  const companyName = fields.find((field) => field.id === "company_name");
  companyName.value = "";
  companyName.dispatch("input");
  feedback.textContent = "Revisa los campos señalados antes de continuar.";

  // Comprobar que el error existe antes del reset.
  assert.equal(errors.get("company_name").textContent, "Este campo es obligatorio.");
  assert.equal(errors.get("company_name").classList.contains("hidden"), false);
  assert.equal(companyName.getAttribute("aria-invalid"), "true");

  form.dispatch("reset");

  assert.equal(errors.get("company_name").textContent, "");
  assert.equal(errors.get("company_name").classList.contains("hidden"), true);
  assert.equal(companyName.getAttribute("aria-invalid"), null);
  assert.equal(companyName.classList.contains("border-rose-400"), false);
  assert.equal(companyName.classList.contains("border-slate-700"), true);
  assert.equal(feedback.textContent, "");
});

test("JavaScript habilita el botón de envío al cargar en DOM simulado", () => {
  const { submitButton } = createForm();
  assert.equal(submitButton.disabled, false);
});
