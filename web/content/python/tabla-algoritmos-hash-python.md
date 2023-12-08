---

Template: post

title: Algoritmos de hash disponibles en Python: una comparación

description: Tabla de algoritmos de hash en Python. Compara Velocidad, seguridad, tasa de colisión y tamaño de salida. Murmur3, Lookup3, MD5, SHA-3 y otros.

date: 2022-12-21 12:30

author: iagovar

comments: true

---

<style type="text/css">
	tbody td:nth-child(1) {
		text-align: left !important;
	}
</style>

Ten en cuenta que esto sólo es una tabla de referencia. Medidas como la velocidad, la tasa de colisión o la seguridad pueden cambiar dependiendo de variables que no son intrínsecas al algoritmo, como por ejemplo, la arquitectura donde se ejecutan.

Es decir, sirve para orientarte, pero vas a tener que leer más en profunidad, inevitablemente.

|      Algoritmo      | Velocidad | Seguridad | Tasa de colisión | Salida (bits) | Disponibilidad en std lib |
|:-------------------:|:---------:|:---------:|:----------------:|:-------------:|:-------------------------:|
| hash()              | Rápido    | Baja      | Alta             | 64            | Sí                        |
| hashlib.sha1()      | Moderado  | Alta      | Baja             | 160           | Sí                        |
| hashlib.sha256()    | Moderado  | Alta      | Baja             | 256           | Sí                        |
| hashlib.sha3_256()  | Moderado  | Alta      | Baja             | 256           | Sí                        |
| hashlib.md5()       | Rápido    | Baja      | Alta             | 128           | Sí                        |
| hashlib.blake2b()   | Moderado  | Alta      | Baja             | 256           | Sí                        |
| hashlib.blake2s()   | Moderado  | Alta      | Baja             | 256           | Sí                        |
| hashlib.sha3_512()  | Moderado  | Alta      | Baja             | 512           | Sí                        |
| hashlib.sha512()    | Moderado  | Alta      | Baja             | 512           | Sí                        |
| hashlib.sha3_384()  | Moderado  | Alta      | Baja             | 384           | Sí                        |
| hashlib.sha384()    | Moderado  | Alta      | Baja             | 384           | Sí                        |
| hashlib.shake_128() | Moderado  | Alta      | Baja             | Varia         | Sí                        |
| hashlib.shake_256() | Moderado  | Alta      | Baja             | Varia         | Sí                        |
| murmur3             | Moderado  | Alta      | Alta             | 32            | No, pyhash                |
| xxhash              | Rápido    | Alta      | Baja             | 64            | No, pyhash                |
| farmhash            | Rápido    | Alta      | Baja             | 32/64         | No, pyhash                |
| cityhash            | Rápido    | Alta      | Baja             | 128           | No, pyhash                |
| fnv1a_32            | Rápido    | Alta      | Baja             | 32            | No, pyhash                |
| fnv1a_64            | Rápido    | Alta      | Baja             | 64            | No, pyhash                |
| lookup3             | Rápido    | Alta      | Baja             | 32/64         | No, zlib                  |


Los algoritmos de hash se utilizan principalmente para dos propósitos: la verificación de integridad de datos (también conocida como checksum) y la autenticación de contraseñas.

Para la verificación de integridad de datos, se utilizan algoritmos de hash que son rápidos y tienen una tasa de colisión relativamente alta, como Murmur3 y Lookup3.

Estos algoritmos se utilizan para asegurar que los datos no se han modificado accidentalmente o de forma malintencionada durante la transmisión o el almacenamiento.

Para la autenticación de contraseñas, se utilizan algoritmos de hash seguros que tienen una tasa de colisión más baja y son más resistentes a ataques de colisión.

Algunos ejemplos de algoritmos de hash seguros incluyen SHA-256, SHA-3 y BLAKE2. Estos algoritmos se utilizan para asegurar que las contraseñas no pueden ser recuperadas a partir de las salidas de hash, incluso si alguien tiene acceso a la base de datos de contraseñas.

## ¿Por qué escoger algoritmos diferentes para cada contexto?

En el contexto de la verificación de integridad de datos, la tasa de colisión de un algoritmo de hash se refiere a la probabilidad de que dos entradas diferentes produzcan la misma salida de hash.

Una tasa de colisión alta significa que hay más posibilidades de que dos entradas diferentes sean tratadas como iguales por el algoritmo de hash, lo que puede llevar a resultados incorrectos al comparar las salidas de hash.

Sin embargo, en el contexto de la verificación de integridad de datos, la tasa de colisión no es necesariamente un problema, ya que el objetivo principal es detectar cualquier cambio en los datos, no importa cuál sea el cambio en particular.

Por lo tanto, en la verificación de integridad de datos, es más importante elegir un algoritmo de hash que sea rápido y eficiente, ya que se utilizará para muchas comparaciones de salidas de hash. Algoritmos como Murmur3 y Lookup3 son adecuados para este propósito debido a su velocidad y rendimiento, aunque tienen una tasa de colisión relativamente alta.

En cambio, para la autenticación de contraseñas, es más importante elegir un algoritmo de hash seguro, que tenga una tasa de colisión más baja y sea más resistente a ataques de colisión.

Esto se debe a que las contraseñas son información confidencial y es importante evitar que sean recuperadas a partir de las salidas de hash, incluso si alguien tiene acceso a la base de datos de contraseñas. Algoritmos como SHA-1, SHA-256, SHA-3 y BLAKE2 son adecuados para este propósito debido a su seguridad y resistencia a ataques de colisión.

Otros esecenarios se pueden complicar más, como comparar grandes conjuntos de datos con una tabla de hash. Aquí necesitarás velocidad y una muy baja tasa de colisiones. Para dirimir las colisiones necesitarás alguna estrategia adicional. La vida es así, acéptalo, haz las paces con el universo y trabaja en ello.

## ¿Es posible evitar al 100% las colisiones? ¿Qué se puede hacer para mitigarlas?

Es importante tener en cuenta que, aunque es posible reducir significativamente la probabilidad de que dos entradas diferentes produzcan la misma salida de hash utilizando un algoritmo de hash seguro y resistente a ataques de colisión, es imposible evitar completamente las colisiones de hash.

Esto se debe a que, matemáticamente hablando, siempre existe una pequeña probabilidad de que dos entradas diferentes produzcan la misma salida de hash, independientemente del algoritmo de hash utilizado, lo que se conoce como el principio del casillero, o *pigeonhole principle* en inglés.

Una estrategia para mitigar las colisiones puede ser, por ejemplo, la que usa Git, usando como imput de SHA-1 no sólo la información del commit actual, sino del commit pasado.

No conozco a nadie que haya encontrado una colisión en la tabla hash de su repositorio, aunque seguramente es teóricamente posible.

### Referencias

- [What Is the Best Hashing Algorithm?](https://codesigningstore.com/what-is-the-best-hashing-algorithm)
- [Is there a hash function which has no collisions?](https://crypto.stackexchange.com/questions/8765/is-there-a-hash-function-which-has-no-collisions)
- [What makes a hash like SHA1 resistant to collisions?](https://crypto.stackexchange.com/questions/48552/what-makes-a-hash-like-sha1-resistant-to-collisions)