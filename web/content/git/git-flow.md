---
template: post

title: Git Flow - Chuleta de comandos, qué hace cada rama, etc

description: Git Flow es uno de los flujos de trabajo más comunes. Encontrarás una explicación breve, a modo de referencia.

comments: true

date: 2023-01-23

---

<style type="text/css">
	article td {
		text-align: left !important;
	}
</style>

<img src="https://iagovar.com/assets/git/git-flow-branches.png" alt="Gitflow branches model">

Ya hemos tratado hablado de *workflows* de Git en un [artículo anterior](https://iagovar.com/git/git-workflows). 

*Git Flow* es uno de los workflows de Git más famosos, que se basa en la creación y uso de ramas específicas para cada etapa del desarrollo de un proyecto. La imagen anterior explica muy bien cuál es el flujo de trabajo de *Git Flow*.

Básicamente tenemos dos ramas principales:

- **Rama Master/Main**: Es la rama principal de producción, donde se encuentran solo los cambios que ya han sido probados y están listos para ser liberados. Esta rama siempre debe mantenerse estable y se recomienda no hacer cambios directamente en ella, sino mediante *merge* de otras ramas.

- **Rama Develop**: Es la rama principal de desarrollo, donde se lleva a cabo el trabajo diario de los desarrolladores. Esta rama se utiliza para integrar los cambios de las ramas de características y solución de problemas antes de ser liberados en producción.

Además de estas dos ramas principales, *Git Flow* establece la creación de ramas secundarias para manejar diferentes tipos de cambios:

- **Ramas de Características** (feature): Son ramas creadas para desarrollar una nueva característica o función específica. Estas ramas se crean a partir de *Develop*, se trabaja en ellas y luego se integran de vuelta a *Develop*.

- **Ramas de Releases**: Son ramas creadas para preparar una nueva versión para su lanzamiento. Estas ramas se crean a partir de *Develop* y se utilizan para hacer pruebas finales y para preparar los cambios para su liberación en producción.

- **Ramas de Hotfixes**: Son ramas creadas para solucionar rápidamente un problema crítico en producción. Estas ramas se crean a partir de *Master/Main* y se utilizan para hacer cambios rápidos y solucionar problemas de inmediato.

- **Ramas de support**: Se utiliza para manejar problemas o errores en versiones previas del software, se basa en la rama "master" o "main" para crear parches o correcciones y fusionarlos de nuevo en la rama "master" para versiones futuras del software. Se diferencia de hotfix en que este ultimo se usa para corregir problemas críticos en la versión actualmente en producción, mientras que support se enfoca en corregir problemas en versiones previas.

## Comandos más comunes en Git Flow

| Comando | Descripción |
|:---:|:---:|
| `git flow init` | Inicializa un repositorio local y establece la estructura de ramas de Git Flow, creando las ramas develop, master y una serie de ramas auxiliares para el manejo de releases, hotfixes y features |
| `git flow feature start nombre-de-la-feature` | Crea una nueva rama para el desarrollo de una nueva característica, basándose en la rama develop, y la llama **feature/nombre-de-la-feature**. |
| `git flow feature finish nombre-de-la-feature` | Finaliza el desarrollo de una característica, fusionando los cambios en la rama develop y eliminando la rama **feature/nombre-de-la-feature**. |
| `git flow release start nombre-version` | Inicia una nueva release basándose en la rama develop, creando una rama **release/nombre-de-la-release**. Habitualmente de nombre se usa un número, pero también vale un string. |
| `git flow release finish nombre-version` | Finaliza una release, fusionando los cambios en la rama master y en la rama develop, y etiquetando el commit con el nombre de la release. |
| `git flow hotfix start nombre-del-hotfix` | Inicia un hotfix basándose en la rama master, creando una rama **hotfix/nombre-del-hotfix**. |
| `git flow hotfix finish nombre-del-hotfix` | Finaliza un hotfix, fusionando los cambios en la rama master y en la rama develop, y etiquetando el commit con el nombre del hotfix. |


## Cómo instalar Git Flow

Aunque se puede trabajar en un flujo de trabajo *Git Flow* con los comandos que ya conocemos de Git, hay herramientas para Git que nos automatizan una gran parte del proceso.

- **En Linux**: Generalmente a través de tu sistema de paquetes. En mi caso, por ejemplo, que uso un sistema basado en Debian, es `sudo apt install git-flow`.

- **En MacOS**: Si tienes [HomeBrew](https://brew.sh/index_es) instalado, con el comando `brew install git-flow`.

- **En Windows**: Git para Windows ya incorpora *Git Flow* en el instalador. Si tienes una versión reciente no necesitas hacer nada más. Si ves que no funciona, seguramente tengas que actualizar tu instalación de Git.

## Desventajas de Git Flow

Si buscs información sobre el tema vas a encontrar cantidad de opiniones. En general, se puede resumir en una palabra: Complejidad.

Este flujo de trabajo requiere muchas ramas y muchos *merges*, lo que burocratiza aún más la notable complejidad de *Git*, y el número de *merges* puede provocar problemas según se avanza en el proyecto, en sistemas de integración y despliegue contínuo, y por el simple hecho de que, visualmente, se hará mucho más tedioso rastrear cualquier cosa en el historial.

El autor original de Gitflow también apunta que este flujo es útil para desarrollos donde tienes que soportar múltiples versiones del mismo software, y que esto no es habitual en la mayor parte del software actual, que corre en un servidor web. Para este caso recomienta [Github Flow](https://docs.github.com/es/get-started/quickstart/github-flow), más sencillo.

## Más información

- [A successful git branching model](https://nvie.com/posts/a-successful-git-branching-model/)

