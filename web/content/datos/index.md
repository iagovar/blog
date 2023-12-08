---

Template: post

title: Fuentes de datos

date: 2016-01-30 14:46

author: iagovar

comments: false

categories: [Uncategorized]


---

<style type="text/css">
	#toc > li:nth-child(1) {
		display: none;
	}
</style>

<div id="toc"></div>

## Distribuciones de renta

<a href="https://www.seg-social.es/wps/portal/wss/internet/EstadisticasPresupuestosEstudios/Estadisticas/EST211">Muestra contínuea de Vidas Laborales</a>

Lamentablemente en España no hay datos de renta con suficiente granularidad. Por ejemplo, es prácticamente imposible conocer, con fuentes abiertas, la distribución de las rentas salariales por municipio, con exactitud.

A este efecto muchos estudios usan la MCVL, que es básicamente un <i>dump</i> de una BD de la Seguridad Social, que te llega en DVD, y buena suerte formateando los datos. No te llega un volcado de todas las rentas, sino un muestreo de las mismas.

Dentro del enlace hay varios PDFs explicando las edificiones disponibles, y un PDF que hay que rellenar para solicitar los microdatos.

He preguntado al Instituto Galego de Estadística por un script que usan ellos para procesar los datos, pero por lo que me comentan no pueden compartirlo por temas legales. En cuanto me anime, publicaré yo uno para Python y/o Knime.

<hr>

<a href="http://fedea.net/renta">Renta personal de los municipios españoles y su distribución (FEDEA)</a>

Esta estadística recoge el valor de la renta personal media en cada uno de los municipios españoles de más de 5.000 habitantes. Esta magnitud es definida en términos de renta gravable total estimada, de forma representativa, a partir de los microdatos anuales de IRPF. La información se ofrece en términos per cápita y por declarante residente en el municipio.

<hr>

<a href="https://www.ine.es/experimental/experimental.htm">Atlas de distribución de renta de los hogares</a>

Este proyecto se plantea la construcción de indicadores estadísticos de nivel y distribución de renta de los hogares a nivel municipal e inframunicipal, a partir del enlace de información del INE con datos tributarios, fundamentalmente de la AEAT pero también conteniendo información de las Haciendas Forales.

Se proporcionan no solo valores medios sino también información sobre distribución de la renta, lo que permite construir indicadores de desigualdad para municipios, a partir de un determinado umbral de población. Los indicadores de distribución de la renta son del tipo proporción de población por debajo de determinados niveles de renta.

<hr>

## Mercado de vivienda

### Estudios

### Resúmenes / Metaestudios

<a href="https://repositorio.bde.es/bitstream/123456789/10448/1/do2002.pdf">La intervención pública en el mercado del alquiler de vivienda: una revisión de la experiencia internacional.</a>

Documento del Banco de España resumiendo la teoría y la observación empírica sobre las experiencias internacionales aplicando políticas de intervención en el mercado de vivienda, cubriendo controles de precios, oferta pública, incentivos a la inversión privada, y políticas acotadas de limitación del gasto para colectivos.

### Análisis en prensa

<a href="https://www.eldiario.es/economia/tres-viviendas-registradas-espana-grandes-propietarios_1_7278813.html">Una de cada tres viviendas registradas en España desde 2015 es de grandes propietarios.</a>

Pequeño análisis sobre la incorporación de nueva oferta privada y su modelo de propiedad. Parece soportar la tesis de que la caída del ahorro familiar y, en general, la renta disponible, está dificultando mucho a los particulares el acceso a la vivienda. Esta opinión puede ser objeto de modificación en el futuro.

### Repositorios


#### EP Data

- <a href="https://www.epdata.es/datos/compra-venta-vivienda-mercado-inmobiliario-datos-hoy/29/espana/106">General sobre vivienda</a>

#### Spain Housing Observatory

- <a href="https://www.spainhousing.xyz/">Spain Housing Observatory</a>

### Trabajo Remoto

- [Otta.com](https://app.otta.com/)
