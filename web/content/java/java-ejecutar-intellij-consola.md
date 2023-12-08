---
template: post

title: ¿Por qué no puedo ejecutar mi código en la consola, y sí en Intellij Idea?

description: Intellij usa el parámetro -classpath para indicar dónde se encuentran los módulos

comments: true

date: 2023-02-01

---

Si vienes de otros lenguajes, puede que la forma de operar los módulos y la ejecución de Java pueda llegar a parecerte confusa.

Supongamos el siguiente código: [Enlace](https://github.com/iagovar/openbootcamp/tree/main/7%20Java%20Basico/Ejercicios/Ejercicio%204/Proyecto%20para%20Ejercicio%204) (copialo con `git clone`)

Si abres este proyecto desde Intellij, podrás observar que es un script sencillo que se ejecuta sin problemas desde intellij.

Sin embargo, si intentas un `javac Main.java && java Main.java` (Recuerda que en Java primero hay que compilar a bytecode) en el directorio donde se encuentra el archivo (`./Proyecto para Ejercicio 4/src/main/java/com/midominio/`), obtendrás el siguiente error:

`Main.java:5: error: package main.java.com.midominio.SmartStuff does not exist`

Esto sucede porque java no está usando el directorio `src` como root de los paquetes. En Java `java.util.algo` implica `/java/util/algo` de modo que hay que indicarle de algún modo cuál es la ruta de partida desde la que buscar los paquetes.

Intellij usa el parámetro `-classpath` para realizar la ejecución, pero si quieres hacerlo algo más manual y entendible para humanos, haz lo siguiente:

1. Abrimos un terminal y navegamos hasta la carpeta raíz del proyecto (Proyecto para Ejercicio 4).

2. Compilamos los archivos a bytecode. Aquí podemos hacer una cosa, o usar el sistema de build de Intellij (que te colocará todo en `./out/`), o intentar usar `javac`. Como este proyecto es simple, podemos hacer:

 `javac -d ./produccion/ ./src/main/java/com/midominio/*.java ./src/main/java/com/midominio/SmartStuff/*.java`

  El problema de Javac es que no encuentro forma de indicarle que compile todos los archivos java a partir de un directorio y sus subniveles, hay que incluír todos los directorios en una línea de la línea de comandos, haciéndolo inviable para cualquier proyecto con un mínimo de complejidad.

  Para esto, aparentemente, se usan herramientas de building [como Maven o Gradle](https://www.reddit.com/r/learnprogramming/comments/12zjwnb/compiling_a_java_project_with_multiple_submodules/).


3. Si hemos usado Javac, deberíamos tener todos los archivos `.class` dentro de `./produccion/` de modo que ya podemos ejecutarlos.

  Fijémonos en las siguientes líneas del archivo `Main.java`:

  <pre>
  <code class="language-java">
  package main.java.com.midominio;
  import main.java.com.midominio.SmartStuff.*;
  </code>
  </pre>

  Si recordamos que los puntos representan directorios en nuestro sistema de archivos, tenemos que ejecutar nuestro programa desde el directorio donde el primer nivel sea `main`. En este caso, con los comandos que hemos introducido antes, este sería el directorio `/produccion/`, de modo que tenemos que ejecutar, desde ese nivel, el comando:

  `java main.java.com.midominio.Main`

  (con tabulador te irán saliento las sugerencias en consola)

  De esta forma le indicamos a la máquina virtual que empiece a buscar desde nuestro directorio actual, y el siguiente nivel, `main`, coincide con lo declarado dentro del código.

Listo! Ya debería funcionar.


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>