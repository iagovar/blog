---
template: post

title: Javascript: Generadores con yield

description: Yield ayuda a generar funciones que se pueden pausar y reanudar constantemente.

comments: true

date: 2022-10-16

---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/default.min.css">
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/highlight.min.js"></script>
<script>hljs.highlightAll();</script>


<style>
  th, tr {border-bottom: 1px solid darkgrey;}
  td {padding: 0.5em;}
  table {font-size: 0.8em;}
</style>

Las funciones generadoras nos permiten pausar y reanudar una función cada vez que ejecuten `yield` y sean llamadas.

Como ejemplo, supongamos que queremos replicar la función de auto-incrementar una clave en SQL con JavaScript. Podemos hacer algo así.

<pre>
<code class="language-javascript">
function* generarId() {
// Genera un identificador consecutivo, como un autoincrement en SQLite
// Ojo al "*" en la notación después de "function"

  let identificador = 0;

  // Sin un bucle la ejecución en la segunda llamada se dentrá al final
  // de la función
  while (true) {
    identificador++;

    // Devuelve y detiene la ejecución hasta próxima llamada
    yield identificador;  

    // Condición para finalizar el bucle y la función
    if (identificador >= 10) { return }
  }
}

let variable = generarId();

console.log(variable.next())
console.log(variable.next().value)
console.log(variable.next().value)
console.log(variable.next().done)
console.log(variable.next().done)
console.log(variable.next())
console.log(variable.next())
console.log(variable.next())
console.log(variable.next())
console.log(variable.next())
console.log(variable.next())
console.log(variable.next())


/* Esto es lo que muestra la consola:

Object { done:false,value:1 }
2
3
false
false
Object { done:false,value:6 }
Object { done:false,value:7 }
Object { done:false,value:8 }
Object { done:false,value:9 }
Object { done:false,value:10 }
Object { done:true,value:undefined }
Object { done:true,value:undefined }

*/
</code>
<a href="https://jsitor.com/fKxkl3vSs">Juega con el código</a>
</pre>


Básicamente esta función contiene un bucle infinito, cada vez que se ejecuta `yield` devuelve un valor, y cada vez que se llama a la función, se reanuda desde la siguiente línea al yield, en este caso busca una condición, si se cumple finaliza la función (y lo muestra con `done: true` al ser llamada de nuevo), y si no se cumple, sigue con el bucle.
