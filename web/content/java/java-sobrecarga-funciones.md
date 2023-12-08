---
template: post

title: Más de una función o método con el mismo nombre en Java

description: La sobrecarga de métodos o funciones permite tener más de una función con el mismo nombre

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

En Java, es posible tener dos funciones con el mismo nombre en una clase siempre y cuando los parámetros de entrada de cada una de ellas sean diferentes. Esto se conoce como sobrecarga de métodos.

Por ejemplo, podrías tener dos métodos con el mismo nombre "sumar" uno que recibe dos números enteros y devuelve la suma y otro que recibe dos números flotantes y también devuelve la suma.

<pre>
<code>
public int sumar(int a, int b) {
  return a + b;
}
public float sumar(float a, float b) {
  return a + b;
}
</code>
</pre>

En Python y Javascript no existe soporte nativo para sobrecarga de métodos. Puedes escribir varias funciones con el mismo nombre, pero el intérprete simplemente usará la última función definida.

En Java el compilador tiene la capacidad de saber a qué función apuntar, dependiendo del tipo de argumentos que estés intentando pasar.

Esto es posible porque en Java realmente estas funciones no están ocupado el mismo espacio de memoria.



## Más info

- [Do all dynamically typed languages not support function overloading?](https://softwareengineering.stackexchange.com/questions/425422/do-all-dynamically-typed-languages-not-support-function-overloading)