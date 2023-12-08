---
template: post

title: Javascript: ¿Qué diferencias hay entre los bucles for of y for in?

description: La diferencia puede resultar confusa para quienes vienen de Python. Lo aclaramos.

comments: true

date: 2022-10-5

---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/default.min.css">
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/highlight.min.js"></script>
<script>hljs.highlightAll();</script>


<style>
  th, tr {border-bottom: 1px solid darkgrey;}
  td {padding: 0.5em;}
  table {font-size: 0.8em;}
</style>


Si alguien llega a JavaScript desde la simplicidad de Python le puede costar diferenciar los bucles `for in` de los `for of`. 

````
for (valor [in/of] colección) {}
````

<table>
<thead>
  <tr>
    <th></th>
    <th></th>
    <th colspan="2"><code>valor</code> devuelve:</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><b>Bucle</b></td>
    <td><b>Itera sobre</b></td>
    <td><b>Sobre Array</b></td>
    <td><b>Sobre Objeto</b></td>
  </tr>
  <tr>
    <td>for in</td>
    <td>Propiedades de un objeto</td>
    <td>Un índice</td>
    <td>Una clave</td>
  </tr>
  <tr>
    <td>for of</td>
    <td>Valores de un iterable, como son: Arrays, Strings, Maps, NodeLists, etc. Pero NO objetos.</td>
    <td>Un valor</td>
    <td>Error, no es iterable</td>
  </tr>
</tbody>
</table>

---

<pre>
<code class="language-javascript">
// ==== Definamos un Array y un objeto para probar después ====

const array = ["hola", 1,2,3, true, null, "adios"]
array.propiedadPersonalizada = "Esto es una propiedad personalziada";

console.log(array)
// ["hola", 1, 2, 3, true, null, "adios"] -> Observa que no incluye la propiedad

const objeto = {primera_clave: "primer_valor", segunda_clave: "segundo_valor"}
</code>
</pre>

Probemos con `for in`:

<pre>
<code class="language-javascript">
// ==== Hagamos pruebas con los bucles ====

// Problemos FOR IN
for (elemento in array) {
    console.log(`Esto muestra es un indice: ${elemento} y esto un valor: ${array[elemento]}`)
}

/*
    "Esto muestra es un indice: 0 y esto un valor: hola"
    "Esto muestra es un indice: 1 y esto un valor: 1"
    "Esto muestra es un indice: 2 y esto un valor: 2"
    "Esto muestra es un indice: 3 y esto un valor: 3"
    "Esto muestra es un indice: 4 y esto un valor: true"
    "Esto muestra es un indice: 5 y esto un valor: null"
    "Esto muestra es un indice: 6 y esto un valor: adios"
    "Esto muestra es un indice: propiedadPersonalizada y esto un valor: Esto es una propiedad personalziada"
*/


for (elemento in objeto) {
    console.log(`Esto muestra la clave: ${elemento} y esto el valor: ${objeto[elemento]}`)
}

/*
    "Esto muestra la clave: primera_clave y esto el valor: primer_valor"
    "Esto muestra la clave: segunda_clave y esto el valor: segundo_valor"
*/

</code>
</pre>

Probemos con `for of`:

<pre>
<code class="language-javascript">
for (elemento of array) {
  console.log(elemento)
}

/*
  "hola"
  1
  2
  3
  true
  null
  "adios"
*/

for (elemento of objeto) {
  console.log(elemento)
}

// TypeError: objeto is not iterable
</code>
</pre>

El cuadro superior resume bien la situación, pero ver el código puede ser útil.