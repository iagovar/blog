---
template: post

title: Git merge y git rebase: Entiende cómo funcionan

description: Diagramas y listas numeradas para entender git merge y git rebase

comments: true

date: 2022-12-13

---

<style type="text/css">
	.cajaverde {background-color: lightgreen; padding: 1em; display: block;}
</style>

<center><img src="https://iagovar.com/assets/git/merge-rebase.svg" alt="Diagrama de git merge y git rebase">
</center>

<hr>

<div id="toc"></div>

¿Aprendiendo Git últimamente? **es normal sentirse abrumado**. Aquí el comentario de un desarrollador profesional, sacado de un foro, para que entiendas el contexto en el que estas:

> Todavía recuerdo la primera vez que empecé a trabajar con git, que me advirtieron que nunca usara rebase, porque podía ser peligroso. Fue sólo cuando me mudé a otro entorno de trabajo, que aprendí a usarlo, y sólo hace unos cinco meses que se puede añadir --rebase con el botón pull por defecto. Pero aún así me encuentro usando Git Bash shell a menudo.
>
> También me llevó mucho tiempo aprender que origin era el remoto por defecto y que se pueden añadir más remotos y que también se puede hacer push a un repositorio en una unidad USB.
> 
> He estado trabajando con git durante unos cuatro años y es sólo en el último año que me siento un poco cómodo con él. Pero aún así, cuando busco un comando de git, me siento abrumado por la gran cantidad de opciones.
>
> Por otro lado, todavía me sorprende la cantidad de comandos que tengo que teclear para hacer algo tan simple como volver a basar mis cambios no confirmados con el último commit de origin. O lo que tienes que hacer para aplastar (squash) tus commits en la rama actual desde tu último push a master (o develop).
> 
> Git es como un conjunto de herramientas relativamente pequeñas e intrincadas, que a menudo desconciertan a los principiantes que sólo quieren realizar un número limitado de operaciones de acuerdo con un cierto estilo de trabajo.

## Conceptos que debes repasar

<span class="cajaverde">
	Para acompañar este artículo te recomiendo usar <a href="https://github.com/iagovar/openbootcamp/tree/main/6%20Control%20de%20versiones/6%20ramas-branches">este script</a> que puedes ejecutar con *bash* si estás en Linux, o con la consola *git bash* que viene incluída en Git para Windows.
</span>

- Git no elimina cosas: Aunque siempre puedes volver a un punto anterior en la historia de tu repositorio usando el comando `git reset`, pero es importante tener en cuenta que este comando no elimina commits de forma permanente sino que simplemente deshace los cambios que se hicieron en esos commits. Si quieres eliminar commits de forma permanente, puedes usar el comando `git revert`, que crea un nuevo commit que deshace los cambios de un commit específico.

- Commit ID: El commit ID es un *checksum* del contenido del commit, el ID del commit anterior y diferente información del autor/commiter (los detalles no son importantes ahora). El ID que se genera es único, y cualquier cambio en los parámetros que forman el commit generaría un *checksum* diferente.

	Esta es la forma en la que GIT es capaz de diferenciar entre commits, simplemente compara dos checksums. Es una forma muy sencilla de saber si dos objetos contienen la misma información.

- Si **NO** manejas bien los conceptos de rama (branch), *staging area*, *origin*, etc, entonces este artículo no es para tí.


## Algunas diferencias entre merge y rebase

|          Característica          | git merge  |       git rebase    |
|---------------------------------:|:----------:|:-------------------:|
| Crea un nuevo commit             | Sí         | No                  |
| Modifica la historia del repo    | No         | Sí                  |
| Se usa para fusionar ramas       | Sí         | Sí                  |
| Usa un commit de fusión          | Sí         | No                  |
| Mantiene la historia sin cambios | Sí         | No                  |
| Requiere push especial           | No         | Quizá `git push -f` |
| Aplica cambios al código         | No         | Sí                  |
| Fácil de revertir                | Sí         | No                  |
| Sencillez                        | Alta       | Baja                |

## Git Merge

<center><img src="https://iagovar.com/assets/git/git-merge.svg" alt="Diagrama de git merge y git rebase">
</center>

Git intentará fusionar ambas ramas automáticamente y creará un *merge commit* nuevo. Si esto no se puede hacer automáticamente, Git te solicitará que resuelvas los conflictos (tendrás que editar archivos) y continues con el proceso.

#### Un ejemplo del mensaje de un merge commit

Si ejecutásemos un `git log -1 --verbose` veríamos algo como esto:

<pre><code>
<span class="blue">commit</span>: 	<span class="pink">e2bc6ed88d6c8f1152e82b5d4f4a9d8a5c5ccbe6</span> (HEAD -> develop, feature)
<span class="blue">Merge</span>: 	<span class="pink">6f7b3d4 a4a4f9a</span>
<span class="blue">Author</span>: 	<span class="green">Iago Var &lt;iago.var@example.com&gt;</span>
<span class="blue">Date</span>: 	<span class="green">Mon Jan 1 12:00:00 2022 -0600</span>

Merge branch 'feature' into develop

This merge integrates the changes made in the 'feature' branch into the 'develop' branch.

Changes made in 'feature':
- Added a new feature
- Fixed a bug

Changes made in 'develop':
- Improved performance
- Fixed another bug

Conflicts:
- file1.txt: resolved
- file2.txt: resolved
</code></pre>

### Git Merge Fast-Forward

La situación más habitual es que tanto la rama main como la feature hayan avanzado, produciéndose un diagrama similar al superior, pero puede ser que la rama *master* no lo haya hecho, de tal forma que Git puede ejecutar un *merge* por el método llamado `fast-forward`, que sería tal que así:

<center><img src="https://iagovar.com/assets/git/git-merge-fast-forward.svg" alt="Diagrama de git merge fast-forward">
</center>

Como se puede entender la rama *feature* simplemente como un desarrollo lineal con respecto a *master*, git estima que lo más conveniente y limpio para el historial es simplemente agarrar los *commits* de *feature* y ponerlos a continuación de los de *master*. 

No hay nada que resolver, asi que se puede hacer así sin problema.

### Squash + merge

El squash es una técnica de Git que se utiliza para fusionar varios commits en un solo commit. La idea de hacer un squash es simplificar la historia de una rama eliminando commits redundantes o que no aporten información relevante. Al hacer un squash, se fusionan los cambios de varios commits en un único commit, manteniendo solo la información relevante.

Este es el aspecto que tendría el grafo después de un merge + squash:

<center><img src="https://iagovar.com/assets/git/merge-squash.svg" alt="Diagrama de git merge squash">
</center>

Resumiendo, debes seguir estos pasos:

1. Asegúrate de que estás en la rama en la que quieres aplicar los cambios. Por ejemplo, si quieres fusionar la rama feature en la rama master, debes ejecutar el comando `git checkout master` para moverte a la rama master.

2. Fusiona los cambios de la rama feature en la rama master con el comando `git merge --squash feature`. Este comando fusionará los cambios de la rama feature en la rama master, pero no creará el commit final.

3. Revisa los cambios fusionados y modifícalos si es necesario. Puedes usar el comando `git status` para ver qué archivos han cambiado y el comando `git diff` para ver los cambios en detalle.

4. Crea el commit final con el comando `git commit`. Al ejecutar este comando, se abrirá el editor de texto configurado en tu sistema y podrás escribir el mensaje del commit. Una vez que hayas escrito el mensaje y guardado el archivo, se creará el commit final y se aplicarán los cambios fusionados.

- Si quieres practicar, puedes descargar este script (para bash en Linux) que te crea un repositorio de prueba: [Link al script](https://github.com/iagovar/openbootcamp/tree/main/6%20Control%20de%20versiones/6%20ramas-branches).

### ¿Y qué pasa con los conflictos?

Cuando Git no puede fusionar dos ramas de forma automática, se produce un conflicto de fusión. Esto suele ocurrir cuando las dos ramas han modificado el mismo archivo de forma incompatible y Git no sabe cuál de las dos modificaciones deben mantenerse.

Cuando se produce un conflicto de fusión, Git no puede crear el commit final y muestra un mensaje de error similar a este:

<pre>
<code>
<span class="blue">error:</span> El commit final de la fusión falló (para más detalles, ejecuta "<span class="pink">git merge --abort</span>").
<span class="blue">error:</span> Se encontraron conflictos en el archivo '<span class="green">&lt;archivo&gt;</span>'.
<span class="blue">error:</span> Por favor, soluciona los conflictos y luego haz un commit manual.
</code>
</pre>

[Azure](https://learn.microsoft.com/en-us/azure/devops/repos/git/merging?view=azure-devops&tabs=git-command-line) tiene un buen resumen de qué hacer para resolver conflictos en un Merge, pero básicamente los pasos serían los siguientes.

1. Asegúrate de que estás en la rama en la que se ha producido el conflicto. Por ejemplo, si has intentado fusionar la rama feature en la rama master y se ha producido un conflicto, debes ejecutar el comando git checkout master para moverte a la rama master.

2. Identifica los archivos en conflicto con el comando git status. Git mostrará una lista de archivos que tienen conflictos y te indicará que debes solucionarlos antes de poder hacer el commit final.

3. Abre los archivos en conflicto y resuelve las diferencias manualmente. Git añadirá líneas especiales al archivo para indicar el inicio y el fin de los conflictos y para mostrar las modificaciones de cada rama. Por ejemplo, puedes ver algo como esto (ejemplo sacado de Azure):

	<pre>
	<code>
	&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
	Esta es la línea de código de la rama master.
	=======
	Esta es la línea de código de la rama feature.
	&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature
	</code>
	</pre>

4. Elimina las líneas especiales y deja solo la versión correcta del archivo. Una vez que hayas resuelto el conflicto, debes añadir el archivo al área de preparación con el comando git add <archivo>.

5. Crea el commit final con el comando git commit. Al ejecutar este comando, se abrirá el editor de texto configurado en tu sistema y podrás escribir el mensaje del commit. Una vez que hayas escrito el mensaje y guardado el archivo, se creará el commit final y se aplicarán los cambios fusionados.

## Git rebase

Git rebase es una operación que modifica el commit de origen de otro commit (su padre, base, o como prefieras llamarlo). Se usa, o bien para modificar el origen de una rama como la *feature* que hemos estado usando, o bien para integrar los cambios de una rama en master, y hacer que aparezcan linealmente.

El comando que se usa, `git rebase rama` (o `git rebase -i rama` para el modo interactivo) se podría entender mejor como `git rebase ON rama`.

Con ejemplos lo entenderás mejor.

#### Actualizando nuestra rama master local

Alguien ha actualizado la rama master en nuestro repo remoto, y obtenemos los cambios con `git pull`. 

<center><img src="https://iagovar.com/assets/git/rebase_step_1.svg" alt="actualizando nuestra rama master local"></center>

#### Modificando el origen de nuestra rama feature

Sin embargo, ahora nuestra rama *feature* está trabajando sobre un código en origen desactualizado. Es posible que los cambios que se hayan aplicado en la rama *master* tengamos que aplicarlos en nuestra *feature* para que, más adelante, nuestro código pueda ser integrado, y evitar conflictos.

O quizá simplemente haya nuevas funcionalidades que otra persona haya implementado, y nos puedan ser útiles, quién sabe.

Asi que queremos incorporar esos cambios en nuestra rama *feature*, sobre la que estamos trabajando.

<center><img src="https://iagovar.com/assets/git/rebase_step_2.svg" alt="Modificando el origen de nuestra rama feature con rebase"></center>

#### Integrando nuestra rama feature de forma lineal en master

**OJO: Modificación del historial**: Se recomienda el uso de Merge en su lugar.

Ahora nuestra rama *feature* ya tiene como commit padre el último commit de *master*. Puede que queramos seguir con el desarrollo, pero pongamos que la vida nos sonríe y no necesitamos desarrollar nada más en nuestra *feature*, y que además no existen sorpresas.

Nos queda simplemente integrar *feature* en *master*. Aunque mucha gente no recomienda hacer esto, usaremos también rebase para ello.

<center><img src="https://iagovar.com/assets/git/rebase_step_3.svg" alt="Integrando feature en master"></center>

Ahora podemos ejecutar un `git push` y dejar nuestra rama *master* en el repo remoto igual. Si estás trabajando con alguien más, pregunta, porque la puedes liar.

## Herramientas para aprender Git visualmente

- [Git Reference Manual](https://git-scm.com/docs) | [Git Tutorial](https://git-scm.com/docs/gittutorial)
- [Different Merge Types in Git](https://lukemerrett.com/different-merge-types-in-git/)
- [Learn Git Branching](https://learngitbranching.js.org/)
- [Git Immersion](https://gitimmersion.com/)
- [OhMyGit!](https://ohmygit.org/)
- [Simple Git workflow for continuous delivery](https://gist.github.com/leesmith/8441773)

## Más referencias

- [Vídeo explicando Git de forma sencilla](https://youtu.be/1ffBJ4sVUb4)
- [Atlassian sobre Git Rebase](https://www.atlassian.com/es/git/tutorials/rewriting-history/git-rebase)