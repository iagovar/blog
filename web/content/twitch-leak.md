---
Template: post
title: Mucho más de lo que querrías saber sobre los datos filtrados de Twitch (Payouts)
description: Un análisis superficial de los datos de pago filtrados con el repositorio de Twitch.
date: 2021-10-14 14:00
author: iagovar
comments: true
---

<style type="text/css">
	#toc > li:nth-child(1) {
		display: none;
	}
</style>


<div id="toc"></div>

Este post es un pequeño ejercicio de análisis, motivado únicamente por la curiosidad. Hace poco se filtró un repositorio entero de Twitch donde, además de otras cosas, viene un listado de *payouts* de Twitch. Por el volumen de los datos parece un volcado de una base de datos, no un muestreo, lo que nos puede dar bastante juego. Veamos.

# Definiciones

Como no me entero mucho de la película de Twitch, he decidido hacer una pequeña recopilación de los diferentes tipos de ingresos que figurar públicamente en la web de Twitch.

- Bits: Tokens internos de twitch, que se usan a modo de recompensa puntual para el streamer. El precio está definido por Twitch.

- Subs: Suscripciones mensuales a cambio de ventajas que el streamer configura en su canal. Los precios están establecidos por Twitch, en tres niveles.

	Los usuarios con Prime de Amazon pueden suscribirse gratuítamente a un streamer, aunque dicha subscripción no se renueva automáticamente. Tendrían que volver a asignarla de nuevo cada mes al mismo streamer, si así lo desean.

- Ads: Anuncios con revenue sharing entre Twitch y el streamer. Cuándo se ejecutan es decisión del streamer.

- Extensiones y Developer: 80% de un 1 céntimo al streamer, y el 20% restante para el desarrollador, por cada Bit gastado en la extensiones. Este payout es adicional al que general el propio Bit, que se lo lleva el streamer.

# Análisis de 2020

El motivo de escoger 2020 es simplemente porque los datos de 2019 y 2021 no están completos, y 2020 es el único año en el el *leak* que incluye todos los datos.

Sería razonable pensar que hubo cambios entre 2019 y 2020 por el tema de la pandemia, al forzar a la gente a pasar más tiempo en casa, analizaremos más adelante los posibles cambios entre los datos de 2019 de los que disponemos, y 2020.

Estas son las columnas con las que analizaremos en 2020.

| user_id                    | Identificador de usuario                                                           |
|----------------------------|------------------------------------------------------------------------------------|
| payout_entity_id           | Podría ser un ID de origen o destino del pago. No lo usaremos.                     |
| ad_share_gross             | Remuneración por anuncios.                                                         |
| prime_sub_share_gross      | Remuneración por subscripciones con Prime de Amazon.                               |
| bits_share_gross           | Remuneración por Tokens de Twitch.                                                 |
| bits_developer_share_gross | Remuneración por desarollo de Extensiones.                                         |
| bits_extension_share_gross | Remuneración por gasto en Extensiones.                                             |
| bit_share_ad_gross         | Columna vacía                                                                      |
| fuel_rev_gross             | Columna vacía                                                                      |
| bb_rev_gross               | Algún tipo de remuneración, desconozco el origen, no he sido capaz de averiguarlo. |
| report_date                | Fecha del Payout. Se agruparán para obtener el payout anual.                       |
| experimental_rev_gross     | Columna vacía                                                                      |
## Algunas hipotesis para probar

Normalmente cuando se formulan hipótesis se ofrece un contexto para las mismas. En este caso, al tratarse de un blog, simplemente me haré preguntas o haré afirmaciones sobre la marcha.

### Hipóteis 1 (eliminada)
Hipótesis eliminada.

La primera hipótesis ha sido eliminara por cuestiones de privacidad.


### Hipótesis 2: Extensiones y desarrolladores
*bits_extension_share* es un payout que recibirán los streamers (por tanto tendrán también payout en ad, bit y subs) mientras que developer será infrecuente que obtenga ingresos por las vías del streamer. Estamos asumiendo, por tanto que son personas/entidades diferentes.

Para probar dicha hipótesis sumamos todos los ingresos de las columnas, excepto la columna de *bits_developer*, y comparamos los valores encontrados por cada UserID.

Veamos el resultado:

| Valores        | User ID's |
|----------------|-----------|
| AMBOS < 0      | 210116    |
| AMBOS > 0      | 42        |
| Sólo Developer | 76        |
| Sólo Streamer  | 1341916   |

Es imposible determinar si los resultados son producto de cierto nivel de ruido en los datos, pero tampoco sería extraño que entre millones de streamers, 42 de ellos sean también developers y obtengan ingresos por ambas vías.

### Hipótesis 3: Subscripciones con Amazon Prime
*prime_sub_share* será siempre menor que *sub_share_gross*. Si hay un caso donde el valor sea equivalente podría significar que el primero es un subconjunto del segundo.

Esta última circunstancia sólo se daría realmente en streamers que tengan pocos subs, porque tendría que coincidir que los únicos subs que tienen son de Prime, y encuentro muy poco probable que esto se produzca.

Veamos el resultado:

| Valores                 | User ID's |
|-------------------------|-----------|
| Prime subs < Subs gross | 775358    |
| Prime subs = Subs gross | 142       |
| Prime subs > Subs gross | 326771    |

Este resultado se obtiene excluyendo primero aquellos usuarios cuyo valor en ambas columnas sea cero, para evitar el ruido de usuarios sin gangancias y/o ruido.

El hecho de que haya aproximadamente 300K usuarios que tienen más subs en la columna de Prime que en *sub_share_gross* indica que son dos categorías diferenciadas, no subconjuntos.

Esto es útil, porque ahora sabemos que para obtener los ingresos totales de un usuario es necesario sumar estas dos columnas.

También podemos obserbar que, aunque existe diferencia, los subs de Prime están muy extendidos.

### Hipótesis 4: bb_rev_gross, el concepto incógnita
No soy capaz de aventurar qué concepto sostiene la columna *bb_rev_gross*, pero se me ocurre que podría ser el total de ingresos brutos. Es decir, el resto de conceptos sumados tendrían que ser equivalentes o por lo menos menores que esta columna. De lo contrario tendría que ser un concepto forzosamente diferenciado, pero ¿el qué? **Si eres streamer, o crees que sabes a qué se refiere, por favor índícamelo en los comentarios o en mi cuenta de Twitter @iagovar**.


Veamos el resultado:

| Valores               | User ID's |
|-----------------------|-----------|
| bb_rev_gross < ΣResto | 1342011   |
| bb_rev_gross = ΣResto | 209957    |
| bb_rev_gross > ΣResto | 182       |

Como podemos ver, hay que descartar la hipótesis, ya que esta columna es, de hecho, en su mayoría de instancias, menor que la suma del resto de columnas.

Sin embargo, que haya tantas filas donde el valor es equivalente es señal de que hay que profundizar un poco más. Es extraño ¿Y si estamos ante algún tipo de ruido?

Hagamos otra prueba:

| Valores                        | User ID's |
|--------------------------------|-----------|
| Ambos <= 0                     | 210116    |
| Ambos > 0                      | 1799      |
| bb_rev_gross <= 0 Y ΣResto > 0 | 1340234   |
| bb_rev_gross > 0 Y ΣResto <= 0 | 1         |

Queda claro que esas +200k de filas donde el sumatorio del resto y *bb_rev_gross* son equivalentes son, fundamentalmente, usuarios que no tienen ningún ingreso, asi que tiene sentido.

Otra observación que ayuda a refutar la hipótesis es que en la mayoría de filas donde no son equivalentes, no es sólo que *bb_rev_gross* sea menor que el sumatorio del resto de columnas, sino que es menor o igual que cero.

Sin embargo todos los conceptos que son públicos tienen una columna asignada, y seguimos sin saber qué es *bb_rev_gross* exáctamente. ¿Podría referirse esto a acuerdos privados entre streamers o twitch? ¿O quizá relacionados de alguna manera con intermediarios? La verdad, lo desconozco. Insisto, **si sabes algo, comunícamelo en los comentarios o en mi Twitter @iagovar**.

### Hipótesis 5: Distribución de los ingresos para streamers
Sabiendo ya que las columnas representan categorías diferentes de ingresos, y basándome en el conocimiento de otras comunidades, diría que la mayoría de los usuarios no gana nada, y sólo una muy reducida minoría es capaz de vivir de ello.

Para esto, he decidido categorizar a los usuarios de la siguiente manera. 

| xSMI      |          | Anual (€) |          |
|-----------|----------|-----------|----------|
| Min       | Max      | Min       | Max      |
| Negativos | 0        | Negativos | 0        |
| 0         | 0,000888 | 0         | 12       |
| 0,000888  | 0,044412 | 12        | 600      |
| 0,044412  | 0,088823 | 600       | 1200     |
| 0,088823  | 0,444117 | 1200      | 6000     |
| 0,444117  | 1        | 6000      | 13509,96 |
| 1         | 2        | 13509,96  | 27019,92 |
| 2         | 3        | 27019,92  | 40529,88 |
| 3         | 4        | 40529,88  | 54039,84 |
| 4         | 5        | 54039,84  | 67549,8  |
| 5         | 6        | 67549,8   | 81059,76 |
| 6         | 7        | 81059,76  | 94569,72 |
| 7         | 8        | 94569,72  | 108079,7 |
| 8         | 9        | 108079,7  | 121589,6 |
| 9         | 10       | 121589,6  | 135099,6 |
| +10       |          | 135099,6  |          |

He decidido hacerlo en base al salario mínimo español por una cuestión de hacerlo más llamativo. También es cierto que los valores vienen expresados en dólares estadounidenses, pero he decidido ignorar la conversión, tampoco supondrá una gran diferencia.

Veamos el resultado:

<img src="assets/twitch-payout-data/twitch-payout-distribution.png" alt="Twitch Payout distribution for 2020">

Como se puede observar en la tabla superior, **casi el 97% de los usuarios no llega a 1 SMI, y menos del 9% se situa entre 1200 y 6000€**. Hay que tener en cuenta que esto puede parecer muy poco dinero, pero fuera de España 6000€ al año dan para mucho, y este conjunto de datos incluye usuarios de todo el mundo.

Por ejemplo, en la mayoría de los países de Latinoamérica 6000€ / año es dinero. Alguien que emite en Twitch seguramente viva en una ciudad grande con cierta infraestructura, y coste relativamente elevado para la región, de modo que 6000€ no supongan un cambio de estilo de vida radical, pero creo que sí aportarían mucha tranquilidad, especialmente si vives en un país donde la moneda es muy volátil (cualquiera que lea esto desde Argentina o Venezuela entenderá de sobra las ventajas de tener ingresos en euros o dólares).

No estoy tan familiarizado con los costes de vida en África o Asia, pero puedo imaginar que habrá países donde ganar estos montos puede suponer un factor diferencial (Filipinas) o tener el mismo o menor impacto en las finanzas personales que en España (Japón, Corea del Sur, gran parte de China, muchas grandes ciudades del ASEAN).

Lamentablemente los datos filtrados no incluyen información geográfica, pero aún con todo hay que tener en cuenta que muy pocos usuarios llegan a ese nivel de ingresos. La mayoría de streamers quizá puedan pagarse algún capricho con lo que ganan, poco más.


### Hipótesis 6: ¿De dónde obtienen los ingresos los streamers?
Otra hipótesis, viendo la naturaleza de los tipos de ingreso, sería que los ingresos se jerarquizarán de la siguiente manera para la mayoría de usuarios: Bits > Subs > Prime > Ads, y queda la incógnita de *bb_rev_gross*, las extensiones y los desarrolladores.

Veamos los promedios por grupo:

|               |      bb |       ad |       sub |     bits |     dev |     ext |     prime |
|---------------|--------:|---------:|----------:|---------:|--------:|--------:|----------:|
| Hasta 12€     | 0       | 0,79     | 0,73      | 0,47     | 0       | 0,01    | 0,49      |
| Hasta 600€    | 0       | 6,57     | 86,56     | 25,45    | 0,01    | 0,72    | 39,41     |
| Hasta 1200€   | 0,01    | 32,59    | 504,15    | 175,11   | 0,03    | 5,86    | 132,84    |
| Hasta 6000€   | 0,26    | 96,84    | 1547,94   | 627,97   | 0,36    | 23,43   | 297,32    |
| Hasta 1 SMI   | 3,71    | 383,66   | 5240,97   | 2335,94  | 1,09    | 89,04   | 817,19    |
| Hasta 2 SMI   | 16,79   | 964,7    | 11130,57  | 4907,28  | 0       | 186,26  | 1742,91   |
| Hasta 3 SMI   | 57,61   | 1835,28  | 18964,06  | 8468,84  | 18,11   | 345,16  | 3208,92   |
| Hasta 4 SMI   | 120,53  | 2905,76  | 27013,15  | 11575,29 | 0       | 384,63  | 4749,36   |
| Hasta 5 SMI   | 175,91  | 4085,58  | 34730,92  | 14424,3  | 8,75    | 531,27  | 6542,3    |
| Hasta 6 SMI   | 289,44  | 5103,66  | 42593,64  | 16718,27 | 0       | 806,37  | 8383,29   |
| Hasta 7 SMI   | 405,34  | 6886,07  | 48992,72  | 19712,71 | 0       | 768,89  | 10692,53  |
| Hasta 8 SMI   | 432,74  | 7755,77  | 56686     | 22576,39 | 159,64  | 870,51  | 12411,81  |
| Hasta 9 SMI   | 536,36  | 9039,43  | 65523,04  | 24587,02 | 0       | 631,15  | 14293,25  |
| Hasta 10 SMI  | 224,28  | 10512,07 | 72918,09  | 26421,22 | 0       | 701,54  | 17403,58  |
| Más de 10 SMI | 3582,84 | 73614,83 | 226409,76 | 54329,46 | 1571,67 | 1483,99 | 107347,18 |

Es complicado de procesar mentalmente este churro de información, y no encuentro una forma de hacer una visualización fácil de leer.


Transformémoslo en lo siguiente:

|    Jerarquías |   bb |   ad |  sub | bits |  dev |  ext | prime |
|--------------:|-----:|-----:|-----:|-----:|-----:|-----:|------:|
|     Hasta 12€ |  6,5 |    1 |    2 |    4 |  6,5 |    5 |     3 |
|    Hasta 600€ |    7 |    4 |    1 |    3 |    6 |    5 |     2 |
|   Hasta 1200€ |    7 |    4 |    1 |    2 |    6 |    5 |     3 |
|   Hasta 6000€ |    7 |    4 |    1 |    2 |    6 |    5 |     3 |
|   Hasta 1 SMI |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
|   Hasta 2 SMI |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
|   Hasta 3 SMI |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
|   Hasta 4 SMI |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
|   Hasta 5 SMI |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
|   Hasta 6 SMI |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
|   Hasta 7 SMI |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
|   Hasta 8 SMI |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
|   Hasta 9 SMI |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
|  Hasta 10 SMI |    6 |    4 |    1 |    2 |    7 |    5 |     3 |
| Más de 10 SMI |    5 |    3 |    1 |    4 |    6 |    7 |     2 |
|               |      |      |      |      |      |      |       |
|      Promedio | 6,25 | 3,79 | 1,07 | 2,21 | 6,75 | 5,00 |  2,93 |
|         Final |    6 |    4 |    1 |    2 |    7 |    5 |     3 |



Sigue siendo mucha información, pero es más fácil de interpretar. La tabla superior representa la posición promedio de cada uno de los conceptos para cada grupo de ingresos.

La última fila nos permite deducir que la jerarquía que más se repite es subs > bits > prime > anuncios > extensiones > "bb" (sea lo que sea esto) > desarrollo.

Hay algunos cambios dependiendo del grupo de ingresos, pero no demasiado significativos. Podríamos decir que no se cumple la hipótesis.


### Hipótesis 7: ¿Creció Twitch durante la pandemia?
La última hipótesis, que ya comentamos al principio del post, es que la pandemia ha impulsado mucho el uso de Twitch. Esto debería reflejarse de algún modo tanto en el número de usuarios como en los ingresos.

Veamos el resultado:

<img src="assets/twitch-payout-data/twitch-payout-dates.png" alt="Twitch Payout distribution for 2020">

Como vemos en la tabla superior, el número de payouts (un proxy sobre el número de usuarios emitiendo) ha aumentado claramente, pero no se observa nada particular entre Febrero y Mayo de 2020, por especular de dónde podría haber venido el pico de nuevos streamers. Quizá se puede decir que el *payout* promedio ha subido un poco, pero perfectamente puede ser un efecto estadístico, ya que no todos los streamers acumulan suficiente para retirar dinero todas las fechas.

Lamentablemente los datos filtrados no contienen estadísticas sobre espectadores. Podemos observar una trayectoria claramente creciente en Twitch entre 2019 y 2020, pero realmente los datos no permiten ir mucho más allá.

¿Se debe esto a la pandemia o al crecimiento natural de la plataforma? No lo sé. Si se te ocurre alguna métrica que pueda ayudar, escríbela en los comentarios o en mi cuenta de twitter @iagovar

# Obtener los archivos y el análisis
<script src="https://gumroad.com/js/gumroad-embed.js"></script>
<div class="gumroad-product-embed"><a href="https://gumroad.com/l/eDsdr">Loading...</a></div>