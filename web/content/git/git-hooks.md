---
template: post

title: Alterar el comportamiento de Git con Git Hooks

description: Git permite modificar su comportamiento con Hooks, te explico qué son y cómo usarlos

comments: true

date: 2023-01-10

---

<style type="text/css">
	pre {background-color: #303030; color: #ddd;}
	.blue {color: lightblue;}
	.green {color: lightgreen;}
	.pink {color:pink;}
	article td {
		text-align: left !important;
	}
</style>

Los *git hooks* son scripts personalizados que se ejecutan automáticamente en diferentes momentos del flujo de trabajo de git, como antes o después de hacer un commit, un push, o un merge. Estos scripts te permiten automatizar tareas como validaciones, pruebas, notificaciones, y muchas otras acciones personalizadas.

Para usar los git hooks, debes crear un script en el **lenguaje de tu elección** (bash, python o lua, por ejemplo) y colocarlo en el directorio `.git/hooks` del repositorio en el que quieres usar el hook. Los nombres de los archivos de los git hooks deben seguir un patrón específico, como "pre-commit", "post-commit", "pre-push", etc.

Por ejemplo, para crear un script de pre-commit que valide que todos los archivos modificados tienen una línea en blanco al final, podrías crear un archivo llamado "pre-commit" en el directorio `.git/hooks` y escribir el script correspondiente en él. El script se ejecutaría automáticamente cada vez que intentaras hacer un commit, y si algún archivo modificado no cumpliera con la validación, el commit no se realizaría.

Existe también la posibilidad de usar herramientas de terceros para administrar los git hooks, que te permiten hacerlos mas flexibles, y con una sintaxis mas acorde a tus necesidades, y también poder reutilizarlos en diferentes proyectos.

<hr>

Si ejecutas `ls` dentro de tu directorio `~/tu-repo/.git/hooks` observarás lo siguiente:

````
applypatch-msg.sample
commit-msg.sample
fsmonitor-watchman.sample
post-update.sample
pre-applypatch.sample
pre-commit.sample
pre-merge-commit.sample
prepare-commit-msg.sample
pre-push.sample
pre-rebase.sample
pre-receive.sample
update.sample
````
Estos son archivos de ejemplo que proporciona Git, si los abres verás que son scripts *sh* que puedes ejecutar.

Si renombras `pre-push.sample` a `pre-push.sh`, el script mencionado se ejecutará cada vez que lances un comando `git push` en ese repositorio.

## Algunos ejemplos de hooks posibles.

Dentro de `~/tu-repo/.git/hooks` ya puedes observar las posbilidades que existen, en cualquier caso aquí te presento una tabla con algunas con una breve explicación para cada una de ellas.

|   Nombre del hook  |                                                                                                          Uso                                                                                                          |   |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|
| pre-commit         | Este hook se ejecuta justo antes de hacer un commit. Puedes usarlo para validar los cambios antes de guardarlos. Por ejemplo, puedes usarlo para asegurarte de que los archivos tengan un formato específico.         |   |
| prepare-commit-msg | Este hook se ejecuta justo antes de crear el mensaje de commit. Puedes usarlo para personalizar el mensaje de commit de forma automática. Por ejemplo, puedes usarlo para añadir un prefijo al mensaje de commit.     |   |
| post-commit        | Este hook se ejecuta justo después de hacer un commit. Puedes usarlo para ejecutar una tarea automatizada, como enviar un correo electrónico o notificar a un servicio externo.                                       |   |
| pre-push           | Este hook se ejecuta justo antes de hacer un push. Puedes usarlo para validar los cambios antes de enviarlos al repositorio remoto. Por ejemplo, puedes usarlo para asegurarte de que los cambios estén documentados. |   |
| post-checkout      | Este hook se ejecuta justo después de hacer un checkout. Puedes usarlo para ejecutar una tarea automatizada, como actualizar una configuración específica.                                                            |   |

## Server-side hooks

Los hooks server-side en Git son scripts que se ejecutan en el servidor remoto cada vez que se realiza una acción en el repositorio. Los tres tipos de hooks server-side más comunes son:

| Tipo de Hook |                                                                                                                       Ejemplo de Uso                                                                                                                       |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| pre-receive  | Se ejecuta justo antes de recibir cambios en el repositorio remoto. Se utiliza para verificar la integridad de los cambios antes de aceptarlos.                                                                                                            |
| update       | Se ejecuta justo después de recibir cambios en el repositorio remoto. Es útil para actualizar bases de datos o generar informes.                                                                                                                           |
| post-receive | Se ejecuta justo después de que los cambios hayan sido recibidos y procesados en el repositorio remoto. Es útil para notificar a los miembros del equipo sobre los cambios recibidos o desplegar automáticamente los cambios en un servidor de producción. |

Para usar estos hooks, debes agregar el script deseado en el archivo correspondiente dentro de la carpeta *.git/hooks* del repositorio remoto (por ejemplo `update.py`), y asegurarte de que el archivo tenga permisos de ejecución.

Cabe destacar que estos son solo ejemplos comunes, se pueden crear otro tipo de hooks o aplicarles otras funciones, siempre se puede adaptar a las necesidades del proyecto

## Saber más

- [Awesome git hooks](https://github.com/CompSciLauren/awesome-git-hooks): Una lista de hooks interesantes para aplicar.


