---
title: Project Performance & Flow Analytics
sidebar_position: 0
---

# Project Performance & Flow Analytics

Una solución de analítica a medida para Jira, desarrollada para dar mayor visibilidad sobre el rendimiento de un proyecto, el flujo de las incidencias y la salud de los procesos.

La solución analiza el ciclo de vida y el historial de las incidencias y lo transforma en métricas y visualizaciones prácticas, que ayudan a los equipos a identificar patrones, cuellos de botella, inconsistencias y áreas de mejora.

:::note
Los nombres de las métricas y de los elementos del panel se mantienen en inglés, tal como aparecen en la aplicación y en las capturas.
:::

## Vista previa del panel
|Dashboard - Quick cards|Dashboard - Flow Health Metrics|Dashboard - Flow Metrics Overview|
|---|---|---|
|![Dashboard](@site/static/img/d1.png)|![Key indicators](@site/static/img/flowHealth.png)|![Key indicators](@site/static/img/flowMetrics.png)|

## Información del proyecto

El proyecto se desarrolló con Atlassian Forge y una Custom UI basada en React, e integra los datos de Jira Cloud mediante APIs REST.

<details>
  <summary>Detalles técnicos</summary>

|Componente         | Uso                                         |
|-------------------|---------------------------------------------|
|Jira Cloud         | Plataforma de destino                       |
|Atlassian Forge    | Plataforma de la aplicación                 |
|React + JavaScript | Desarrollo del frontend                     |
|Forge Custom UI    | Implementación de la interfaz personalizada |
|Forge CLI          | Desarrollo y despliegue                     |
|Jira REST API      | Datos de incidencias y proyectos            |
|Atlaskit           | Componentes de interfaz de Atlassian        |
|CSS                | Estilos personalizados                      |
|Node.js / npm      | Dependencias y herramientas de desarrollo   |
|Jira Project Page  | Punto de entrada de la aplicación           |

</details>

## Resumen

Project Performance & Flow Analytics transforma los datos de incidencias e historial de Jira en métricas de rendimiento y de flujo a nivel de proyecto.

<details>
  <summary>Contexto del proyecto</summary>

### El problema

Jira ofrece mucha información sobre las incidencias y su historial, pero convertirla en métricas de flujo y rendimiento realmente útiles puede requerir un análisis manual considerable.

Por ejemplo, para saber cuánto tiempo pasan las incidencias en cada estado del workflow puede hacer falta revisar sus historiales, calcular la duración de las transiciones y repetir el proceso con muchas incidencias.

Este proyecto se creó para simplificar ese análisis y hacer que el resultado sea más fácil de entender.

### La solución

Project Performance & Flow Analytics transforma los datos de incidencias e historial de Jira en un conjunto de métricas de rendimiento y de flujo a nivel de proyecto. 

La solución procesa la información disponible en Jira, aplica los cálculos necesarios y presenta los resultados mediante indicadores, gráficos, tablas y análisis a nivel de incidencia.

En lugar de obligar a los usuarios a revisar manualmente los historiales y calcular cada métrica por separado, el panel reúne estas mediciones 
en una sola vista a nivel de proyecto, lo que facilita identificar cuellos de botella, inconsistencias, patrones de entrega y cambios en el comportamiento del workflow.
</details>

## Cómo funciona

La solución sigue un flujo simple: el usuario elige un período de análisis, se recuperan y procesan los datos de Jira, y las métricas y visualizaciones resultantes se generan dentro del panel del proyecto.

<details>
  <summary>Flujo técnico</summary>

### Acceder al panel del proyecto

La solución está implementada como una página a nivel de proyecto dentro de Jira.

Los usuarios con acceso al proyecto pueden abrir el panel desde el menú de navegación del proyecto y empezar un análisis sin necesidad de configuración adicional.

### Seleccionar el período de análisis

El primer paso es elegir el período que se quiere analizar.

Los rangos predefinidos disponibles son:

- Last week
- Last month
- Last 3 months
- Last 6 months
- Last year
- Custom range

![Period selector](@site/static/img/period.png)

#### Rango de fechas personalizado

Se puede definir un análisis personalizado con una fecha de inicio y una de fin.

El rango máximo permitido es de un año. Este límite se introdujo para mantener tiempos de procesamiento razonables y reducir el impacto de las solicitudes grandes a la API de Jira.

![Period range selector](@site/static/img/period-range.png)

### Procesar los datos

Una vez elegido un período válido, la solución:

1. Recupera los datos relevantes de las incidencias de Jira.
2. Procesa la actividad y el historial de las incidencias.
3. Agrega la información que necesita cada métrica.
4. Calcula los indicadores de rendimiento y de flujo.
5. Genera las tablas y visualizaciones correspondientes.

El análisis resultante se presenta en el panel del proyecto.

### Validación y manejo de errores

La solución valida lo que introduce el usuario y la disponibilidad de los datos antes de procesar el análisis.

Algunos ejemplos:

- Períodos de análisis vacíos
- Rangos personalizados de más de un año
- Incidencias que no se encuentran
- Incidencias que pertenecen a otro proyecto

Estas validaciones evitan procesamiento innecesario y dan una respuesta más clara al usuario.

</details>

## Secciones del panel

### Indicadores clave del período analizado

El panel ofrece un conjunto de indicadores que resumen la actividad del proyecto y su rendimiento de entrega durante el período de análisis elegido.

Estas métricas fijan el contexto para el resto de los análisis del proyecto: definen el período evaluado, el tiempo activo del proyecto, el volumen de entrega (throughput) y la presencia de inconsistencias en los datos.

<!-- SECCION KEY INDICATORS -->
<details>
  <summary>Detalle de las métricas</summary>

![Key indicators](@site/static/img/keyInd.png)

  1. **Period Analyzed**

Define las fechas de inicio y fin usadas para el análisis.

Ejemplo:

>```
> 2024-07-01 - 2024-09-30
>```


Todas las métricas que muestra el panel se calculan dentro de este período.

  2. **Real Weeks**

Representa el número total de semanas incluidas en el período de análisis elegido.

Por ejemplo, un período de tres meses contiene aproximadamente doce semanas.

Real Weeks indica el lapso de tiempo total que seleccionó el usuario.

  3. **Active Weeks**

Representa el número de semanas en las que el proyecto estuvo realmente activo dentro del período elegido.

Por ejemplo, si se elige un período de doce semanas pero el proyecto solo se activó hace ocho semanas:

>```
> Active Weeks = 8
>```

Los cálculos de rendimiento usan Active Weeks y no Real Weeks.

Cuando el período elegido coincide por completo con la línea de tiempo activa del proyecto:

>```
> Real Weeks = Active Weeks
>```

Esta distinción evita que los períodos sin actividad en el proyecto reduzcan artificialmente las métricas de rendimiento.

  4. **Gross Throughput**

El throughput representa la cantidad de trabajo completado durante un período dado.

El **Gross Throughput** incluye todas las incidencias resueltas, incluidas las identificadas como inconsistentes.

>```
> Gross Throughput = Total Resolved Issues / Active Weeks
> ```

  5. **Net Throughput**

El **Net Throughput** representa el volumen de trabajo completado sin inconsistencias identificadas.

>```
> Net Throughput = Correctly Resolved Issues / Active Weeks
> ```

Comparar el Gross Throughput con el Net Throughput da más contexto sobre la calidad de la entrega reportada.

Un Gross Throughput alto combinado con un Net Throughput bastante menor puede indicar que una parte considerable del trabajo completado contiene inconsistencias.

  6. **Inconsistency (%)**

Una incidencia inconsistente es una incidencia que contiene una o más irregularidades de datos o de proceso, como un estado incorrecto, una resolución no válida, información faltante, una categorización incorrecta u otras condiciones que identifica la lógica del análisis.

El **Inconsistency %** representa la proporción de incidencias resueltas que contienen estas irregularidades.

>```
> Inconsistency (%) = (Inconsistent Issues / Total Resolved Issues) * 100
>```

Un porcentaje menor indica que una mayor proporción de las incidencias completadas cumple los criterios que usa el análisis.

  - **Cómo interpretar los indicadores**

El Gross Throughput y el Net Throughput deben considerarse junto con el Inconsistency %.

Un Gross Throughput alto indica que se completó una cantidad importante de trabajo durante el período activo. Sin embargo, el throughput por sí solo no indica si todas las incidencias completadas se procesaron de forma consistente.

Por ejemplo:

  - **Gross Throughput alto + Inconsistency bajo** indica un buen volumen de entrega con datos relativamente limpios.
  - **Gross Throughput alto + Inconsistency alto** indica un volumen de entrega alto pero posibles problemas de proceso o de calidad de datos.
  - **Gross Throughput bajo + Inconsistency bajo** indica un menor volumen de entrega con datos relativamente consistentes.
  - **Gross Throughput bajo + Inconsistency alto** puede indicar problemas tanto de entrega como de calidad del proceso.

La distinción entre Gross y Net Throughput ofrece, por tanto, una visión más completa del rendimiento de entrega que el throughput por sí solo.

  - **Cómo abordar una inconsistencia alta**

Una tasa de inconsistencia alta puede indicar oportunidades para mejorar la configuración del workflow, el gobierno o la disciplina del proceso.

Áreas que conviene investigar:

  - **1. Configuración del workflow**

    - Asegurar que los estados de cierre exijan las resoluciones adecuadas.
    - Quitar de las transiciones las resoluciones no válidas o sin uso.
    - Evitar que las transiciones se salten pasos finales obligatorios.

  - **2. Gobierno de las resoluciones**

    - Restringir quién puede modificar el campo Resolution.
    - Evitar cambios manuales inapropiados.
    - Usar lógica del workflow o automatización, cuando corresponda, para mantener la consistencia.

  - **3. Validación y automatización**

    - Agregar validators que exijan la información necesaria antes de cerrar incidencias.
    - Usar automatización para imponer una categorización consistente.
    - Identificar o marcar las incidencias con resoluciones inconsistentes.

 -  **4. Disciplina del proceso**

    - Establecer prácticas de cierre claras.
    - Mantener una Definition of Done consistente.
    - Revisar las inconsistencias recurrentes para identificar patrones del proceso.
    
> **El objetivo no es simplemente reducir el porcentaje de inconsistencia, sino mejorar la fiabilidad de los datos del proyecto y reducir el retrabajo.**
</details>

### Métricas de Quick Cards

Las Quick Cards ofrecen una vista de alto nivel de la actividad de las incidencias y del comportamiento operativo durante el período de análisis elegido.

Cada tarjeta representa una condición específica derivada de los datos de las incidencias de Jira. En conjunto, dan un panorama rápido del trabajo que entra al proyecto, avanza por el workflow, se completa y se modifica durante su ciclo de vida.

<!-- SECCION QUICK CARDS -->
<details>
  <summary>Detalle de las métricas</summary>

  ![Key indicators](@site/static/img/quickCards.png)

  1. **Issues Created**

Representa todas las incidencias creadas dentro del período de análisis elegido.

Da una idea del volumen de trabajo que entra al proyecto.

  2. **Issues In Progress**

Cuenta las incidencias que están actualmente en cualquier estado de la categoría de estados **In Progress**.

El nombre concreto del estado no determina si una incidencia se incluye. Se considera cualquier estado asignado a la categoría In Progress.

Algunos ejemplos: QA, Review, In Development, Testing, etc.

  3. **Issues Resolved**

Representa las incidencias que cumplen las dos condiciones siguientes:

- Su estado actual pertenece a la categoría de estados **Done**.
- El campo Resolution tiene un valor.

Esto incluye distintos tipos de resultados completados, como incidencias completadas, canceladas o rechazadas.

La métrica incluye tanto las resoluciones consistentes como las inconsistentes.

  4. **Inconsistent Issues**

Identifica las incidencias en las que el estado del workflow y los datos de resolución no representan un ciclo de vida coherente.

El análisis considera tres condiciones principales.

  - **Resolved but not in Done**

La incidencia tiene un valor en Resolution, pero su estado final no pertenece a la categoría Done.

  - **In Done but not resolved**

La incidencia pertenece a la categoría de estados Done, pero el campo Resolution está vacío.

  - **Invalid lifecycle data**

La incidencia pertenece a la categoría Done y tiene una Resolution, pero se detectan otras inconsistencias, como:

    - Una fecha de resolución anterior a la fecha de creación.
    - Una incidencia que se crea y pasa de inmediato directamente a Done.

Estas condiciones pueden indicar problemas de calidad de datos, de workflow o de automatización.

  5. **Reopened Issues**

Identifica las incidencias que estaban completadas y después volvieron a un estado activo del workflow.

Una incidencia se considera reabierta cuando:

  - Llegó a un estado de la categoría Done con una Resolution válida.
  - Más tarde pasó a un estado que no es Done.
  - Su Resolution se borró después.

Esta métrica puede ayudar a identificar trabajo que requirió atención adicional después de darse por terminado.

  6. **Issues with Priority Change**

Representa las incidencias en las que el campo **Priority** cambió al menos una vez durante su ciclo de vida.

Los cambios frecuentes de prioridad pueden indicar requisitos cambiantes, necesidades de negocio que se desplazan o incertidumbre sobre la priorización.

  7. **Unassigned Issues**

Representa las incidencias que actualmente no tienen responsable asignado.

Una incidencia se considera sin asignar aunque haya tenido un responsable antes y se le haya quitado después.

Esta métrica puede ayudar a identificar trabajo que ahora mismo no tiene un responsable claro.

  8. **Reassigned Issues**

Representa las incidencias en las que la responsabilidad pasó de un responsable a otro durante su ciclo de vida.

Un número alto de incidencias reasignadas puede indicar cambios de responsables, de distribución de la carga de trabajo o incertidumbre sobre quién es responsable.

**Cómo interpretar las Quick Metrics**

Las Quick Cards ofrecen una vista compacta de varios aspectos distintos de la actividad del proyecto.

En conjunto, estas métricas ayudan a entender cómo entra el trabajo al sistema, cómo avanza y cómo sale.

  - **Volumen de trabajo**

**Issues Created** e **Issues Resolved** dan una idea de la cantidad de trabajo que entra y sale del workflow.

Un aumento notable de incidencias creadas puede indicar una demanda creciente, mientras que un número alto de incidencias resueltas refleja actividad de entrega.

  - **Actividad del workflow**

**Issues In Progress** da una idea de la cantidad de trabajo que se mueve actualmente por el workflow.

Un número de incidencias en curso constantemente alto puede indicar restricciones de capacidad, acumulación de trabajo o cuellos de botella.

  - **Calidad del proceso y de los datos**

**Inconsistent Issues** y **Reopened Issues** aportan contexto sobre la fiabilidad del ciclo de vida de las incidencias.

Un número alto de inconsistencias puede indicar problemas del workflow o del gobierno de los datos, mientras que las reaperturas frecuentes pueden indicar que el trabajo se cierra antes de lograr plenamente el resultado esperado.

  - **Responsabilidad y priorización**

**Unassigned Issues**, **Reassigned Issues** y **Priority Changes** dan visibilidad sobre cómo cambian la responsabilidad y las prioridades durante el ciclo de vida de una incidencia.

Los cambios frecuentes pueden indicar requisitos cambiantes, redistribución de la carga o oportunidades de mejorar el proceso de entrada y asignación.

**Usar las métricas para mejorar**

Las Quick Cards también pueden servir como indicadores de áreas que requieren una investigación más profunda.

Acciones posibles:

- Revisar la configuración del workflow cuando se detecten estados de ciclo de vida inconsistentes.
- Exigir valores válidos en Resolution cuando las incidencias pasan a estados Done.
- Restringir las modificaciones inapropiadas de los campos Resolution y Priority.
- Mejorar las prácticas de asignación para que las incidencias tengan un responsable claro.
- Revisar los cambios frecuentes de prioridad para identificar requisitos poco claros o cambiantes.
- Analizar las incidencias reabiertas para entender por qué el trabajo completado volvió al workflow.
- Investigar las inconsistencias recurrentes para identificar problemas de automatización o de configuración.
- Revisar las transiciones automáticas que puedan generar cambios de estado prematuros o inesperados.
- Establecer prácticas claras de workflow y de Definition of Done.

El objetivo no es simplemente reducir los números que muestran estas tarjetas, sino usarlas como señales para entender **cómo se mueve el trabajo por el proyecto y dónde puede necesitar atención el proceso de fondo**.
</details>

### Métricas de Flow Health

Flow Health ofrece una vista de cómo se mueve el trabajo por el proyecto, cuánto tarda en completarse y qué tan consistente es el proceso de entrega.

El análisis combina métricas de tiempo, percentiles de entrega, previsibilidad y eficiencia del flujo para dar una visión más amplia del comportamiento del workflow.

<!-- SECCION FLOW HEALTH METRICS -->
<details>
  <summary>Detalle de las métricas</summary>

  ![Key indicators](@site/static/img/flowHealth.png)

  1. **Flow Timing Metrics**

Estas métricas describen el tiempo que una incidencia pasa esperando, siendo trabajada y avanzando por todo su ciclo de vida.

**Average Start Cycle Time**

Tiempo promedio entre la creación de la incidencia y la primera transición a la categoría de estados **In Progress**.

>```
> Start Cycle Time = Issue Created → First In Progress transition
>```

Un Start Cycle Time alto puede indicar retrasos en:
    - Triaje o entrada de solicitudes
    - Priorización
    - Asignación
    - Gestión del backlog
    - Inicio del trabajo en incidencias nuevas

**Average Cycle Time**

Tiempo promedio necesario para completar una incidencia una vez iniciado el trabajo.

>```
> Cycle Time = First In Progress transition → First Done transition
>```

Un Cycle Time alto puede indicar:
    - Cuellos de botella en el workflow
    - Trabajo bloqueado
    - Revisiones o aprobaciones retrasadas
    - Exceso de cambios de contexto
    - Retrabajo

**Average Lead Time**

Tiempo total promedio desde la creación de la incidencia hasta su finalización.

>```
> Lead Time = Issue Created → First Done transition
>```

El Lead Time representa el tiempo total transcurrido que percibe quien solicitó el trabajo o el interesado, e incluye tanto el tiempo de espera como el trabajo activo.

Conceptualmente:

>```
> Lead Time ≈ Start Cycle Time + Cycle Time
>```

Esta relación permite distinguir entre el tiempo que se espera para empezar el trabajo y el tiempo que se dedica a avanzar activamente por el workflow.

  2. **Lead Time Percentiles**

Los percentiles dan más contexto sobre la distribución de los valores de Lead Time.

**P85 Lead Time**

El valor P85 representa el Lead Time dentro del cual se entregó aproximadamente el 85 % de las incidencias completadas.

Es un umbral de planificación más representativo que el promedio cuando los tiempos de entrega varían mucho.

**P95 Lead Time**

El valor P95 representa el Lead Time dentro del cual se entregó aproximadamente el 95 % de las incidencias completadas.

Como considera la parte alta de la distribución, el P95 ofrece una visión más conservadora del tiempo de entrega y es útil para evaluar trabajo de larga duración.

Comparar el Lead Time promedio con el P85 y el P95 ayuda a ver cuánta variación existe entre las incidencias completadas.

**Flow Predictability**

Flow Predictability es una métrica derivada que compara el P85 Lead Time con el Lead Time promedio.

>```
> Flow Predictability = P85 Lead Time / Average Lead Time
>```

Los valores cercanos a 1.0 indican que el P85 está relativamente cerca del promedio, lo que sugiere menos variación en los tiempos de entrega.

Los valores más altos indican que la parte alta de la distribución del Lead Time es bastante mayor que el promedio, lo que sugiere más variabilidad.

**Umbrales de previsibilidad**

El panel usa los siguientes umbrales para dar una indicación visual de la variabilidad de la entrega:

| Valor   | Interpretación                      |
|---------|-------------------------------------|
| ≤ 1.2   | Flujo muy predecible                |
| ≤ 1.5   | Mayormente predecible               |
| ≤ 2.0   | Variabilidad notable                |
| > 2.0   | Variabilidad alta                   |
| No data | Información insuficiente            |

El color asociado al valor da una indicación visual rápida, mientras que el valor numérico es la medición de fondo.

  3. **Cómo interpretar Flow Health**

Las métricas de tiempo ofrecen perspectivas distintas del mismo workflow.

    - **Start Cycle Time** indica cuánto espera el trabajo antes de empezar.
    - **Cycle Time** indica cuánto tarda el trabajo una vez iniciado.
    - **Lead Time** representa el tiempo total transcurrido desde la creación hasta la finalización.

Esta distinción ayuda a ver dónde se producen los retrasos.

Por ejemplo, un Start Cycle Time alto con un Cycle Time relativamente bajo puede indicar que el equipo completa el trabajo con eficiencia una vez que empieza, pero el trabajo pasa demasiado tiempo esperando a que lo tomen.

A la inversa, un Start Cycle Time bajo combinado con un Cycle Time alto puede indicar que el trabajo arranca rápido pero se retrasa durante la ejecución.

El P85, el P95 y Flow Predictability aportan otra dimensión: muestran qué tan consistentes son esos tiempos de entrega entre incidencias.

  4. **Work Delivered**

El gráfico Work Delivered (%) representa la proporción de incidencias analizadas que se resolvieron de forma limpia.

![Key indicators](@site/static/img/workDelivery.png)

>```
> Work Delivered (%) = Clean Resolved Issues / Total Issues Analyzed × 100
>```

Una incidencia resuelta de forma limpia es una que:

    - Llega a la categoría de estados Done.
    - Contiene una Resolution válida.
    - Supera las comprobaciones de consistencia definidas por el análisis.

La métrica da una visión de la efectividad de la entrega al distinguir el trabajo completado del trabajo completado que contiene inconsistencias identificadas.

  5. **Flow Efficiency** 

Flow Efficiency representa la proporción del Lead Time que se dedica a trabajo activo y no a esperar.

![Key indicators](@site/static/img/flowEff.png)

>```
> Flow Efficiency = Sum of Cycle Time / Sum of Lead Time × 100
>```

Donde:

    - **Cycle Time** representa el tiempo desde la primera transición a In Progress hasta la primera transición a Done.
    - **Lead Time** representa el tiempo desde la creación de la incidencia hasta la primera transición a Done.

La métrica, por tanto, resalta la relación entre el tiempo de ejecución activa y el tiempo total transcurrido.

**Interpretación**

| Flow Efficiency | Interpretación general                    |
|-----------------|-------------------------------------------|
| > 40%           | Mayor proporción de tiempo de trabajo activo |
| 20–40%          | Tiempo de espera moderado                 |
| < 20%           | Tiempo de espera significativo            |

Estos umbrales son indicadores prácticos y no referencias universales. El nivel de eficiencia adecuado depende del tipo de trabajo y del workflow que se analiza.

  6. **Análisis a nivel de incidencia**

La sección Flow Health también ofrece una lista detallada de las incidencias incluidas en el análisis.

![Key indicators](@site/static/img/listFlowHealth.png)

La tabla combina la información estándar de las incidencias de Jira con las métricas de flujo calculadas.

**Información estándar**

    - Key
    - Summary
    - Priority
    - Reporter
    - Assignee
    - Status
    - Resolution
    
**Información calculada**

    - Inconsistent
    - Reopened
    - Reassigned
    - Changed Priority
    - Start Cycle Time
    - Cycle Time
    - Lead Time

La vista detallada permite rastrear las métricas agregadas del panel hasta cada incidencia individual.

Los datos también se pueden exportar para análisis adicionales, auditorías o reportes.

**Usar las métricas para mejorar el proceso**

Las métricas pueden ayudar a identificar distintos tipos de problemas del workflow.

  - **Start Cycle Time alto**

Áreas que conviene investigar:

    - Procesos de entrada y triaje
    - Priorización del backlog
    - Prácticas de asignación
    - Colas de trabajo

  - **Cycle Time alto**

Áreas que conviene investigar:

    - Cuellos de botella del workflow
    - Trabajo en curso
    - Etapas de aprobación o revisión
    - Incidencias bloqueadas
    - Retrabajo

  - **Lead Time alto con Cycle Time bajo**

Esto puede indicar que las incidencias pasan mucho tiempo esperando antes de que empiece el trabajo.

  - **Lead Time alto y Cycle Time alto**

Esto puede indicar retrasos tanto antes como durante el trabajo activo.

  - **Ratio de previsibilidad alto**

Un valor alto de Flow Predictability indica mayor variación en los tiempos de entrega y puede justificar investigar incidencias de duración inusualmente larga, la variabilidad del workflow o patrones de trabajo inconsistentes.

  - **Flow Efficiency bajo**

Un valor bajo de Flow Efficiency indica que gran parte del Lead Time total se pasa fuera del trabajo activo. Esto puede ayudar a identificar esperas, traspasos, colas u otras fuentes de retraso.

El propósito de estas métricas no es solo medir el rendimiento, sino dar señales que orienten un análisis más profundo del proceso de fondo.
</details>

### Resumen de Flow Metrics

La sección **Flow Metrics Overview** analiza cómo se mueven las incidencias por el workflow durante el período elegido.

Combina métricas de resumen, gráficos comparativos y datos a nivel de incidencia para identificar cuellos de botella, estados usados con frecuencia, estados poco usados y comportamientos inusuales del workflow.

El objetivo es comparar el **workflow tal como está configurado en Jira** con la forma en que el trabajo se mueve realmente por él.

<!-- SECCION FLOW METRICS OVERVIEW -->
<details>
  <summary>Detalle de las métricas</summary>

  ![Key indicators](@site/static/img/flowMetrics.png)

**Qué ayuda a identificar esta sección**

El análisis puede ayudar a responder preguntas como:

- ¿Qué estado del workflow causa más retraso?
- ¿Qué estados se visitan con más frecuencia?
- ¿Hay estados que se usan poco o nunca?
- ¿Las incidencias pasan por más estados de los esperados?
- ¿Las incidencias se saltan etapas importantes?
- ¿Qué incidencias individuales se comportan distinto del patrón general del workflow?

Estos indicadores son especialmente útiles para revisar si el workflow configurado representa con fidelidad el proceso operativo real del equipo.

**Metric Cards**

  1. **Main Bottleneck**

Identifica el estado del workflow con la mayor duración promedio.

La métrica muestra:

- El estado con la mayor duración promedio
- El tiempo promedio que se pasa en ese estado

Una duración larga no indica necesariamente un problema. Algunos estados requieren naturalmente más tiempo según el tipo de trabajo.

La métrica resulta más útil cuando se compara con los tiempos de procesamiento esperados, los SLAs o el proceso definido por el equipo.

  2. **Most Frequent State**

Identifica el estado del workflow visitado por el mayor número de incidencias.

La métrica muestra:

- El estado visitado con más frecuencia
- El tiempo promedio que se pasa en ese estado

Un estado muy frecuente puede ser un paso de procesamiento esencial, pero también puede revelar un punto donde se acumula el trabajo o donde las incidencias convergen repetidamente.

Por eso la frecuencia debe considerarse junto con la duración.

  3. **Average States per Issue**

Mide el número promedio de estados del workflow que visitan las incidencias durante su ciclo de vida.

Da una idea de qué tan complejo o consistente es el camino que se observa en el workflow.

La métrica usa umbrales visuales para resaltar posibles diferencias entre el workflow configurado y el comportamiento real de las incidencias:

- **Verde** — comportamiento de flujo esperado
- **Amarillo** — posibles inconsistencias o variaciones
- **Rojo** — desviación significativa respecto al workflow esperado

Un valor constantemente alto o bajo a lo largo de varios períodos de análisis puede indicar que el diseño del workflow y las prácticas reales del equipo no están del todo alineados.

**Gráficos**

  1. **Average vs. Maximum Duration by State**

Este gráfico compara el tiempo promedio y el máximo que se pasa en cada estado del workflow.

![Key indicators](@site/static/img/flowMetricsCh1.png)

La diferencia entre los valores promedio y máximo puede revelar incidencias atípicas que afectan de forma significativa al workflow en general.

Por ejemplo, un estado con una duración promedio relativamente baja pero un máximo muy alto puede indicar que la mayoría de las incidencias pasan por ese estado con normalidad mientras unas pocas se retrasan mucho.

  - **Reopened Issues**

Si el estado **Done** tiene una duración registrada, eso indica que al menos algunas incidencias salieron después de la categoría Done y volvieron a entrar al workflow.

Esto puede ser un indicador de:

- Retrabajo
- Cierre incorrecto
- Problemas de calidad
- Incidencias reabiertas después de completarse

Por tanto, la métrica aporta contexto adicional al interpretar la duración del estado Done.

  2. **Distribution of Issues by State**

Este gráfico de barras horizontales muestra el porcentaje de incidencias analizadas que pasaron por cada estado del workflow.

![Key indicators](@site/static/img/flowMetricsCh2.png)

La distribución permite ver con qué frecuencia se usa realmente cada estado.

Los estados con muy poco uso pueden indicar:

- Caminos opcionales del workflow
- Escenarios de negocio poco frecuentes
- Estados que ya no hacen falta
- Pasos que los equipos se saltan de forma rutinaria

Un uso bajo no significa automáticamente que un estado deba eliminarse. Sin embargo, los estados críticos con un uso inesperadamente bajo pueden indicar que el proceso configurado no se sigue de forma consistente.

**Chart View y List View**

  - **Chart View**

El Chart View ofrece el análisis agregado mediante tarjetas de resumen y visualizaciones.

Está pensado para identificar rápidamente patrones, cuellos de botella y comportamientos inusuales del workflow.

  - **List View**

El List View ofrece la información a nivel de incidencia que hay detrás de las métricas agregadas.

![Key indicators](@site/static/img/flowMetricsList.png)

Sirve para investigar incidencias individuales e identificar los registros concretos que contribuyen a promedios o patrones de workflow inusuales.

Por ejemplo, puede ayudar a identificar incidencias que:

- Pasaron por un número inusualmente grande de estados
- Se saltaron etapas esperadas del workflow
- Pasaron mucho más tiempo que el promedio en un estado concreto
- Siguieron un camino de transiciones inusual

Esto hace que el List View sea útil al pasar del **análisis agregado a la investigación de causa raíz**.

**Cómo interpretar los resultados**

El Flow Metrics Overview debe interpretarse como una herramienta de diagnóstico y no como una recomendación automática de cambiar el workflow.

Un estado con una duración alta puede ser legítimo. Un estado con poco uso puede ser necesario para casos excepcionales. Del mismo modo, un número alto de estados en el workflow no significa necesariamente que esté mal diseñado.

El valor del análisis está en comparar el comportamiento observado con:

- Los procesos de negocio esperados
- El diseño del workflow
- Los SLAs o tiempos objetivo de procesamiento
- Las prácticas del equipo
- Los resultados históricos

Así, los equipos pueden distinguir entre el **comportamiento intencional del workflow** y los patrones que pueden indicar oportunidades de mejora.

**Resumen**

El Flow Metrics Overview ofrece una vista de diagnóstico de cómo se comporta en la práctica el workflow de Jira.

Al combinar métricas agregadas con información a nivel de incidencia, ayuda a los usuarios a:

- Identificar cuellos de botella y retrasos
- Entender qué estados se usan realmente
- Detectar etapas del workflow poco usadas o que se saltan
- Investigar caminos inusuales de las incidencias
- Identificar posibles patrones de retrabajo y reapertura
- Comparar los workflows configurados con el comportamiento operativo real

Revisar estas métricas periódicamente también puede ayudar a evaluar si los cambios en el workflow producen las mejoras esperadas.
</details>

### Historial de incidencias

La sección **Issue History** ofrece una vista enfocada de cómo evolucionó una incidencia concreta de Jira a lo largo de su ciclo de vida.

Los usuarios pueden buscar una incidencia por su key y revisar tanto sus métricas de flujo específicas como su historial de cambios completo.

<!-- SECCION ISSUE HISTORY -->
<details>
  <summary>Explorar el historial de una incidencia</summary>

  ![Key indicators](@site/static/img/history.png)

**Buscar una incidencia**

La herramienta usa la key de la incidencia para recuperar su actividad histórica.

Por ejemplo:

>```
> PROJ-123
>```

La búsqueda se limita al proyecto actual, ya que la aplicación opera a nivel de proyecto.

Solo se admiten búsquedas por key de incidencia. No se puede buscar por resumen, reportero, descripción ni otros atributos de la incidencia.

**Métricas de flujo específicas de la incidencia**

Una vez que la incidencia se encuentra y se analiza, se muestran dos resultados principales:

---

  1. **Flow Health Metrics Summary (Issue-Specific)**

Una vez encontrada una incidencia, la aplicación ofrece una vista compacta de su comportamiento de flujo.

![Key indicators](@site/static/img/historyFlow.png)

El análisis a nivel de incidencia incluye información como:

    - Tiempo pasado en los distintos estados del workflow
    - Número de transiciones
    - Reingresos a estados
    - Irregularidades de flujo

Estas métricas aportan contexto sobre cómo se movió la incidencia concreta por el workflow.

  2. **Complete Issue History**

La vista de historial muestra, en orden cronológico, los cambios registrados de la incidencia elegida.

![Key indicators](@site/static/img/historyList.png)

La tabla incluye:

|Columna | Descripción                             |
|------- |-----------------------------------------| 
|Date    | Cuándo ocurrió el cambio                |
|User    | Usuario que realizó el cambio           |
|Field   | Campo que se modificó                   |
|From    | Valor anterior                          |
|To	     | Valor nuevo                             |

Esto da una vista detallada de cómo cambió la incidencia con el tiempo y facilita investigar eventos concretos.

**Filtrado por campo**

La tabla de historial se puede filtrar por el campo que cambió.

El filtro se genera de forma dinámica a partir del historial real de la incidencia. Solo se incluyen los campos con cambios registrados.

Por ejemplo:

    - Si se cambió **Assignee**, aparece como opción de filtro.
    - Si **Priority** nunca se cambió, no aparece como opción de filtro.
    - Si **Description** no tiene cambios registrados, no se incluye en la lista de filtros.

Este enfoque mantiene el filtro centrado en la información que realmente es relevante para la incidencia elegida.

**Por qué importa**

Los historiales largos de Jira pueden contener un gran número de eventos sin relación. Al investigar un problema concreto, como una reasignación o un cambio de prioridad inesperados, revisar manualmente todo el historial puede introducir ruido innecesario.

Filtrar el historial por campo permite a los usuarios concentrarse directamente en los cambios relevantes para su investigación.

Por ejemplo, en una investigación de soporte o de resolución de problemas se pueden aislar rápidamente:

    - Cambios de estado
    - Cambios de responsable
    - Cambios de prioridad
    - Cambios de resolución
    - Otros campos con actividad histórica registrada

Que un campo no aparezca en el filtro no significa que no exista en la incidencia. Solo significa que no se registraron cambios en ese campo en el historial de la incidencia.

**Casos de uso típicos**

Issue History puede ser útil para:

    - Resolver comportamientos inesperados de una incidencia
    - Investigar transiciones del workflow
    - Revisar reasignaciones o cambios de prioridad
    - Apoyar investigaciones de incidentes
    - Validar el comportamiento del workflow
    - Realizar auditorías a nivel de incidencia
    - Entender el ciclo de vida de incidencias individuales

**Resumen**

Issue History combina cuatro capacidades en una sola vista:

    - Búsqueda enfocada de incidencias por key
    - Métricas de flujo específicas de la incidencia
    - Historial de cambios en orden cronológico
    - Filtrado dinámico según los cambios registrados

En conjunto, estas funciones facilitan pasar de **"algo le pasó a esta incidencia"** a **"qué pasó exactamente, cuándo y quién lo cambió"**.
</details>
