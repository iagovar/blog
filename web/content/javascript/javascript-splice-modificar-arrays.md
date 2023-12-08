---
template: post

title: Javascript: Entendiendo la modificación de arrays con .splice()

description: splice() puede que sea el método más versátil para modificar arrays

comments: true

date: 2022-10-1

---
En mi opinión, los métodos `.splice()` e `.indexOf()` son los más sencillos de usar para modificar *arrays* en Javascript. Veamos lo siguiente.

Supongamos que tenemos un array como este:

````
const miLista = [1,2,3,4,5,6,7,8,9,"diez"]
````

Si ejecutamos `miLista.lenght` obtendremos que la lista tiene una longitud de 10.

Supongamos que queremos borrar el primer elemento. Si ejecutamos `delete miLista[0]` obtendremos una lista con la misma longitud, pero cuyo primer elemento será `undefined`, lo que nos creará todo tipo de problemas más adelante.

Podemos hacer lo siguiente:

````
// Lista de la que partimos
const miLista = [1,2,3,4,5,6,7,8,9,"diez"]

// ¿Qué índice tiene el elemento que queremos eliminar (el 1) en nuestra lista?
const indiceNecesario = miLista.indexOf(1)

// ¿Cuántos elementos debemos eliminar? Un argumento requerido por .spice()
const numDeElementosParaEliminar = 1

// Usamos .splice() con sus argumentos para ejecutar el borrado
miLista.splice(indiceNecesario, numDeElementosParaEliminar)


// Comprobamos que la lista/array unidimensional tenga la forma que buscamos
console.log(miLista) // [ 2, 3, 4, 5, 6, 7, 8, 9, 'diez' ]
````

Es cierto que existen los métodos `.pop()`y `.unshift()` pero en condiciones reales no querrás sólo eliminar el primer o último elemento de una lista, sino modificar un array de acuerdo a algún criterio.

Familiarizarte con `.splice()` e `.indexOf()` te permitirá resolver todas las situaciones con facilidad.

Dos apuntes necesarios más:

1. `.indexOf()`devuelve `-1` si no encuentra el elemento indicado. Hay que tener cuidado con esto y tenerlo en cuenta para código en producción, o podrías acabar modificando el último elemento del array sin quererlo.
2. `.splice()`modifica el array original. Parece una obviedad viendo el código pero no está de más recordarlo.

