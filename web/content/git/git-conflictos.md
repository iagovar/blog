---
template: post

title: Gestionar conflictos en Git, volver a commits anteriores y destruír datos

description: ¿Cómo tratar los conflictos en Git? ¿Y si tenemos que volver a un commit anterior? ¿Y si hay archivos confidenciales publicados y tenemos que eliminarlos?

comments: true

date: 2023-01-12

---

<style type="text/css">
	.blue {color: lightblue;}
	.green {color: lightgreen;}
	.pink {color:pink;}
	article td {
		text-align: left !important;
	}
</style>

<div id="toc"></div>

## ¿Cuándo suceden los conflictos en Git?

Los conflictos en Git ocurren cuando se hacen cambios en el mismo archivo y las mismas líneas en diferentes ramas, y luego se intenta combinarlas mediante un merge o al hacer un pull o push, git no puede decidir cuál de las dos versiones es la correcta, y genera un conflicto que debe ser resuelto manualmente.

### Algunos ejemplos de estas situaciones:

- Cuando se intenta hacer un *merge* entre dos ramas y ambas han modificado el mismo archivo y las mismas líneas.

- Cuando se intenta hacer un `git pull` y se encuentran diferencias entre el repositorio local y remoto en el mismo archivo y las mismas líneas.

- Cuando se intenta hacer un `git push` y se encuentran cambios en el repositorio remoto que no están presentes en el repositorio local, y ambos han modificado el mismo archivo y las mismas líneas.

- Cuando se intenta hacer un `git cherry-pick `y se encuentran cambios en el *commit* que se está intentando aplicar y en el repositorio local, y ambos han modificado el mismo archivo y las mismas líneas.

- Cuando se intenta hacer un `git rebase` y se encuentran cambios en los *commits* que se están intentando aplicar y en el repositorio local, y ambos han modificado el mismo archivo y las mismas líneas.

Siempre que suceda un conflicto, Git te lo indicará, y te dirá que lo resuelvas (editando los archivos en conflicto), además de proporcionate los pasos que puedes dar después de la edición para marcar el conflicto como solucionado.

Lo que NO puede hacer Git por tí es decidir qué cambios necesita el archivo. Eso te lo tienes que cocinar tú mismo.

## Un ejemplo de un conflicto y cómo se soluciona

### Conflicto al ejecutar un git pull

1. Supongamos que tienes un repositorio local en el que estás trabajando en un archivo llamado *archivo.txt*, y haces un cambio en la línea 10.

2. Mientras tanto, otra persona también está trabajando en el mismo archivo en su repositorio local y hace un cambio en la línea 10 también.

3. Luego, la otra persona hace un `git push` para subir sus cambios al repositorio remoto.

4. Ahora, intentas hacer un `git pull` en tu repositorio local para traer los cambios remotos más recientes, pero Git detecta un conflicto en la línea 10 del archivo *archivo.txt*.

5. Para resolver el conflicto, debes abrir el archivo *archivo.txt* y buscar las líneas marcadas con los conflictos, que tendrán el siguiente formato:

	<pre>
	<code>
	&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
	Tu cambio local
	=======
	Cambio remoto
	&gt;&gt;&gt;&gt;&gt;&gt;&gt; Nombre_de_la_rama_remota
	</code>
	</pre>

6. Decide cuál de los cambios quieres mantener o edita el archivo para combinar ambos cambios y guarda los cambios.

7. Una vez resuelto el conflicto, debes hacer un `git add archivo.txt` para indicar que el conflicto ha sido resuelto.

8. Luego debes hacer un `git commit` para crear un nuevo *commit* con los cambios resueltos.

9. Finalmente, puedes hacer un `git push `para subir los cambios resueltos al repositorio remoto.

## Conflicto al ejecutar un git push

1. Supongamos que tienes un repositorio local en el que estás trabajando en un archivo llamado archivo.txt, y haces un cambio en la línea 10.

2. Mientras tanto, otra persona también está trabajando en el mismo archivo en su repositorio local y hace un cambio en la línea 10 también.

3. Luego, la otra persona hace un `git push` para subir sus cambios al repositorio remoto.

4. Ahora, tú intentas hacer un `git push` en tu repositorio local para subir tus cambios al repositorio remoto, pero Git detecta un conflicto en la línea 10 del archivo archivo.txt debido a que los cambios que intentas subir ya han sido realizados por otra persona.

5. Entonces, debes resolver el conflicto como se explicó en el ejemplo anterior: abrir el archivo, decidir cuál de los cambios quieres mantener o editar el archivo para combinar ambos cambios, y luego hacer un `git add `y un `git commit` para finalizar la resolución del conflicto.

6. Finalmente, puedes hacer un `git push` para subir los cambios resueltos al repositorio remoto.

## Conflictos desde la interfaz web de github y gitlab

**Apunte**: Github tiene [su propia documentacion](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) al respecto, y Gitlab [también](https://docs.gitlab.com/ee/user/project/merge_requests/conflicts.html).

Github y Gitlab tienen unas herramientas llamadas *pull request* y *merge request* respectivamente, que permiten mejorar el flujo de trabajo cuando se trabaja en equipo.

Estas funcionalidades no están incluídas en *git* per sé, sino que alguien las ha desarrollado como una capa por encima de *git*.

Como hemos visto en [los flujos de trabajo habituales en git](https://iagovar.com/git/git-workflows), hay un punto donde [integramos los cambios entre ramas](https://iagovar.com/git/git-merge-rebase), ya sea con *merge* o *rebase*.

Esto tiene sentido cuando eres el único desarrollador, o, quizá, cuando es un equipo muy pequeño fácil de coordinar, donde todo el mundo sabe lo que está haciendo.

Sin embargo, bien sea porque hay mucha gente, bien sea porque el equipo que integras quiere centrar su energía en el desarrollo y no en resolver conflictos, se puede designar a una persona para ejecutar esta función.

El flujo de trabajo (muy resumido) es el siguiente:

1. Ejecutas un desarrollo en tu rama *feature* y comiteas los cambios.
2. Haces un `git push` de tus rama al repositorio remoto.
3. Aquí es donde está el meollo:
	- En un *setup* sin una interfaz web como Github, Gitlab o Gitea, alguien que controla el repositorio `--bare` es el encargado de revisar cómo está tu rama, resolver conflictos e integrar tu rama con la rama principal.

		Tendrías que avisarle por algún medio, o tendría que estar constantemente pendiente de los cambios que se van subiendo, lo cual no es muy práctico para esta persona, ni para el quipo en general.
	<hr>
	- Si existe alguna herramienta web sobre git, simplemente vas a la URL de tu repo remoto, y solicitas un *pull request* de tu rama, a la rama master. Esta persona recibirá notificación por algún medio, o simplemente verá en la interfaz web que tiene solicitudes de *pull request* pendientes.

		La propia interfaz le guiará en el proceso, indicándole si hay conflictos, dónde, etc. No es magia, pero como hay botones, colores, indicadores, es más intuitivo y fácil de manjear.

		Esto tampoco hará que Git resuelva ningún conflicto, sigue siendo un problema que debe resolver el encargado de manejar los *pull request* y los involucrados en las ramas afectadas

## Comandos útiles para ayudar en la resolución de conflictos

Muchos comandos ya los habrás visto en otros posts sobre [Git](https://iagovar.com/git/).

- `git log --branches`: Muestra el historial de todas las ramas en el repositorio, ordenadas cronológicamente.

- `git log --all`: Es similar a git log --branches pero muestra también los *commits* que no están en ninguna rama (o que están en ramas eliminadas)

- `git log --graph --all`: Muestra el historial de todas las ramas, con un gráfico ASCII que ilustra la relación entre las ramas y los *commits*.

- `git log nombre-de-la-rama-1 nombre-de-la-rama-2`: Muestra solo los *commits* de las dos ramas específicas, ignorando el resto.

- `git checkout commit-id`: Permite cambiar a un *commit* específico en el repositorio, generando un "detached HEAD" (una situación en la que los *commits* no están asociados a ninguna rama) para evitar esto se debe crear una nueva rama con `git branch nombre-de-la-rama` a partir de dicho *commit* y trabajar desde ahí.

- `git revert`: deshace un *commit* específico en el repositorio, creando un nuevo *commit* con los cambios revertidos.

- `git commit --amend`: Permite modificar el último *commit*, añadiendo o modificando los cambios.

- `git clean -i`: Elimina archivos no seguidos del directorio de trabajo, con una interfaz interactiva para confirmar cada archivo antes de eliminarlo.

- `git rm nombre-de-fichero`: Deja de rastrear el archivo en el repositorio a partir del momento en que se ejecuta este comando, este archivo ya no aparecerá en el sistema de archivos ni en los nuevos *commits* que se hagan.

<hr>

- `git reset`: deshace los cambios locales, volviendo al estado del último *commit*. Se puede usar con diferentes opciones:

    `--soft`: mueve el apuntador de la rama actual al *commit* especificado pero mantiene los cambios locales.

	`--mixed` (por defecto): mueve el apuntador de la rama actual al *commit* especificado y descarta los cambios locales no confirmados.

    `--hard`: mueve el apuntador de la rama actual al *commit* especificado, descartando los cambios locales no confirmados y borrando los cambios en el directorio de trabajo.

- `git reset --hard commit-id`: "destruye" la historia desde el *commit* especificado, todos los *commits* posteriores y sus cambios se borran. Después de ejecutar este comando, si se intenta hacer un push, git dirá que estas atrás del HEAD remoto y se tendría que forzar el upload con un push -f. Este comando es peligroso y sólo debe ser usado en situaciones especiales como borrado de archivos con información confidencial que no deberían estar en el repositorio remoto.

### Ejemplo de caso de uso con git reset --hard:

- Se ha detectado un error en el código en producción, y se ha localizado el *commit* específico donde se introdujo el error.
- Se utiliza `git log` para encontrar el *commit* específico donde se introdujo el error.
- Se utiliza `git reset --hard` seguido del identificador del *commit* para volver al estado del repositorio antes de introducir el error.
- Los cambios locales no confirmados y los cambios en el directorio de trabajo se descartan.
- Se utiliza `git push -f` para actualizar el repositorio remoto con los cambios.
- Se realiza una prueba en producción para verificar que el error ha sido corregido.

Es importante mencionar que el uso de `git reset --hard` es peligroso ya que elimina la historia del repositorio desde el *commit* especificado, por lo que se debe tener precaución al utilizarlo. Si se quiere mantener un registro de los cambios realizados se recomienda utilizar `git revert` o `git branch `antes de utilizar `git reset --hard`.