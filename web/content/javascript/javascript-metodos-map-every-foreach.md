---
template: post

title: Javascript: ¿Qué diferencias hay entre los métodos .map(), .every() y .forEach()?

description: Estos tres métodos parecen hacer cosas similares, pero ¿Qué diferencias existen entre ellos?

comments: true

date: 2022-10-1

---

<style>
	th, tr {border-bottom: 1px solid darkgrey;}
	td {padding: 0.2em;}
	table {font-size: 0.8em;}
</style>

<table>
<thead>
  <tr>
    <th></th>
    <th>.map()</th>
    <th>.every()</th>
    <th>.forEach()</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Modifica el Array Original?</td>
    <td>No</td>
    <td>No</td>
    <td>Podría, depende de tu código</td>
  </tr>
  <tr>
    <td>Qué devuelve?</td>
    <td>Un nuevo Array</td>
    <td>Un Boolean</td>
    <td>Nada</td>
  </tr>
  <tr>
    <td>Breve explicación</td>
    <td>Ejecuta una acción sobre cada elemento del array, y crea un array nuevo</td>
    <td>Retornará True si todos los elementos cumplen el test especificado</td>
    <td>Es simplemente un método para un bucle For, asi que podría hacer cualquier cosa</td>
  </tr>
</tbody>
</table>

Cuando uno empieza en Javascript, lo primero que advierte es que la librería estándar tiene muchos métodos que hacen cosas parecidas (en mi opinión, demasiados), y a veces cuesta recordar las diferencias entre ellos, si no se tiene suficiente práctica o rodaje.

`.forEach` es simplemente un método creado, en principio, para simplificar en un formato *inline* los bucles for. En mi opinión no lo consigue, ya que por lo que he podido ver se usa habitualmente con funciones anónimas, lo que complica bastante la lectura y resulta en un chorizo de código al que la gente habituada a JS no parece molestar.

`.map` es equivalente a otros lenguajes. Parece que también es habitual el abuso de funciones anónimas, pero su uso tiene sentido, y sí ahorra, realmente, algo de esfuerzo y de líneas de código.

`.every` sufre el mismo mal de meter funciones anónimas *inline* a cascoporro, pero también consigue ahorrar algo de esfuerzo y gore de líneas, si se usa con cautela.