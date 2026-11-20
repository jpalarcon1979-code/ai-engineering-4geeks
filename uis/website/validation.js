"use strict";

const form = document.getElementById("application-form");
const feedback = document.getElementById("form-feedback");

if (form && feedback) {
  const fields = Array.from(
    form.querySelectorAll("input, select, textarea")
  );

  const allowedCountries = new Set(["US", "ES"]);
  const allowedServices = new Set([
    "warehousing",
    "last_mile",
    "returns",
    "integrated"
  ]);

  // 1. Reglas de validación para cada campo.
  function getError(field) {
    const value = field.value.trim();

    if (field.required && !value) {
      return "Este campo es obligatorio.";
    }

    if (!value) return "";

    switch (field.id) {
      case "company_name":
        if (value.length < 2 || value.length > 100) {
          return "El nombre de la empresa debe tener entre 2 y 100 caracteres.";
        }
        break;

      case "contact_name":
        if (value.length < 2 || value.length > 100) {
          return "El nombre del contacto debe tener entre 2 y 100 caracteres.";
        }
        break;

      case "email":
        if (
          value.length > 254 ||
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
          field.validity.typeMismatch
        ) {
          return "Introduce un correo válido, por ejemplo: contacto@empresa.com.";
        }
        break;

      case "phone": {
        const digits = value.replace(/\D/g, "");
        if (
          !/^[+()\d .-]+$/.test(value) ||
          digits.length < 7 ||
          digits.length > 15
        ) {
          return "Introduce un teléfono válido de entre 7 y 15 dígitos.";
        }
        break;
      }

      case "country":
        if (!allowedCountries.has(value)) {
          return "Selecciona Estados Unidos o España.";
        }
        break;

      case "service":
        if (!allowedServices.has(value)) {
          return "Selecciona un servicio logístico disponible.";
        }
        break;

      case "monthly_orders":
        if (
          !/^\d+$/.test(value) ||
          !Number.isSafeInteger(Number(value)) ||
          Number(value) < 1
        ) {
          return "Introduce un número entero de pedidos mayor que cero.";
        }
        break;

      case "details":
        if (value.length < 20 || value.length > 1000) {
          return "La descripción debe tener entre 20 y 1000 caracteres.";
        }
        break;
    }

    return "";
  }

  // 2. Mostrar u ocultar el error correspondiente.
  function showError(field, message) {
    const error = document.getElementById(`${field.id}-error`);
    if (!error) return;

    error.setAttribute("role", "alert");
    error.textContent = message;
    error.classList.toggle("hidden", !message);

    if (message) {
      field.setAttribute("aria-invalid", "true");
      field.classList.add("border-rose-400");
      field.classList.remove("border-slate-600");
    } else {
      field.removeAttribute("aria-invalid");
      field.classList.remove("border-rose-400");
      field.classList.add("border-slate-600");
    }
  }

  function validateField(field) {
    const message = getError(field);
    showError(field, message);
    return !message;
  }

  // 3. Validación al escribir, seleccionar o salir del campo.
  fields.forEach((field) => {
    const update = () => {
      validateField(field);
      feedback.textContent = "";
    };

    field.addEventListener("input", update);
    field.addEventListener("change", update);
    field.addEventListener("blur", update);
  });

  // 4. Comprobar todos los campos antes del envío.
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const invalidFields = fields.filter(
      (field) => !validateField(field)
    );

    if (invalidFields.length > 0) {
      feedback.textContent =
        "Revisa los campos señalados antes de continuar.";
      feedback.classList.remove("text-emerald-300");
      feedback.classList.add("text-rose-300");
      invalidFields[0].focus();
      return;
    }

    feedback.textContent =
      "Solicitud validada correctamente. Este envío es una simulación: no se enviaron ni almacenaron datos.";
    feedback.classList.remove("text-rose-300");
    feedback.classList.add("text-emerald-300");
    feedback.focus();
  });

  // 5. Limpiar también los estados de error.
  form.addEventListener("reset", () => {
    fields.forEach((field) => showError(field, ""));
    feedback.textContent = "";
  });

  // El envío solo se habilita cuando JavaScript está cargado.
  const submitButton = form.querySelector(
    'button[type="submit"]'
  );

  if (submitButton) {
    submitButton.disabled = false;
  }
}
