---
template: post

title: Qué es .gitignore y cómo utilizarlo

description: Una breve introducción a la sintaxis de .gitignore

comments: true

date: 2023-01-11

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

`.gitignore` es un archivo en el directorio raíz de un repositorio de Git que contiene una lista de patrones de nombre de archivo que Git debe ignorar. Estos patrones indican a Git qué archivos o directorios no deberían ser monitoreados ni comiteados.

Existen varias razones para utilizar un archivo `.gitignore`, algunas de las más comunes son:

- Evitar el *commit* de archivos temporales o de configuración personal que no son necesarios para el proyecto.
- Evitar el *commit* de binarios grandes o de archivos que no se desean compartir.
- Evitar el *commit* de archivos que contienen información confidencial.

En general, `.gitignore` es una herramienta útil para evitar el control de archivos que no son relevantes para el proyecto o que podrían causar problemas al ser compartidos con otros miembros del equipo. Puedes especificar un patrón de nombre de archivo, un nombre de directorio, o usar caracteres comodines para indicar varios archivos a ignorar.

Git ignore es uno de los primeros ficheros que se han de crear después de inicializar un nuevo repo.

Es importante acordarse de que para que el `.gitignore` sea tenido en cuenta, es necesario comitearlo después de crearlo o cambiarlo.

## Algunos ejemplos útiles de sintaxis para .gitignore

|         Sintaxis        |                                                               Caso de uso                                                               |
|:------------------------|:----------------------------------------------------------------------------------------------------------------------------------------|
| # comentario            | Los comentarios en .gitignore funcionan como en bash, con un # delante                                                                  |
| *.log                   | Ignorar todos los archivos con extensión .log                                                                                           |
| temp/*                  | Ignorar todos los archivos en el directorio temp/                                                                                       |
| *.log<br>!important.log | Ignorar todos los archivos con extensión .log excepto important.log                                                                     |
| doc/*.pdf               | Ignorar todos los archivos con extensión .pdf en el directorio doc/                                                                     |
| *.[oa]                  | Ignorar todos los archivos con extensión .o o .a                                                                                        |
| *.txt[cod]              | Ignorar todos los archivos con extensión .txt que tienen una "c", "o", "d" después del punto, ej: "file.txtc", "file.txto", "file.txtd" |
| ./vendor                | Ignora el directorio vendor que está en el mismo nivel que el archivo .gitignore                                                        |
| /vendor                 | Ignorar todo el directorio vendor que se encuentre en cualquier nivel de profundidad en el repositorio                                  |                              |


## Más información

- [A collection of useful .gitignore templates](https://github.com/github/gitignore)