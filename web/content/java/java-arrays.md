---
template: post

title: Arrays en Java, y métodos interesantes

description: Lista de métodos interesantes para los arrays en Java

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
	pre {
		padding: 2px 4px;
		margin: 0.3em;
		color: #c7254e;
		background-color: #f9f2f4;
		border: none;
	}
	video {
		max-width: 450px;
	}
</style>

<table>
<thead>
  <tr>
    <th>Método</th>
    <th>Descripción</th>
    <th>Snippet</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>sort()</td>
    <td>Ordena los elementos de un array en orden ascendente</td>
    <td><pre><code>int[] numeros = {3, 1, 4, 2}; <br>Arrays.sort(numeros);</code></pre></td>
  </tr>
  <tr>
    <td>binarySearch()</td>
    <td>Realiza una búsqueda binaria en un array previamente ordenado para encontrar un valor específico</td>
    <td><pre><code>int[] numeros = {1, 2, 3, 4}; <br>int posicion = Arrays.binarySearch(numeros, 3);</code></pre></td>
  </tr>
  <tr>
    <td>equals()</td>
    <td>Compara dos arrays y devuelve true si son iguales y false si no lo son</td>
    <td><pre><code>int[] array1 = {1, 2, 3}; <br>int[] array2 = {1, 2, 3}; boolean sonIguales = Arrays.equals(array1, array2);</code></pre></td>
  </tr>
  <tr>
    <td>fill()</td>
    <td>Llena un array con un valor específico</td>
    <td><pre><code>int[] numeros = new int[5]; <br>Arrays.fill(numeros, 0);</code></pre></td>
  </tr>
  <tr>
    <td>copyOf()</td>
    <td>Crea una copia de un array</td>
    <td><pre><code>int[] array1 = {1, 2, 3}; <br>int[] array2 = Arrays.copyOf(array1, array1.length);</code></pre></td>
  </tr>
  <tr>
    <td>toString()</td>
    <td>Devuelve una representación en forma de cadena de un array</td>
    <td><pre><code>int[] numeros = {1, 2, 3}; <br>System.out.println(Arrays.toString(numeros));</code></pre></td>
  </tr>
</tbody>
</table>


No existe un método `push()` en Java para los arrays. Para agregar elementos a un array en Java, se pueden utilizar diversos métodos como el de copiar un array a uno nuevo con un elemento adicional o mediante la utilización de estructuras de datos dinámicas como las listas o los ArrayList.


## Más información

- [Python Array VS Java Array - Dev.to](https://dev.to/tlylt/python-array-vs-java-array-31ee)