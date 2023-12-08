---
template: post

title: Anatomía de un método o función en Java

description: Ilustración mostrando los elementos de una función o método en Java

comments: true

date: 2023-01-26

---

<style type="text/css">
	table td {
		text-align: left !important;
	}
	.oculta {display: none;}

	#toc {
		margin-bottom: 2em;
	}
</style>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/styles/default.min.css">
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<div id="toc"></div>

<h2 class="oculta">Anatomía de una función en Java</h2>
<img src="https://iagovar.com/assets/java/anatomia-funcion-java-1.svg" alt="elmentos de una función en Java">

- **Modificadores de acceso**: Las palabras clave `public`, `private` y `protected` indican desde dónde se puede acceder a la clase o método.

	Se puede omitir, y java asumirá que estamos ante un elemento público, pero es una buena práctica ponerla.

	| Modificador | Descripción |
	|:---:|:---:|
	| `public` | El método es accesible desde cualquier parte del programa. |
	| `private` | El método es accesible solo desde dentro de la clase donde se declara. |
	| `protected` | El método es accesible desde la clase donde se declara y desde las clases hijas. |
	| (ninguno) | Si no se especifica ningún modificador, se asume que el método es accesible solo desde la clase donde se declara y sus subclases en el mismo paquete. |

- **Modificador de alcance o clase**: La palabra clave `static` nos permite determinar si el método se puede invocar sin instanciar una clase primero.

	Se puede omitir, no pasará nada. Java asumirá entonces que es un método no-estático, naturalmente.

	Un método estático puede invocarse tanto si instanciamos o no una clase, mientras que un método no-estático sólo puede invocarse después de instanciar una clase.

- **Tipo de retorno**: En Java los métodos o funciones requieren indicar el tipo de dato que va a retornar la función. Esto NO se puede obviar, y es necesario indicarlo siempre.

	Si el tipo indicado como retorno no coincide con el tipo que devuelve la función en 'return' el compilador nos mostrará un error.

	En el caso que nos ocupa 'void' es una palabra reservada que indica que la función no va a devolver nada.

- **Tipado de argumentos o parámetros**: De la misma forma, Java requiere que indiquemos qué tipo de datos estamos introduciendo como argumentos.

	| Modificador de tipo de retorno | Descripción |
	|:---:|:---:|
	| void | Indica que el método no retorna ningún valor |
	| Tipo de dato | Indica el tipo de valor que el método retorna, por ejemplo int, boolean, etc. |

## Modificadores para las variables

En Java las variables siempre se declaran dentro de una clase, y por tanto pueden contener modificadores similares a los de las funciones.

| Modificador | Descripción |
|:---:|:---:|
| `public` | La variable es accesible desde cualquier parte del programa. |
| `private` | La variable sólo es accesible dentro de la clase que la define. |
| `protected` | La variable es accesible dentro de la clase que la define y en las clases hijas. |
| (sin modificador) | La variable es accesible dentro del paquete en el que se encuentra la clase que la define. |
| `final` | Convierte la variable en constante, no pudiendo asignarsele otro valor. |


Igual que los métodos o funciones, las variables también pueden ser estáticas con la palabra clave `static`. Al declararlas de tal modo, indicamos que se puede acceder a la variable sin necesidad de instanciar una clase.

## El constructor de clase

<pre>
<code class="language-java">
public class Persona {
  private String nombre;
  private int edad;

  public Persona(String nombre, int edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Otros métodos de la clase Persona
}

</code>
</pre>

- El constructor tiene el mismo nombre que la clase a la que pertenece.
- No tiene tipo de retorno explícito, ni siquiera void. No pueden devolver un valor porque, por decirlo de alguna manera, tienen que devolver el objeto.
- Que tenga parámetros es opcional.
- Si no se define ningún constructor en una clase, Java proporciona un constructor predeterminado sin parámetros.

## Más info

- Programiz sobre constructores en Java: [web](https://www.programiz.com/java-programming/constructors)
- Ejercicio Nº 4 del curso de Java Básico de OpenBootcamp: [GitHub](https://github.com/iagovar/openbootcamp/tree/main/7%20Java%20Basico/Ejercicios/Ejercicio%204/Proyecto%20para%20Ejercicio%204)