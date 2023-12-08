---
template: post

title: Aplicando commits específicos con Git Cherry Pick

description: En ocasiones no necesitas fusionar una rama con otra, sino el commit particular de una rama, en otra rama. Cherry Pick te ayuda con esto.

comments: true

date: 2023-01-05

---

<style>
	article td {text-align: left !important;}
</style>

El comando *git cherry pick* nos permite aplicar un número determinado de commits de una rama a otra, sin tener que fusionar toda la rama.

Esto se entiende mejor con un caso de uso:

1. Se crea una rama llamada *fix* a partir de *master*, con el objetivo de corregir un error en el código.
2. Se realizan varios commits en la rama *fix*, cada uno de ellos solucionando un error diferente.
3. Se decide que sólo se quiere aplicar el commit que soluciona el error A sobre *master*, pero no los demás.
4. Se hace checkout a *master* y se usa el comando `git cherry-pick` seguido del ID del commit que contiene la solución para el error A.
5. El commit se aplica sobre *master* y se actualiza el código de la rama principal con la solución para el error A.

## Diagrama

<center>
<img src="https://iagovar.com/assets/git/cherry-pick.svg" alt="diagrama git cherry-pick">
</center>

## Otras formas de utilizarlo

|               Sintaxis              |                                                    Descripción                                                   |   |
|:------------------------------------|:-----------------------------------------------------------------------------------------------------------------|---|
| `git cherry-pick <commit> `           | Aplica el commit especificado en la rama actual                                                                  |   |
| `git cherry-pick <commit1> <commit2>` | Aplica el commit especificado en la rama actual y el siguiente commit                                            |   |
| `git cherry-pick <hash1>..<hash2> `   | Aplica todos los commits entre los dos hashes especificados (inclusive) en la rama actual                        |   |
| `git cherry-pick -x <commit> `        | Aplica el commit especificado en la rama actual y añade una línea al commit message indicando el commit original |   |
