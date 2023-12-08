---
template: post

title: Workflow o flujos de trabajo habituales en Git

description: Flujos de trabajo habituales en git

comments: true

date: 2023-01-09

---



Vas a encontrar en internet muchas opiniones de cómo es un flujo de trabajo ideal, y verás que diferentes organizaciones tienen diferentes inclinaciones al respecto.

En general las diferencias no son tan grandes cómo pueda parecer al principio, y además de las recomendaciones sobre cómo tratar el código en sí mismo, sus diferencias radican, sobre todo, en cómo gestionar la combinación de ramas.

Un flujo de trabajo típico consiste en los siguientes pasos:

1. Update: Actualizar tu repositorio local, generalmente con un `git pull` o `git fetch`.
2. Change: Harás cambios sobre una rama, o bien crearás una nueva rama sobre la que trabajar con `git branch`.
3. Review: Con `git diff` o alguna herramienta gráfica revisarás los cambios, bien sólo, bien con algún compañero de trabajo/supervisor.
4. Commit: Guardarás los cambios con `git commit` y seguramente subas tu rama al repo *origin* con `git pull`.

	Luego ya dependiendo de la organización incorporarás los cambios (cuando sea oportuno) a través de un `git merge`, `git rebase`, o muy probablemente, a través de un *pull request* que solicitarás a través de la interfaz web del repositorio de tu empresa. Con frecuencia otra persona será la encargada de revisar tu código y integrar los cambios en la rama principal.


## Tipos de workflows más comunes en Git

Generalmente se puede distinguir tres tipos de workflows.

1. Workflow centralizado. Existe un repositorio con una rama, y sobre él trabajan todos los desarrolladores.

	Este enfoque tiene la ventaja de ser fácil de usar, pero tiene como desventaja que puede generar conflictos y problemas de gestión, ya que todos los desarrolladores trabajan sobre el mismo repositorio y rama, limitándolo a proyectos pequeños.

2. Workflow for ramas. Existe un repositorio, y cada nueva característica, bug, etc, requiere la creación de una rama que más tarde se fusionará con la rama principal.

	Este enfoque ayuda a separar el trabajo en progreso de la rama principal, permitiendo que las características o correcciones de errores se integren en el repositorio principal de forma controlada.

	- Es habitual encontrar *gitflow* en internet, como una referencia de tipo de workflow. Se trata, simplemente, de un tipo de workflow por ramas donde todas las modificaciones se integran en una rama de desarrollo, antes de integrarse en la rama de producción (*master*).

	Los flujos de trabajo por ramas son más adecuados para proyectos con más desarrolladores y cambios frecuentes.

3. Workflow por forks. Los desarrolladores no sólo disponen de una copia local sino de una copia pública. El desarrollador trabaja con sus propias copias locales y públicas y luego, mediente un *pull request*, se integran en el repositorio original.

	Este enfoque permite una mayor libertad para desarrolladores y es adecuado para proyectos Open-Source con muchos colaboradores, pero tiene una mayor complejidad en cuanto a la revisión de cambios y la integración de los mismos.


## Workflow simple en git

1. Clonar el repositorio de la empresa en tu máquina local.

	Un ejemplo con *Github* sería, navegando hasta tu directorio local, donde quieres que resida el repositorio, usar `git clone https://github.com/miempresa/mi-repo.git`.

	Lo más habitual es que si es el repositorio de alguna organización no te deje clonarlo sin más, y *git* te pida algún tipo de autentificación, ya sea con usuario y contraseña, o unas claves SSH.

	Eso dependerá del servidor que esté usando la organización y cómo lo tenga configurado, no te lo puedo explicar aquí, tendrás que buscarte la vida.

2. Configurar tu máquina local para trabajar con varios repositorios.

	Es importante configurar tu usuario y correo electrónico en git antes de empezar a trabajar con el repositorio, para que tus cambios sean identificables:

	<pre>
	<code>
	git config <span class="blue">--global</span> user.name <span class="green">"tu nombre"</span>
	git config <span class="blue">--global</span> user.email <span class="green">"tu@correo.com"</span>
	</code>
	</pre>

	Si trabajas con más de un repositorio, es posible que quieras tener distintas configuraciones para cada uno de ellos. Puedes usar el comando `git config` para establecer configuraciones específicas para un repositorio en particular, simplemente añadiendo el flag `--local` al comando. Por ejemplo, para configurar tu nombre y correo electrónico para el repositorio local llamado *mi-repo*:

	<pre>
	<code>
	cd <span class="green">mi-repo</span>
	git config <span class="blue">--local </span> user.name <span class="green">"tu nombre"</span>
	git config <span class="blue">--local</span> user.email <span class="green">"tu@correo.com"</span>
	</code>
	</pre>

3. Crear una nueva rama y hacer cambios.

	Antes de empezar a trabajar en el código de la empresa, es recomendable crear una nueva rama donde hacer tus cambios. Usa el comando `git branch` seguido del nombre de la rama para crearla, y luego usa `git checkout` para cambiarte a esa rama. Ahora puedes empezar a hacer tus cambios en el código.

	No sería extraño que tuvieses la necesidad de trabajar en varias ramas, y te vieses forzado a usar [git stash](https://iagovar.com/git/git-stash) para realizar tu trabajo.

4. Revisar tus cambios.

	Usa el comando `git diff` (o alguna herramienta visual) para ver las diferencias entre el código en la rama en la que estás trabajando y el último commit en esa rama. Esto te ayudará a revisar tus cambios y asegurarte de que estás avanzando en la dirección correcta.

5. Enviar tus cambios al repositorio remoto.

	Una vez que creas que has finalizado el trabajo en tu rama *feature* local, puedes enviar tus cambios al repositorio remoto con:

	<pre>
	<code>
	git <span class="blue">checkout</span> <span class="green">feature</span>
	git <span class="blue">push</span> <span class="pink">-u</span> <span class="pink">repo-remoto</span> <span class="green">nombre-de-la-rama</span>
	</code>
	</pre>

	- Con el argumento `-u` le indicaremos a Git que la rama *feature* no existe en el repo remoto, y que debe crearla.

	- *repo-remoto* será, habitualmente, *origin*.
	- *nombre-de-la-rama* será, habitualmente, la rama sobre la que hayas hecho *checkout* en local.


6. Integrar los cambios en la rama principal o rama padre.

	El proceso para esta parte del flujo de trabajo dependerá mucho de la organización. O bien ejecutarás tú musmo un [git merge/rebase](https://iagovar.com/git/git-merge-rebase), o bien lo ejecutará un compañero tuyo después de haber discutido los cambios, o bien deberás ejecutar un *pull request* sobre otro repositorio.

	Otra herramienta, menos frecuente, pero que puede llegar a usarse es [Git cherry-pick](https://iagovar.com/git/git-scherry-pick).


## Ampliar la información

- [Artículo de este blog sobre Git Flow](https://iagovar.com/git/git-flow) es uno de los *workflows* más utilizados con Git.

- [Git Workflow (Atlassian)](https://www.atlassian.com/git/tutorials/comparing-workflows)
- [Git Feature Branch Workflow (Atlassian)](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
- [Forking workflow (Atlassian)](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)