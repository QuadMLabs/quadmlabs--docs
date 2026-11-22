---
id: about
title: Acerca de
slug: /
hide_table_of_contents: true
---

import {CardGrid, Card, StepCard, ContactCard} from '@site/src/components/Cards';

# Acerca de

<p className="lead">
Soy consultor de Atlassian y llevo más de seis años trabajando con Jira, Jira Service Management y Confluence. Casi todo ese tiempo fue en entornos de producción donde la gente depende de estas herramientas todos los días, así que tienen que funcionar, y cuando no lo hacen, alguien tiene que averiguar por qué.
</p>

Vengo del lado de la administración y el soporte, pero también escribo código: scripts de ScriptRunner, integraciones y apps en Forge. Ahora mismo estoy en el equipo de desarrollo de una migración de Data Center a Cloud, reconstruyendo los plugins de Data Center como apps de Forge.

Tener las dos facetas me permite entender cómo trabaja un equipo y después construir o arreglar lo que ese equipo necesita.

QuadMLabs es el nombre que uso para mi trabajo con Atlassian y mis proyectos.

## Cómo trabajo

<CardGrid>
  <StepCard number="01" title="Primero el proceso">
    Antes de tocar la herramienta, quiero entender qué intenta lograr realmente el equipo.
  </StepCard>
  <StepCard number="02" title="La solución más pequeña que funcione">
    A veces es configuración, a veces automatización y a veces hace falta código. Empiezo por la más simple.
  </StepCard>
  <StepCard number="03" title="Primero la evidencia">
    Si creo que es un error del producto, lo reproduzco y reúno los logs antes de abrir un caso con el proveedor, y sigo con él hasta que se resuelve.
  </StepCard>
  <StepCard number="04" title="Dejarlo documentado">
    Alguien debería poder entenderlo meses después, y ese alguien suele ser yo.
  </StepCard>
</CardGrid>

## Qué hago

<CardGrid columns={2}>
  <Card eyebrow="Mantener la plataforma" title="Administración y soporte">
    Resolución de problemas y soporte de Jira, con experiencia práctica en Data Center y conocimiento de Cloud, además de Jira Service Management y Confluence.
  </Card>
  <Card eyebrow="Ampliarla" title="Automatización y desarrollo">
    Groovy y ScriptRunner, APIs REST y webhooks, y apps creadas en Atlassian Forge con React.
  </Card>
</CardGrid>

## Contacto {#contact}

Para preguntas sobre mi trabajo o cualquier tema relacionado con Atlassian:

<ContactCard
  items={[
    {label: 'Consultas generales', email: 'info@quadmlabs.com'},
    {label: 'Colaboración técnica', email: 'admin@quadmlabs.com'},
  ]}
/>
