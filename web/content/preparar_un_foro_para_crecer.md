---

Template: post

title: Preparando un foro Mybb para crecer

description: Algunas ideas sobre cómo preparar un foro en MyBB para crecer, y gestionar sus datos.

date: 2020-04-14 14:00

author: iagovar

comments: true

categories: [Uncategorized]

---




<div id="toc"></div>



<span style="padding: 1em; background-color: lightgreen; display: block"> <b>Nota:</b> Este artículo se publica después del fracaso del foro. El proyecto fracasó, honestamente, por falta de iniciativa personal. Surgieron una serie de problemas con la comunidad que no estaba dispuesto a asumir, y me distraí con otros proyectos. Los foros, en realidad, son un formato bastante agotado porque, entre otros motivos, no son una competencia para la <a href="https://www.ama.org/marketing-news/marketings-ethical-line-between-social-media-habit-and-addiction/">máquina de chutes de dopamina</a> que son las redes sociales. El artículo realmente no está terminado, pero lo publico porque quizá sea de interés para alguien. </span>



<a href="http://ForoDeEjemplo.com">ForoDeEjemplo.com</a> es una pequeña comunidad que nace del abandono por parte de los administradores de otras dos comunidades. El hecho de poder contar con usuarios iniciales supone solventar la parte más difícil de una comunidad, superar el dilema del huevo y la gallina.

En la mayoría de las comunidades, por no decir todas, el problema que surje al principio es que no tienes contenido porque no tienes usuarios, y no tienes usuarios porque no tienes contenido, de modo que estás condenado al <i>fake it until you make it</i>, algo que requiere mucho más esfuerzo de lo que pueda parecer a primera vista. Lo he intentado anteriormente, y a menos que estés muy motivado y le metas pasta, es realmente complicado.

<h2>La estructura de los subforos</h2>

Este apartado depende mucho del foro que estés creando. Nosotros lo que hicimos fué copiar la estructura de los foros anteriores, y condensarla un poco. Muchos subforos vacíos no es una buena idea. Es mejor ir abriendo subforos según se considere que hay demanda para ellos.

La idea es no dar sensación visual de falta de actividad. No siempre es posible hacer esto. A veces hay temáticas que es irremediable que tengan su propio subforo, o los temas se perderían en las páginas y los usuarios no tendrían forma de encontrarlos sin el buscador. 

<h2>Los primeros aspectos técnicos</h2>

Con más o menos acierto empezamos con MyBB. Es un paquete bastante tradicional, open source, y que tiene más o menos todo lo que uno esperaría de un foro. Durante los primeros días descubrimos algunos bugs, y también incompatibilidades con Tapatalk, uno de los requisitos que demandaban todos o casi todos los usuarios. Lamentablemente Mybb es minoritario, de modo que no hay mucho que podamos hacer salvo reportar bugs.

Hemos intentado también dejar el aspecto de los plugins al mínimo. En primer lugar, porque mi experiencia me dice que cuando hay problemas es un coñazo andar lidiando con los plugins. Las cosas se rompen siempre en el peor momento, y quizá no tienes la motivación suficiente para pasarte 4 horas revisando por qué una estupidez, irritante pero pequeña, falla.

En segundo lugar el foro está en un hosting compartido, al menos mientras no crezca mucho, de modo que vamos a intentar no impactar mucho en el rendimiento. Dios sabe cómo se programan esos plugins, y quizá un día te encuentras que un plugin que introduce una funcionalidad a la que los usuarios se han acostumbrado, hace inviable la permanencia en el compartido, y por tanto aumentando los costes de mantenimiento, algo que no queremos en un proyecto que ni siquiera sabemos si será monetizable en el futuro.

Del mismo modo, estar en un <i>shared</i> introduce otras limitaciones. Has de buscar algún proveedor de correo transaccional, para los mails de registro, recordatorios de contraseña y demás. Se puede usar PHPMail pero normalmente funciona bastante mal, por no mencionar que es muy probable que acabes en la bandeja de SPAM. Yo tengo una cuenta antigua de Sparkpost que uso para esto. Es un proveedor bastante majo, pero también te servirá Mailgun o cualquier otra.

Mi recomiendación, tanto por lo mencionado con el tema de los plugins, como si estás en una situación similar a la mía, que no eres programador, es usar SMTP para el envío de los mails. SMTP no es <i>fancy</i>, es tosco, pero funciona, y la mayoría de los paquetes de software lo traen por defecto. Va a funcionar, y al usuario tanto le da que envíes los mails por SMTP que conectes por una API.

<h2>El SEO, o buscar que Google te haga caso</h2>

El problema principal es que tienes mucho <i>thin content</i> del que no te puedes deshacer. Siendo un foro, resulta casi imposible diseñar una estructura de enlaces, algo tipo SILO o similar, a menos que coviertas el <i>layout</i> en algo similar a Quora, pero si queramos otorgar funcionalidad a los usuarios y respetar las características de un foro tradicional, entonces no quedan muchas opciones.

Como primera medida, quizá sería buena idea limitar el <i>crawler</i> de Google al contenido. Deshacernos en el <i>robots.txt</i> de todo aquello que no sean <i>threads</i> y sus respuestas. 

En <a href="https://mybb.com/">MyBB</a> el primer elemento que salta a la vista es el <i>modo archivo</i>. Básicamente es una versión del foro ligera, con menos elementos, que carga mucho más rápido, y por tanto es de esperar (y por mi experiencia montando otras comunidades con MyBB lo es) que posicione mejor que la versión original.

Otra cosa que aparece en el <i>Google Webmaster Tools</i> son constantes errores sobre <i>newreply.php, member.php, private.php, search.php y tylsearch.php</i>, de manera que los deshabilitaremos en el archivo <i>robots</i> también.

Para no enrollarnos eternamente, simplemente consultad <a href="https://pastebin.com/Y0VF6Dfr">nuestro archivo <i>robots.txt</i></a>.

Otra decisión que hemos tomado es no usar <i>permalinks</i>. Sé que puede parecer una apuesta muy arriesgada, pero revisando los <i>ranking factors</i> de <a href="https://www.searchmetrics.com/knowledge-base/ranking-factors-media/">Searchmetrics</a>, una empresa en la que tengo cierta confianza, no parece que incluír palabras clave en las URLs sea determinante. Revisando la <i>competencia</i> muchos foros lo hacen, pero sin embargo, Forocoches no. Mi experiencia pasada con otros foros me dice que los permalinks dificultan el trabajo cuando quieres hacer cosas chulas. En definitiva, nos arriesgaremos, y que sea lo que dios quiera.

### SEO Onpage

Qué decir de la plantilla por defecto de MyBB (o en realidad, cualquiera del repositorio oficial). Un desastre en términos de SEO. Los H1 y H2 no aparecen por ningún lado. Esto es un problema, no sólo porque se enfrenta a mi vagancia por modificar toda una plantilla, sino porque pretendía hacer el mínimo de cambios posibles.

Si nos fijamos en Forobeta y en Foro20, las principales diferencias es la utilización de H2 para los títulos de subforos, y H1 para los títulos de los temas (sólo dentro de la URL del tema). Básicamente este es el único cambio que voy a considerar de momento.

En la plantilla por defecto de Mybb, dentro de <i>forumbit_depth2_forum</i> sustituímos:

	&lt;strong&gt;&lt;a href=&quot;{$forum_url}&quot;&gt;{$forum['name']}&lt;/a&gt;&lt;/strong&gt;

Por:

	&lt;h2&gt;&lt;a href=&quot;{$forum_url}&quot;&gt;{$forum['name']}&lt;/a&gt;&lt;/h2&gt;

E incluyendo este código CSS para evitar que los textos se vean muy grandes:


	#cat_1_e h2,
	#cat_13_e h2 {
	font-size: 13px;
	display: inherit;
	}


También dentro de <i>showthread</i> cambiamos:


	&lt;strong&gt;{$thread['threadprefix']}{$thread['subject']}&lt;/strong&gt;


Por:


	&lt;h1&gt;{$thread['threadprefix']}{$thread['subject']}&lt;/h1&gt;


Con el CSS:


	.thead h1 {
	font-size: 13px;
	display: inherit;
	margin-top: 0;
	margin-bottom: 0;
	}


Igualmente será necesario modificar el diseño más adelante, como mínimo la cabecera, para poder aspirar a realizar alguna conversión con los visitantes qe no están registrados. Sin embargo, esta ya no es una cuestión de SEO propiamente dicha, salvo que nos pongamos a debatir sobre la influencia del comportamiento del usuario (o no), en el posicionamiento.

### HTTPS

Google anunció recientemente que las webs que tuviesen formularios y no corriesen sobre <i>https</i> serían penalizadas, de modo que parece imperativo hacerlo. En el hosting compartido que uso tienen instalado AutoSSL, de manera que parte del dolor nos lo saltamos. Simplemente hay que configurar MyBB para que use <i>https</i> para todo. Se puede hacer de forma manual, sustituyendo todas las URLs en MySQL por <i>https://</i>, pero afortunadamente existe <a href="https://community.mybb.com/mods.php?action=view&pid=450">este plugin</a>, que nos ayudará con futuros deslices, ya que en un foro los usuarios están colgando imágenes constantemente. Es necesario apuntar que habrá que usar algún proxy para algunas imágenes, yo concretamente uso <a href="https://images.weserv.nl/">este</a>.

Con el siguiente código en el archivo <i>.htaccess</i> también redirigiremos todo el tráfico desde <i>http</i> a <i>https</i>.


	RewriteEngine On
	RewriteCond %{HTTPS} off
	RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]


<h2>Estrategia de palabras clave y enlaces entrantes</h2>

El <i>linkbuilding</i> de un foro siempre es difícil, porque, como ya comenté antes, hay mucho <i>thin content</i>, y es complicado convertirlo en un sitio de autoridad.

Otras webs lo que han estado haciendo es circunvalando las <i>longtails</i> por las que aquellos SEOs que tienen blogs quisieran competir. Una palabra clave como <i>tengo 20 años y...</i> no tiene a penas interés para un blog, ya que por regla general no va a servir para que el usuario compre nada, ni haya algún tipo de conversión. Quizá aquellos orientados a los antiguos <i>Made for Adsense</i> sigan persiguiendo estas palabras clave, no sé qué tal resultado les dará.

Sin embargo sí puede generar algo de <i>engagement</i>, pero con dos obstáculos importantes. Por un lado, el visitante ha de registrarse, y por otro, aunque haya contenido ya en el foro, volvemos al dilema del huevo y la gallina. Si los usuarios no crean estos temas... bueno, puedes crearlos tú, pero va a ser muy poco natural, y has de ser honesto con los moderadores: Vas a engañar a los usuarios a cambio de generar contenido.

La otra opción es revisar el contenido periódicamente, y modificar ligeramente los títulos y algunos textos para reforzar la concordancia de palabras clave que creas que puede tener un <i>thread</i> o un <i>post</i>.

En el caso de este foro, optaré por la segunda estrategia, no me siento cómodo engañando a los usuarios, y además el riesgo es algo. Relacionaré los enlaces con el contenido del foro. No tiene mucho sentido posicionar la página principal, categorías y demás. También posicionaré los enlaces allí donde tenga sentido para el usuario, que pueda atraer tráfico. Es una definición vaga del objetivo, quizá más adelante ponga algún ejemplo.

Recapitulando:

<ul>
	<li>Hay que generar un lead sin un beneficio claro. Registrarse sobre una vaga promesa de un premio, mientras que en los blogs el premio es inmediato.</li>
	<li>Esperar a que los usuarios generen contenido puede ser complicado, pero la alternativa es engañarlos.</li>
	<li>Revisar los contenidos es laborioso, pero una discusión que surge de forma orgánica apelará mejor a las emociones.</li>
	<li>Los enlaces entrantes deben generar engagement, no estar sólo para el Bot de Google. Muchos de ellos, como consecuencia, serán <i>nofollow</i>.</li>
</ul>

<strong>Entonces, ¿cómo organizar este flujo de trabajo?</strong>

Básicamente, hay dos formas fundamentales de investigar un fenómeno, el método inductivo, y el deductivo. Mezclaremos un poco de ambos.

La idea es, a partir de las categorías del foro, y de un vistazo a los temas de más relevancia (más respuestas, más visitas), generar manualmente un listado de palabras clave a <i>escuchar</i>. Se pueden usar herramientas como <i>Ubersggest, Semrush, Ahrefs, Sistrix</i> y otras para buscar palabras clave relacionadas.

Los temas y mensajes que contengan estas palabras clave se destacan, y se emplaza al administrador y a los moderadores a revisarlos (por ejemplo, creando una entrada en la tabla <i>mybb_privatemessages</i> anunciándoles que hay trabajos pendientes). Una vez revisados, se colocan en un listado, a la espera de recibir un enlace entrante, que ha de ser efectuado también manualmente.

Por el lado contrario vigilaremos los parámetros de búsqueda de <i>Google Search Console</i> para detectar tendencias en palabras clave y reforzarlas. Si algún enlace empieza a posicionarse de forma orgánica dentro de los primeros 20 resultados, se lista para revisión (mejorar la concordancia de palabras clave, el título, densidades, etc).

También se pueden vigilar todos aquellos que tengan un número de visitas o de respuestas que representen un <i>caso atípico</i>, es decir, que sobresalgan de los parámetros promedio de forma considerable, tratar de hacer un análisis de palabras clave sobre ellos, ponderar qué dificultad tiene posicionarlos (hay varias herramientas que pueden aportar este dato).

Los temas que fuesen interesantes, también se colocarían en el listado de espera que mencionamos antes.

<strong>¿Cómo diseñar estos listados?</strong>

Necesitamos organizar las siguientes tablas:

<ul>
	<li><strong>Tabla de palabras clave primarias:</strong> Aquellas palabras clave que se deriven de las categorías del foro, y sus palabras clave relacionadas.</li>

	<li><strong>Tabla de coincidencias:</strong> Aquellos temas que coincidan con las <i>keywords</i> primarias y tengan algo de potencial, aparecerán aquí.</li>

	<li><strong>Tabla de casos atípicos:</strong> Midiendo las respestas, las visitas y la longitud promedio de los mensajes, listar todos aquellos que se desvíen del promedio a partir de un parámetro dado (+50% de visitas, por ejemplo)..</li>

	<li><strong>Tabla Google Search:</strong> Aquellas tendencias que se detecten en Google Search Console se volcarán aquí.</li>

	<li><strong>Tabla de actuaciones:</strong> El resultado de filtrar todas las tablas anteriores es volcado en esta tabla. Se especifica la URL, las palabras clave a reforzar, si requiere o no enlaces, y si alguien ha actuado sobre el registro, o no.</li>
</ul>

Es mucho trabajo para realizar de forma manual, es cierto. También es necesario establecer criterios de selección, pero eso lo dejo al gusto de cada uno.

En mi caso particular, organizaré el flujo y las reglas con <a href="http://knime.com">Knime</a> y MySQL. Se puede organizar con cualquier otra aplicación con capacidades "ETL", y probablemente las haya mejores que <i>Knime</i>, pero para este caso es más que suficiente. En cuanto a la selección de la base de datos, normalmente prefiero trabajar con Postgre (no hay que pensar en motores ni historias), pero de esta forma ya aprovechamos que tenemos un servidor MySQL corriendo la base de datos del foro, y para el volumen de datos que vamos a manejar, llega de sobra, ya que las transformaciones y los cálculos se realizan en local.

Otra ventaja que tiene este programa es que, de ser el caso, en el futuro nos permitiría experimentar con <i>machine learning</i> con mucha facilidad, pero de momento no veo claro el caso de uso.

<h2>Otras cosas que sería interesante medir</h2>

Sería interesante medir el embudo de conversión desde que un visitante llega al dominio. Listando el número de clicks en el botón de registro desde la URL de entrada, y la URL desde donde se hace el click, se pueden sacar datos interesantes, pero esto requiere algo de <i>Javascript</i>, que de momento vamos a dejar de lado. Además, los temas y los mensajes no están diseñados como landings, de forma que sería difícil determinar por qué unos temas atraen más que otros, o cómo mejorar la conversión modificándolos.

Otras métricas interesantes están más relacionadas con el rendimiento del mismo, como históricos sobre de mensajes por día, usuarios que postean por día, registros por día, promedio de posts por día de la semana y hora, etc. La mayoría de estas métricas estaría bien segmentarlas por sexo, con motivo del apartado siguiente.

<h2>¿Qué audiencia queremos conseguir?</h2>

La idea inicial era conseguir un foro equilibrado demográficamente, tanto en edad como en sexo. El tema de la edad es complicado, ya que el administrador del antiguo foro cerró durante mucho tiempo los registros, de modo que la misma comunidad fué, simplemente, cumpliendo años. Ahora mismo nos encontramos cerca de la treintena casi todos.

No aspiramos a atraer usuarios mucho más mayores, porque mi experiencia me dice que el porcentaje de ellos que usan foros es muy inferior, y tampoco garantizan el relevo generacional, ni tienen la inocencia y la experiencia necesaria para activar determinadas categorías del foro, asi que, para rangos de edad menores sí tendremos que esforzarnos.

En temas de sexo, hay un problema. Aunque empezamos con aproximadamente la misma cantidad de usuarios registrados para ambos sexos, las mujeres participan sustancialmente menos que los hombres. 

Esta cuestión no es única de ForoDeEjemplo, sino que afecta a la mayoría de los sitios que requieren participación, ya sea agregadores de noticias, comentarios en blogs, etc. Quizá hay algunas excepciones como foros de moda o nichos similares. En general se podría decir que las mujeres participan menos, y cuando lo hacen se ciñen bastante a <i>temas de mujeres</i>. Este es un cuadro con la participación por subforo, también al poco tiempo de empezar:

<center><img src="https://i.imgur.com/xkK9mPa.png"></center>

Asi que, repito, si el objetivo es tratar de tener un foro equilibrado demográficamente, el esfuerzo ha de centrarse en gente jóven, y en mujeres.

<h3>¿Cómo adquirir a estos usuarios?</h3>

Si obviamos los foros con temáticas de nicho, lo que podemos observar en la mayoría de los foros generalistas adquieren a sus usuarios de la siguiente forma:

<ol>
	<li>Usuarios jóvenes, a veces incluso por debajo de la mayoría de edad, que buscan en Google dudas que les asaltan, y encuentran los post de un foro posicionados en Google. Suelen ser dudas de carácter sentimental o sexual. Llegan a través de Google con búsquedas tipo "Tengo 18 años y..."</li>
	<li>Gente que busca charlar o quedar con otra gente de su ciudad o su comunidad. También suelen ser jóvenes. Llegan a través de Google.</li>
	<li>Búqueda de información sobre temáticas concretas, sobre todo cuando se buscan opiniones. Aquí el problema suele ser la fuerte competencia de los blogs. Un ejemplo de este caso serían los foros de Facilísimo.</li>
	<li>Por recomendaciones, a veces a través de conocidos, a veces a través de otros foros. El caso más paradigmático es Forocoches, aunque también tienen muchos temas posicionados.</li>
</ol>

Las tres primeras opciones se realizan a través de posicionamiento. Ya he descrito más o menos el flujo de trabajo para este caso, pero eso no quita que sea complicado que un foro, con los condicionantes que he ido describiendo, sea capaz de posicionarse correctamente. Normalmente sucede para <i>long tails</i> con poco tráfico y un potencial limitado de crecimiento para el foro. Quizá exista alguna <i>keyword</i> que sea como el santo grial en términos de conversiones, pero en mi experiencia con otros proyectos, eso es poco común, y en cualquier caso no dura demasiado.

El cuarto punto puede hacerse colocando enlaces en "lugares estratégicos", más pensados en captar la atención del visitante, que de la indexación en google. Uno de estos lugares puede ser, por ejemplo, el menú de cabecera de un blog de moda, donde se apunta al subforo de moda o a una landing de esta misma temática.

También podríamos adquirir tráfico a través de PPC, pero es un canal tan usado que habría que estudiar bien qué palabras pueden tener conversión, y sobre qué plataformas, porque Adsense y Facebook están "muy gastadas", y en otros sitios te arriesgas a despilfarrar el presupuesto con los bots.

Y por última, técnicas de guerrilla que lamentablemente no puedo comentar en público (nada ilegal, lo prometo). La efectividad de estas técnicas es un poco como la tómbola, pero a veces funcionan bien. 


