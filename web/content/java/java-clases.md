---
template: post

title: Chuleta de Clases en Java

description: Herencia, el método súper, sobreescritura, polimorfismo, clases abstractas, interfaces

comments: true

date: 2023-02-01

---

<style type="text/css">
	.container {
		width: 100%;
	}
	table {
		font-size: 70% !important;
	}
	article td {
		text-align: left !important;
		padding: 0.3em;
	}
	table pre {
		padding: 2px 4px;
		margin: 0.3em;
		color: #c7254e;
		background-color: #f9f2f4;
		border: none;
	}
  /*
  pre {
    color: #c7254e;
    background-color: #f9f2f4;
    border: 1px solid lightslategrey;
  }
  */
	video {
		max-width: 450px;
	}
</style>

<div id="toc" style="margin-bottom: 2em;"></div>

<table>
<thead>
  <tr>
    <th>Concepto</th>
    <th>Descripción</th>
    <th>Snippet</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Herencia</td>
    <td>Es la capacidad de una clase hija para heredar atributos y métodos de una clase padre.</td>
    <td><pre><code class="nohighlight">class Animal {...} class Perro extends Animal {...}</code></pre></td>
  </tr>
  <tr>
    <td>Método super</td>
    <td>Referencia al método de la clase padre. Se usa para llamar al constructor o método de la clase padre.</td>
    <td><pre><code class="nohighlight">class Animal {...} class Perro extends Animal {public Perro() { super(); ...}}</code></pre></td>
  </tr>
  <tr>
    <td>Sobreescritura</td>
    <td>Es la capacidad de una clase hija para redefinar el comportamiento de un método heredado de la clase padre.</td>
    <td><pre><code class="nohighlight">class Animal { public void hablar() {...} } class Perro extends Animal {public void hablar() {...} }</code></pre></td>
  </tr>
  <tr>
    <td>Polimorfismo</td>
    <td>Es la capacidad de un objeto para tomar diferentes formas. Se logra mediante la sobreescritura de métodos en clases hijas.</td>
    <td><pre><code class="nohighlight">Animal animal = new Perro(); animal.hablar();</code></pre></td>
  </tr>
  <tr>
    <td>Clases abstractas</td>
    <td>Son clases que no pueden ser instanciadas, pero sirven como base para otras clases. Contienen métodos abstractos que deben ser implementados por las clases hijas.</td>
    <td><pre><code class="nohighlight">abstract class Animal { public abstract void hablar(); } class Perro extends Animal {public void hablar() {...} }</code></pre></td>
  </tr>
  <tr>
    <td>Interfaces</td>
    <td>Son un conjunto de métodos y constantes que deben ser implementados por una clase. Permiten una forma de definir un comportamiento que deben tener ciertas clases.</td>
    <td><pre><code class="nohighlight">interface Hablador { public void hablar(); } class Perro implements Hablador {public void hablar() {...} }</code></pre></td>
  </tr>
</tbody>
</table>

## Herencia

Es una relación entre dos clases, donde una clase se deriva de otra clase existente. La clase que se deriva se llama la clase hija y la clase de la cual se deriva se llama la clase padre. La clase hija hereda todos los atributos y métodos de la clase padre.

<pre>
<code class="language-java">
class Animal {
  public void makeSound() {
    System.out.println("El animal hace un sonido");
  }
}

class Perro extends Animal {
  @Override
  public void makeSound() {
    System.out.println("El perro ladra");
  }
}
</code>
</pre>

  ### El método súper

  Es una palabra clave que se utiliza para hacer referencia a la clase padre. Se utiliza para llamar al método de la clase padre desde la clase hija.

  <pre>
  <code class="language-java">  
  class Animal {
    public void makeSound() {
      System.out.println("El animal hace un sonido");
    }
  }

  class Perro extends Animal {
    @Override
    public void makeSound() {
      super.makeSound();
      System.out.println("El perro ladra");
    }
  }
  </code>
  </pre>

## Sobreescritura

Es una técnica en la que una clase hija proporciona una nueva implementación para un método que ya existe en la clase padre.

La anotación `@Override` se utiliza para indicar que se está sobreescribiendo un método, y de esta forma si el compilador detecta que no hay un método con el mismo nombre en la clase padre, nos avisará, en lugar de interpretarlo como un método nuevo.

Hay quien dice que también ayuda a una mayor legibilidad del código, pero es cuestión de gustos.

<pre>
<code class="language-java">
class Animal {
  public void makeSound() {
    System.out.println("El animal hace un sonido");
  }
}

class Perro extends Animal {
  @Override
  public void makeSound() {
    System.out.println("El perro ladra");
  }
}

</pre>
</code>

## Polimorfismo

Es una característica de la programación orientada a objetos que permite que un objeto de una clase derivada tenga un comportamiento diferente a su clase base.

En Java, el polimorfismo se logra mediante la sobreescritura de métodos en clases hijas y la implementación de interfaces.

<pre>
<code class="language-java">
class Animal {
  void emitirSonido() {
    System.out.println("Sonido genérico de animal");
  }
}

class Perro extends Animal {
  void emitirSonido() {
    System.out.println("Guau");
  }
}

class Gato extends Animal {
  void emitirSonido() {
    System.out.println("Miau");
  }
}

public class Main {
  public static void main(String[] args) {
    Animal perro = new Perro();
    Animal gato = new Gato();
    perro.emitirSonido(); // imprime "Guau"
    gato.emitirSonido(); // imprime "Miau"
  }
}

</pre>
</code>

## Clases abstractas

Las clases abstractas en Java son clases que no pueden ser instanciadas directamente.

Se utilizan como una base común para otras clases y deben ser extendidas para poder ser instanciadas.
Las clases abstractas pueden tener métodos abstractos, que no tienen una implementación y deben ser sobreescritos por clases hijas.

<pre>
<code class="language-java">
abstract class Animal {
  abstract void emitirSonido();
}

class Perro extends Animal {
  void emitirSonido() {
    System.out.println("Guau");
  }
}

class Gato extends Animal {
  void emitirSonido() {
    System.out.println("Miau");
  }
}

public class Main {
  public static void main(String[] args) {
    Animal perro = new Perro();
    Animal gato = new Gato();
    perro.emitirSonido(); // imprime "Guau"
    gato.emitirSonido(); // imprime "Miau"
  }
}
</pre>
</code>

Este ejemplo puede parecer el mismo que el de polimorfismo, pero fíjate bien en la clase `Animal`. El método `emitirSonido()` está vacío en la clase abstracta, e insisto, dicha clase no se puede instanciar, sólo las hijas que la extienden.

## Interfaces

Las interfaces en Java son un tipo de clase que solo contiene métodos abstractos y variables constantes.

Las clases que implementan una interfaz deben proporcionar una implementación para todos sus métodos.

Las interfaces permiten definir un comportamiento que debe ser implementado por múltiples clases, sin importar su jerarquía de herencia.

<pre>
<code class="language-java">
interface Animales {
   public void comunicarse();
   public void dormir();
}

class Perro implements Animales {
   public void comunicarse() {
      System.out.println("El perro ladra");
   }

   public void dormir() {
      System.out.println("El perro duerme");
   }
}

class Gato implements Animales {
   public void comunicarse() {
      System.out.println("El gato maulla");
   }

   public void dormir() {
      System.out.println("El gato duerme");
   }
}

</pre>
</code>

### ¿Qué casos de uso tienen las interfaces?

Cuando uno quiere que diferentes clases implementen una serie de métodos, pero estas clases no tienen una relación jerárquica entre ellos, puede ser un dolor de cabeza.

Para esto se inventaron las interfaces, que permiten establecer una estructura de métodos común independientemente de qué posición jerárquica ocupe la clase que implemente, facilitando así las cosas sin tener que comerse el tarro con las herencias.

### Clases abstractas VS Interfaces

La interfaz se utiliza cuando sólo se desea declarar qué métodos y miembros DEBE tener una clase. Cualquiera que implemente la interfaz tendrá que declarar e implementar los métodos enumerados por la interfaz.

Si además quieres tener una implementación por defecto, utiliza la clase abstracta. Cualquier clase que extienda la clase abstracta tendrá que implementar sólo sus métodos y miembros abstractos, y tendrá alguna implementación por defecto de los otros métodos de la clase abstracta, que puedes anular o no.

Por último, puedes implementar tantas interfaces como quieras, pero sólo extender una clase (sea abstracta o no). Tenlo en cuenta antes de elegir.

Traducido de [aquí](https://stackoverflow.com/questions/1221512/when-to-use-abstract-class-or-interface).

**Clase abstracta:**
  - Permite crear métodos abstractos (sin implementación) y métodos con implementación.
  - Puede tener propiedades y métodos privados.
  - Se puede heredar de una sola clase abstracta, pero se pueden implementar múltiples interfaces.
  - La clase abstracta puede proporcionar una implementación por defecto de algunos métodos.

**Interfaz:**
  - Sólo permite definir métodos abstractos.
  - No permite definir propiedades ni métodos privados.
  - Se puede implementar múltiples interfaces en una sola clase.
  - Una interfaz define un contrato que debe ser implementado por la clase que la implementa.


## El constructor de una clase

Este tema he preferido tratarlo en el apartado de [anatomía de una función](https://iagovar.com/java/java-anatomia-metodo-funcion)

## Más info

- [Abstract class vs Interface differences](https://www.geeksforgeeks.org/difference-between-abstract-class-and-interface-in-java/)

<!-- hlsj -->

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/styles/default.min.css">
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/highlight.min.js"></script>
<!-- and it's easy to individually load additional languages -->
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/languages/java.min.js"></script>
<script>hljs.highlightAll();</script>