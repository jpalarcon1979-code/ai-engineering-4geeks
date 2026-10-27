# Company Choice — TrackFlow

## Empresa seleccionada

**TrackFlow — Empresa de logística de última milla y gestión de almacenes.**

## ¿Por qué elegí TrackFlow?

Elegí TrackFlow porque representa un desafío realista de transformación digital: una empresa que necesita modernizar sus operaciones sin interrumpir los servicios que ya presta a sus clientes. Sus dos almacenes, ubicados en Los Ángeles y Zaragoza, funcionan con sistemas diferentes, mientras que el seguimiento de envíos depende de consultar individualmente las plataformas de ocho transportistas.

Me interesa especialmente aprender a diseñar arquitecturas que conecten sistemas existentes mediante APIs, integren datos y permitan construir automatizaciones y agentes de inteligencia artificial sobre información confiable.

Considero que TrackFlow ofrece una excelente oportunidad para aplicar ingeniería de IA en procesos operativos, atención al cliente, gestión de incidencias y toma de decisiones empresariales. Mi objetivo es desarrollar soluciones seguras, medibles, mantenibles y que puedan adaptarse posteriormente a organizaciones de otros sectores.

## Departamentos que más me interesan

### 1. Tecnología

El departamento dirigido por Andrés Kim administra sistemas de almacén diferentes, un ERP heredado, integraciones poco documentadas y bases de datos en distintos proveedores de nube.

Me interesa desarrollar una arquitectura de integración que permita conectar estos sistemas, implementar observabilidad, automatizar procesos técnicos y detectar fallos antes de que afecten las operaciones.

### 2. Última Milla y Gestión de Transportistas

El equipo de Carlos Vega trabaja con ocho transportistas, pero carece de un sistema de seguimiento unificado y de información consolidada sobre su rendimiento.

Me interesa desarrollar una API que permita consultar y normalizar los estados de los envíos, facilitando la integración con portales, automatizaciones y agentes de IA.

### 3. Experiencia del Cliente

El departamento dirigido por Valentina Cruz atiende consultas de empresas y consumidores mediante diferentes canales, sin un sistema unificado de tickets ni una base de conocimiento centralizada.

Me interesa construir agentes inteligentes capaces de consultar información operativa, recuperar políticas oficiales mediante RAG y resolver consultas habituales, derivando las situaciones complejas a operadores humanos.

## Reto de automatización seleccionado

**Unificación del seguimiento de envíos y gestión inteligente de incidencias logísticas.**

Actualmente, TrackFlow debe consultar separadamente los sistemas de ocho transportistas para conocer el estado de sus envíos.

Propongo integrar esa información mediante una API centralizada que pueda ser utilizada por las aplicaciones operativas y los futuros agentes de IA.

Esta integración permitiría mejorar la trazabilidad, detectar incidencias y reducir la necesidad de realizar consultas manuales.

## My AI Agent Idea

### Agente Inteligente de Seguimiento e Incidencias Logísticas

**Objetivo**

Desarrollar un agente de IA capaz de ayudar a clientes y operadores a consultar envíos, comprender incidencias y obtener respuestas fundamentadas en información empresarial verificable.

**¿Qué haría?**

El agente interpretaría las consultas en lenguaje natural, identificaría el envío correspondiente y utilizaría herramientas autorizadas para recuperar información actualizada.

También consultaría las políticas oficiales de entrega y devolución mediante RAG, combinando datos operativos y conocimiento documental.

**Información necesaria**

- Identificador del pedido o número de seguimiento.
- Datos de seguimiento obtenidos mediante APIs.
- Historial autorizado de eventos e incidencias.
- Políticas oficiales de entrega y devolución.
- Identidad, permisos y contexto de la persona que realiza la consulta.

**Resultados y acciones**

El agente podría informar el estado registrado de un envío, explicar retrasos conocidos, orientar al cliente y preparar o crear tickets de incidencia según las autorizaciones disponibles.

Cuando no existan datos suficientes, deberá reconocer la limitación en lugar de inventar una respuesta.

Las acciones sensibles, como modificar un pedido, autorizar una devolución excepcional o realizar cambios con consecuencias económicas, requerirán controles específicos y aprobación humana.

**Criterios iniciales de éxito**

Evaluaría la precisión de las respuestas, el porcentaje de consultas correctamente resueltas, la frecuencia de derivaciones humanas, los tiempos de respuesta y el coste de operación.

**Visión de evolución**

Este agente sería una primera aplicación de una arquitectura empresarial más amplia, capaz de integrar posteriormente sistemas de inventario, devoluciones, atención al cliente, monitoreo y análisis ejecutivo.

La implementación será progresiva y respetará los requisitos técnicos y entregables establecidos durante el bootcamp.
