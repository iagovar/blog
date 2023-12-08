---
template: post

title: Guarda cambios temporalmente con Git Stash sin comitear

description: En ocasiones necesitas cambiar de rama, pero no puees comitear los cambios de tu rama actual. Git Stash te ayuda con eso.

comments: true

date: 2023-01-04

---

<style type="text/css">
	article td {
		text-align: left !important;
	}
</style>

Git stash es una herramienta que permite guardar temporalmente los cambios que no has comiteado en tu repositorio local. Esto puede ser útil cuando quieres cambiar a otra rama para trabajar en ella, pero no quieres comitar los cambios que tienes pendientes en tu rama actual.

Al usar git stash, tus cambios pendientes son guardados en una pila temporal, y puedes hacer checkout a otra rama sin perder tus cambios.

Luego vuelves a la rama donde los guardaste, y puedes recuperarlos.

# Caso de uso de git stash

- Estás trabajando en la rama *feature* y no has comiteado los cambios.
- Quieres cambiar a la rama *master* para hacer algunos cambios rápidos, pero si haces un `git checkout` a *master*, perderás los cambios que no has comiteado en feature.
- Para evitar esto, puedes usar `git stash` para guardar temporalmente los cambios.
- Haz `checkout` a *master* y haz los cambios necesarios.
- Una vez hayas terminado, vuelve a la rama *feature* y usa `git stash apply` para recuperar los cambios guardados anteriormente.

## Referencia de comandos de git stash

Una pequeña muestra de los comandos que te pueden ser útiles.

|          Comando          |                             Acción                            |                          Referencia                          |
|:--------------------------|:--------------------------------------------------------------|:-------------------------------------------------------------|
| `git stash `                | Guarda los cambios no comiteados en un lugar temporal         |                                                              |
| `git stash save "mensaje"`  | Guarda los cambios no comiteados con un mensaje de referencia |                                                              |
| `git stash apply`           | Aplica los cambios guardados más recientemente                |                                                              |
| `git stash apply stash@{n}` | Aplica los cambios guardados en la posición n                 | stash@{0} es el más reciente, stash@{1} es el anterior, etc. |
| `git stash pop`             | Aplica y elimina los cambios guardados más recientemente      |                                                              |
| `git stash drop`            | Elimina los cambios guardados más recientemente               |                                                              |
| `git stash list`            | Muestra una lista de los cambios guardados                    |                                                              |
| `git stash clear`           | Elimina todos los cambios guardados                           |                                                              |