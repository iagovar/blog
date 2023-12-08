---
title: Tipos de datos avanzados en java
description: Tipos de colecciones y características a recordar para gente olvidadiza, como yo
date: 05-24-2023
template: post
---

<style>
    pre {
        padding: 0;
    }
</style>

<div id="toc"></div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/agate.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>

## Arrays

Los arrays en Java no son como las listas en Python, sólo pueden contener un sólo tipo de datos, y además hay que, o bien declarar el tamaño, o inicializarlo con los valores, directamente. No cambian de tamaño.

Es decir, se puede hacer o bien `int miArray[] = new int[6]` o bien `int miArray = {1, 2, 3, 4, 5, 6}`

Si no se inicializa, en el caso de un array con enteros, los "espacios" no ocupados tendrán un 0, y en uno con cadenas de texto, al imprimir mostrará "".

## Arrays multidimensionales

Los arrays multidimensionales se declaran, simplemente, añadiendo corchetes: `int miArray[][][] = new int[6][7][8]`. En este ejemplo tridimensional, se podría interpretar 6 posiciones en la X, 7 en la Y, 9 en la Z.

Podemos asignar un valor, por ejemplo, con `miArray[1][2][3] = 1`, sabiendo que el valor 1 se encuentra en la posición 1 X, 2 Y, 3 Z.

También podemos inicializarlo con:

````
int miArray[][][] = {
	{{1, 2, 3}, {4, 5, 6}}, {{7, 8, 9}, {10, 11, 12}}
};
````

Para recorrer el array tridimensional podemos usar bucles for anidados:

```
for (int dim1 = 0; dim1 < miArray.length; dim1++) {
    for (int dim2 = 0; dim2 < miArray[dim1].length; dim2++) {
        for (int dim3 = 0; dim3 < miArray[dim1][dim2].length; dim3++) {
            System.out.print(miArray[dim1][dim2][dim3] + " ");
        }
    }
}
```

**Para recordar**: 

- La longitud de un array es una propiedad, al contrario que en los strings, que es un método. Este hecho se deriva simplemente de la lógica de implementación que siguen los desarrolladores de Java.

- La comparación de arrays con `==` solo compara direcciones de memoria, de modo que hay que usar `Arrays.equals()` para arrays unidimensionales y `Arrays.deepEquals()` para multidimensionales o *complejos*.



Consultar para más info: [Programiz](https://www.programiz.com/java-programming/multidimensional-array)

## Vectores
````
import java.util.Vector;

Vector<Integer> vector = new Vector<Integer>(int initialCapacity, int capacityIncrement); // Crea un vector de enteros con tamaño inicial de 10
````

- Los vectores son arrays dinamicos, pero crecer o decrecer el array subyacente es muy lento, ya que hacen una copia completa de todo el contenido en un nuevo Array.

- Se puede especificar el tamaño incial, su ritmo de crecimiento o decrecimiento. Por defecto su ritmo de crecimiento es * 2.

- `trimToSize()` decrece el array subyacente al tamaño de sus datos (es decir, ajusta el `.size()` a `.capacity()`.

- Es seguro en concurrencia (thread safe): Significa que un objeto o estructura de datos puede ser utilizado de manera segura por múltiples hilos (threads) al mismo tiempo sin causar problemas de sincronización o inconsistencias en los datos. En el caso de un vector en Java, ser "thread safe" implica que las operaciones realizadas en el vector, como agregar, eliminar o acceder a elementos, se pueden realizar de manera concurrente por diferentes hilos sin causar conflictos.

- No se puede hacer lista[i] como en los Arrays, sino lista.get(i).

## ArrayList

````
import java.util.ArrayList;

ArrayList<String> listaNombres = new ArrayList<>(int CapacidadInicial);

// O también, inicializando con una colección previa:

Integer[] arreglo = {1, 2, 3, 4, 5};
ArrayList<Integer> lista = new ArrayList<>(Arrays.asList(arreglo));
````

- Array dinamico, que implementa la interfaz `List`, no tiene una capacidad delimitada y su ritmo de crecimiento por defecto es aumentar un 50% (no * 2, como el vector) del tamaño de la colección, haciéndolo más eficiente que el vector en aumentos y contracciones de tamaño.

- No es *thread safe* como el Vector, de tal manera que en situaciones de concurrencia puede haber inconsistencias en los datos.

- No se puede hacer lista[i] sino lista.get(i), igual que el Vector.

- Rápido para almancenar y buscar datos, y más eficiente que el Vector al modificar su tamaño.

## LinkedList
````
import java.util.LinkedList;

// No tiene capacidad predefinida, asi que no hay de declarar nada al inicio
LinkedList<String> miLinkedList = new LinkedList<>();
miLinkedList.add("Un Elemento")
````
LinkedList es una implementación de la interfaz List en Java que utiliza una estructura de datos de lista enlazada para almacenar sus elementos.

- LinkedList no tiene una capacidad predefinida y su tamaño puede crecer o disminuir según sea necesario. No es necesario especificar una capacidad inicial al crear una LinkedList.

- A diferencia de los vectores y los ArrayList, no utiliza un arreglo dinámico como base. En su lugar, cada elemento de la lista contiene una referencia al siguiente elemento, formando una cadena de nodos enlazados.

    Esto significa que la inserción y eliminación de elementos en una LinkedList es más eficiente que en un vector o ArrayList, especialmente en operaciones que implican modificaciones frecuentes en el medio de la lista.

    Sin embargo, acceder a elementos en una LinkedList es menos eficiente en comparación con un vector o ArrayList, ya que se requiere recorrer la lista desde el principio o el final hasta la posición deseada.

    Es decir:

    1. Eficiente en modificacíones frecuentes.

    2. Ineficiente para obtener elementos.

    3. Ideal para colecciones no muy grandes.

    ---

- No es *thread safe*, asi que no es buena idea usarla en concurrencia.

- No se puede hacer lista[i] sino lista.get(i), igual que el Vector y el ArrayList.

LinkedList ofrece algunas operaciones adicionales que son específicas de su estructura de lista enlazada, como addFirst(elemento) para agregar un elemento al inicio de la lista, addLast(elemento) para agregar un elemento al final de la lista, removeFirst() para eliminar el primer elemento de la lista, y removeLast() para eliminar el último elemento de la lista.

- [LinkedList en W3Schools](https://www.w3schools.com/java/java_linkedlist.asp)

## Bigdecimal
````
import java.math.BigDecimal;

BigDecimal miDecimal = new BigDecimal("10.50");
````
BigDecimal se usa para hacer cálculos precisos con decimales de cualquier longitud.

Esto se consigue tratando a los decimales como objetos, y el *tradeoff* es que, entornos de mucho volúmen de trabajo, es más lento que los tipos nativos.

Sin embargo, salvo para entornos tipo *HFT* o similares, la penalización por rendimiento no se notará. Tiene que haber mucho, mucho volúmen de cálculo para que se note (o el hardware ser realmente limitado).


## Mapas: TreeMap, HashMap y otros
````
import java.util.HashMap;

HashMap<String, Integer> people = new HashMap<String, Integer>();

people.put("John", 32);
````

Los mapas en Java son estructuras clave-valor, como los diccionarios en Python.

Los más populares son TreeMap y HashMap, pero hay muchos otros (Colored Btree Map es interesante también).

Todos los mapas en Java son implementaciones de la **interfaz Map**, de manera que comparten la mayoría de los métodos.

**Métodos comunes a todos los mapas**
- **put(key, value)**: Este método se utiliza para agregar un par clave-valor al mapa. Si la clave ya existe en el mapa, el valor anterior se reemplaza por el nuevo valor.
- **get(key)**: Este método se utiliza para obtener el valor asociado con una clave específica en el mapa.
- **remove(key)**: Este método se utiliza para eliminar un par clave-valor del mapa.
- **containsKey(key)**: Este método se utiliza para determinar si el mapa contiene una clave específica.
- **containsValue(value)**: Este método se utiliza para determinar si el mapa contiene un valor específico.
- **keySet()**: Este método devuelve un conjunto de todas las claves en el mapa.
- **values()**: Este método devuelve una colección de todos los valores en el mapa.
- **entrySet()**: Este método devuelve un conjunto de todos los pares clave-valor en el mapa.


<a href="https://2.bp.blogspot.com/--9mLb1kGbjU/VdsKlyusXwI/AAAAAAAADo0/tYU-8u-qLmU/w625-h410/Difference%2Bbetween%2BHashMap%252C%2BTreeMap%252C%2BLinkedHashMap%2Band%2Bhashtable%2Bin%2BJava.png"><img src="https://2.bp.blogspot.com/--9mLb1kGbjU/VdsKlyusXwI/AAAAAAAADo0/tYU-8u-qLmU/w625-h410/Difference%2Bbetween%2BHashMap%252C%2BTreeMap%252C%2BLinkedHashMap%2Band%2Bhashtable%2Bin%2BJava.png"></a>

---
- Documentación de la interfaz Map: [Oracle](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)
- Algo de discusión al respecto: [StackOverFlow](https://stackoverflow.com/questions/2889777/difference-between-hashmap-linkedhashmap-and-treemap)
- Video de Píldoras Informáticas sobre mapas: [Youtube](https://www.youtube.com/watch?v=ltwlQKMn1hk)


<script>hljs.highlightAll();</script>