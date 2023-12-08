---
template: post

title: Comparación de cadenas de texto en java, == VS .equals()

description: Comparar cadenas de texto en Java puede hacerse mediante referencias en memoria y atendiendo al contenido

comments: true

date: 2023-02-01

---

<style type="text/css">
	article td {
		text-align: left !important;
	}
	video {
		max-width: 450px;
	}
</style>

<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/styles/default.min.css">
<script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/highlight.min.js"></script>
<script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/languages/java.min.js"></script>
<script>hljs.highlightAll();</script>

En Java podemos encontrarnos con la situación que `==` nos muestre `FALSE` al comparar dos cadenas de texto.

Vamos el siguiente snippet:

<pre>
<code class="language-java">
public class Main {
    public static void main(String[] args)
    {
        String s1 = "HELLO";
        String s2 = "HELLO";
        String s3 = new String("HELLO");
        String s4 = "HELLO 2";

        System.out.println(s1 == s2); // true
        System.out.println(s1 == s3); // false
        System.out.println(s1 == s4); // false
        System.out.println(s1.equals(s2)); // true
        System.out.println(s1.equals(s3)); // true
    }
}
</code>
</pre>

## ¿Cómo pueden tener dos cadenas de texto la misma referencia en memoria?

En Java, la JVM tiene almacena todas las cadenas idénticas en una estructura de datos llamada *string pool*, siempre y cuando no se use el operador `new`, que obiga a la JVM a asignar una nueva dirección de memoria.

## Evitando las comparaciones de memoria con .equals()

La ventaja de `.equals()` con respecto a `==` es que comparará el contenido de la cadena de texto, en lugar de su referencia en memoria.


## Más info

- [Comparing strings in Java](https://www.geeksforgeeks.org/java-equals-compareto-equalsignorecase-and-compare/)

