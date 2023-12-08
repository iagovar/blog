---
template: post

title: Javascript: Funciones asíncronas: Callbacks, Promesas, async/await

description: El abuso de las funciones anónimas en JS puede complicar su aprendizaje

comments: true

date: 2022-10-11

---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/default.min.css">
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/highlight.min.js"></script>
<script>hljs.highlightAll();</script>


<style>
  th, tr {border-bottom: 1px solid darkgrey;}
  td {padding: 0.5em;}
  table {font-size: 0.8em;}
</style>

Cuando empieces con las funciones asíncronas, es habitual que te las enseñen por el orden del título, es decir, primero los Callbacks, luego las promesas y luego async/await.

Este orden no responde a otra cosa que el orden de introducción de estas características en JavaScript. En mi opinión, el abuso de funciones anónimas (especialmente funciones flecha) puede llegar a complicar la lectura de los códigos de ejemplo.

Veamos si podemos simplificarlo.

## ¿Qué sentido tiene la asincronía?

Como sabrás, los intérpretes de lenguajes como Python o JavaScript *leen* los archivos de arriba a abajo. Ejecutarán la primera llamada que encuentren con ámbito (*scope*) de más bajo nivel, y llenarán la memoria de todos los objetos necesarios para llevar a cabo dicha ejecución.

Sin embargo, muchas de las tareas que involucran código requieren obtener o grabar datos en una base de datos, o interactuar con una API, o quizá algún archivo en una red. Todas estas tareas se pueden demorar por muchos factores, y muy probablemente no quieras detener la ejecución de tu programa hasta que se completen.

Observa el siguiente código.

<pre>
<code class="language-javascript">
function primeraFuncion() {
  console.log("Esto y en la primera funcion")
  
  
  // Vamos a hacer una petición a un servidor
  // https://lenguajejs.com/javascript/peticiones-http/xhr/
  
  const request = new XMLHttpRequest(); // Creamos una instancia
  const url = 'https://jsonplaceholder.typicode.com/todos/2';
  request.open("GET", url, false); // Abrimos una conexión, false -> Síncrono
  request.send(); // Enviamos la petición al servidor

  console.log(request.response)
  
  segundaFuncion()
}

function segundaFuncion() {
  console.log("Estoy en la segunda funcion")
}

primeraFuncion()

console.log("Hemos finalizado")

/* Produce este output en la consola:

	"Esto y en la primera funcion"
	"{
	  \"userId\": 1,
	  \"id\": 2,
	  \"title\": \"quis ut nam facilis et officia qui\",
	  \"completed\": false
	}"
	"Estoy en la segunda funcion"
	"Hemos finalizado"
*/
</code>
</pre>


¿Pero qué pasa si la respuesta del servidor tarda? Nuestro programa se detendría hasta que se obtuviese la petición. Podemos hacer, sin embargo, que el código siga corriendo y que nuestra petición se imprima en pantalla simplemente cuando se haya completado.

Para ello pasamos `true` como argumento del método `.open()` y hacemos uso del evento `.onload` como se muestra a continuación.

<pre>
<code class="language-javascript">
function primeraFuncion() {
  console.log("Esto y en la primera funcion")
  
  
  // Vamos a hacer una petición a un servidor
  // https://lenguajejs.com/javascript/peticiones-http/xhr/
  
  const request = new XMLHttpRequest(); // Creamos una instancia
  const url = 'https://jsonplaceholder.typicode.com/todos/2';
  request.open("GET", url, true); // Abrimos una conexión, true -> Síncrono
  request.send(); // Enviamos la petición al servidor
  
  request.onload = function() { console.log(request.response)} // Evento que se lanza al finalizar la carga
  
  segundaFuncion()
}

function segundaFuncion() {
  console.log("Estoy en la segunda funcion")
}

primeraFuncion()

console.log("Hemos finalizado")

/* Produce este output en la consola:

	"Esto y en la primera funcion"
	"Estoy en la segunda funcion"
	"Hemos finalizado"
	"{
	  \"userId\": 1,
	  \"id\": 2,
	  \"title\": \"quis ut nam facilis et officia qui\",
	  \"completed\": false
	}"
*/
</code>
</pre>

En la mayoría de tutoriales que vas a encontrar es posible que no veas el uso de `XMLHttpRequest()` sino de `fetch()`, que ya trae promesas integradas.

## Callbacks, asincronía antes de Promesas y Async/Await

Los *callbacks* son simplemente funciones que se pasan como argumento de otra función. El ejemplo más sencillo que se me ocurre es el siguiente.

<pre>
<code class="language-javascript">
function primeraFuncion(unaVariableDeTexto, funcionDeCallBack) {
  // El código de la función.
  // Cuando termina nuestra función, llamamos a funcionDeCallBack()
  
  funcionDeCallBack(unaVariableDeTexto)
}

function imprimirTexto(textoParaImprimir) {
  console.log(textoParaImprimir)
}

primeraFuncion("Este es un texto de ejemplo", imprimirTexto)

// Muestra en consola: "Este es un texto de ejemplo"
</code>
</pre>

Bien, ¿Qué está corriendo aquí exáctamente?

- Llamamos a `primeraFuncion()` pasándole los dos argumentos que pide. El primero es una variable de texto, y el segundo es una función *callback*.

	Nota que la función *callback* que indicamos como argumento esperado en `primeraFuncion()` está nombrada como si fuese otra variable cualquiera, no incluye paréntesis al final ni nada similar.

	En otros tutoriales vas a ver de todo, gente que escribe funciones anónimas dentro de los paréntesis de otra función, y todo tipo de cosas horribles que por alguna razón son práctica común en JavaScript. Esta es la forma más sencilla de leer, en mi opinión.

- Una vez que se *activa* la función `primeraFuncion()`, lo que hará es sustituír `funcionDeCallBack(unaVariableDeTexto)` por `imprimirTexto(unaVariableDeTexto)`.

	Busca en el *namespace* una función que se llame igual que el argumento que le has pasado, y la ejecuta con los argumentos que has escogido en el cuerpo de la función.


Como habrás observado, *callbacks* es lo que hemos usado en el ejemplo que abre este post.

## Promesas para resolver la dificultad de los callbacks

Lo que vas a leer por ahí es que el *callback hell* fué la motivación detrás de crear premisas. Una forma de evitar muchos *callbacks* anidados que hace que el código crezca horizontalmente.

Sin embargo, no me parece muy convincente. [Como explica este comentario de StackOverflow](https://stackoverflow.com/a/68633737/7598276), el mismo problema se puede producir con promesas.

El problema de JavaScript es que la gente abusa mucho de funciones anónimas, y esto es lo que produce código que cuesta mucho leer.

Si estás buscando un bloque de código, sin abuso de funciones anónimas, que te explique el funcionamiento de promesas, aquí lo tienes:

<pre>
<code class="language-javascript">
let miPromesa = new Promise(funcionDePromesa);
  
function funcionDePromesa(seResuelve, daError) {
// Función que ejecuta el código de producción
  
  const unaVariable = 0;
  
  if (unaVariable == 1) {
    seResuelve("Bien");
  } else {
    daError("Mal");
  };

};

// Código que consume la promesa
miPromesa.then(
  function(value) { /* Si se resuelve bien */ imprimir(value)},
  function(error) { /* Si falla */ imprimir(error)}
);

function imprimir(argumento) {console.log(argumento)}
</code>
</pre>

Te recomiendo probarlo en [JS Bin](https://jsbin.com/).

- Creamos un objeto promesa pasándole como argumento lo que se llama *la función ejecutora*. Es decir, la función que ejecuta el código que queremos que sea asíncrono.

- La funcíón ejecutora, en este caso `funcionDePromesa()` tiene dos argumentos, que son *callbacks* ya proporcionados por la librería principal de JavaScript. Al primero se le llamará en caso de éxito, y al segundo en caso de fracaso. Puedes nombrarles como quieras, pero has de respetar el orden de los argumentos.

- Para consumir el éxito o el fracaso de la promesa, usaremos el método `.then()` sobre el nombre de la promesa. Como verás [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), este método tiene dos argumentos, que son dos funciones, la primera obtendrá el argumento que pases en `seResuelve()` y la segunda el que pases en `daError()`.

## Async/Await: Haciendo las promesas más fáciles de manejar

Básicamente `async` permite envolver el resultado de una función en una promesa, y `await` detiene la ejecución de una función hasta que la promesa se ha resuelto.

<pre>
<code class="language-javascript">
// Creamos la función asíncrona/ejecutora
async function generaTexto() {
  let unTextoCualquiera = "Devuelvo este texto"
  return unTextoCualquiera;
}


// Podemos consumir la promesa con .then()
// Devuelve en consola: Devuelvo este texto
generaTexto().then(
  (x) => (console.log(x)),
  (y) => (console.log(y))
)

// Podemos consunsumirla dentro de una función asíncrona con await
async function getTexto() {
  let unTexto = await generaTexto();
  console.log(unTexto);
}

// Llamamos a nuestra función de consumo para ejecutarla
// Devuelve en consola: Devuelvo este texto
getTexto()


// ¿Y qué pasa si tratamos de consumir generaTexto() directamente?
// Devuelve en consola: Promise { [[PromiseStatus]]:resolved, [[PromiseValue]]:Devuelvo este texto }
console.log(generaTexto())
</code>
</pre>

¿Qué está sucediendo aquí?

- Al usar `async` delante de nuestra función `generaTexto()` nos ahorramos toda la verborrea de la promesa, la función ejecutora, etc. Esa función ya devuelve una promesa automáticamente después de `return`.

- Podemos consumir esa promesa de dos formas.

	- O bien con el método anterior, usando `.then()`.
	- O bien creando otra función asíncrona con `async` y usando `await` allí donde queramos consumir la promesa de nuestra función generadora.

	Importante notar que `await` sólo se puede usar dentro de una función asíncrona.