---
template: post

title: Tres tipos de comentarios en java: Inline, multiline y JavaDoc

description: En Java, además de los comentarios de una línea y multilinea, existen los JavaDocs.

comments: true

date: 2023-01-26

---

<style type="text/css">
	article td {
		text-align: left !important;
	}
	pre {
		background-color: black;
		color: white;
	}
	video {
		max-width: 450px;
	}
</style>


## Comentarios de inline

<pre>
<code>
// Este es un comentario de línea simple
int x = 5;  // Este es otro comentario de línea simple
</code>
</pre>

## Comentarios multilinea

<pre>
<code>
/* Este es un comentario de bloque
   que abarca varias líneas */
int y = 10;
</code>
</pre>


## Comentarios JavaDoc

Notar que:

1. Empiezan por <b>/\*\*</b> y terminan por <b>\*/</b>. 

2. Es necesario que estén inmediatamente encima del elemento que queremos documentar.

3. Se suelen usar para documentar métodos y clases.

<pre>
<code>
/**
* Este método suma dos números enteros
* @param a El primer número a sumar
* @param b El segundo número a sumar
* @return La suma de a y b
*/
public int sumar(int a, int b) {
    return a + b;
}
</code>
</pre>

Aunque JavaDoc es una herramienta para terminal, que viene con OpenJDK tu IDE te proporcionará sugerencias al escribir un **@** dentro de dicha documentación.

Algunas de las etiquetas específicas que te puede sugerir son:

- @param: para documentar los parámetros de un método.
- @return: para documentar el valor de retorno de un método.
- @throws: para documentar las excepciones que pueden ser lanzadas por un método.
- @author: para documentar el autor del código.
- @version: para documentar la versión del código.


Así se vería al ejecutarlo en tu IDE:

<center>
 <video controls autoplay>
  <source src="https://i.imgur.com/Dr2hsWF.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 
</center>


## Más info

- [Intellij sobre los JavaDoc](https://www.jetbrains.com/help/idea/working-with-code-documentation.html)