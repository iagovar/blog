---
template: post

title: CI/DI - Integración continua y entrega continua

description: Repaso básico y chuletas sobre CI/DI + Github Actions

comments: true

date: 2023-01-23

---

<style type="text/css">
	article td {
		text-align: left !important;
	}
	.piedefoto {
		font-size: small;
	}
</style>

<img src="https://iagovar.com/assets/git/diagrama-ci-di.svg">

<center class="piedefoto">
Diagrama obtenido y modificado del <a href="https://campus.open-bootcamp.com/cursos/10/leccion/128">curso de introducción a CI/DI</a> de OpenBootcamp
</center>

## Repaso de conceptos principales sobre CI/DI

- **Integración continua (CI)**: proceso automatizado de compilación, pruebas y despliegue de software.

- **Entrega continua (CD)**: proceso automatizado de liberación de software a producción.

- **Configuración de herramientas de CI/CD**: configuración de un servidor de integración continua (como Jenkins, Travis, CircleCI, etc.) para ejecutar automáticamente las tareas de compilación, pruebas y despliegue.

- **Pruebas automatizadas**: configuración y ejecución de pruebas automatizadas (unitarias, de integración, de aceptación, etc.) como parte del proceso de CI.

- **Despliegue automatizado**: configuración de herramientas para desplegar automáticamente el software a diferentes entornos (desarrollo, pruebas, producción).

- **Monitorización y análisis de métricas**: configuración de herramientas para monitorizar y analizar métricas (como tiempo de ejecución, uso de recursos, rendimiento, etc.) para mejorar la calidad del software y detectar problemas.

- **Integración con herramientas de gestión de proyectos**: integración con herramientas de gestión de proyectos (como Jira, Trello, Asana, etc.) para automatizar tareas relacionadas con el seguimiento de tareas y el ciclo de vida de los proyectos.

## Github Actions

Github Actions es la respuesta de Github a la demanda de estos servicios, con la intención de tener todo lo posible integrado en la plataforma.

Hacer pantallazos de Actions no tiene mucho sentido (seguramente cambien en el futuro) y la [documentación de github](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions) te llevará bastante lejos, pero podemos hacer un cuadro resumen, para que puedas ponerte al día con facilidad.


<pre>
<code>
name: learn-github-actions
run-name: ${{ github.actor }} is learning GitHub Actions
on: [push]
jobs:
  check-bats-version:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
</code>
</pre>

Los *workflows* son el elemento principal que configura el usuario.

Como se puede ver en el código, están disparados por [eventos](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows) (un *push* en este caso).

Dentro de los *workflows* se definen *jobs* (con sus conjuntos de pasos) que corren en un *runner* (en este caso, *ubuntu-latest*).

Estos *jobs* ejecutan acciones, que puedes crear tú o puedes buscar en [este repo de Github](https://github.com/actions). Por ejemplo, `actions/checkout@v3` significa que que es el *tag* v3 del repo *[checkout](https://github.com/actions/checkout/tree/v3)* del usuario *actions* (que ha creado el propio Github).

Visualmente representado, es esto:

<center><img src="https://docs.github.com/assets/cb-33882/images/help/images/overview-actions-event.png"></center>

## Más información

- [Webinar Primeros Pasos con Github Actions - Lemoncoders](https://www.youtube.com/watch?v=Rfe4aNNIoBo)