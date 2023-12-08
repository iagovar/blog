---
template: post

title: Instalar ZeroTier en Alpine Linux

description: Pasos para tonticos y olvidadizos como yo

comments: true

date: 2023-03-30

---

<div style="background-color: lightgreen; display: block; padding: 1em;">
El artículo lo escribo partiendo de mis conocimientos, asi que hay apartados que te pueden parecer poco desarrollados. Quizá te pueda ayudar si me lo comentas en @iagovar (twitter).
<br><br>
Asume que ya tienes una cuenta en ZeroTier y que ya has instalado Alpine.
</div>


1. Habilitamos el repositorio `Community` de alpine, donde se encuentra el paquete `zerotier-one`.

	Para esto hay que editar `/etc/apk/repositories` y descomentar la línea del repo community.

	Recuerda, en VI: `i` para editar. `ESC` para salir del modo de edición. `:wq` para salir escribiendo los datos.

	Después ejecutaremos un `apk update` y listo.

2. Instalamos el paquete con `apk add zerotier-one`.

3. Configuramos el servicio para que se inicie por defecto al arranque. Hay que recordar que Alpine usa [OpenRC](https://wiki.alpinelinux.org/wiki/OpenRC) así que tendremos que usar `rc-update add zerotier-one default` para ponerlo en el nivel de ejecución que permite esto.

	Esto es necesario porque se instala en el nivel de ejecución manual, por defecto.

	Reiniciamos el equipo, y al ejecutar `zerotier-cli info` debería escupirnos algo como `200 info id-del-equipo 1.10.2 ONLINE`.

	Si esto no es así, o has hecho algo mal, o algo ha cambiado en Alpine o Zerotier desde la publicación de este artículo.

5. Ahora usaremos la herramienta de `zerotier-cli` para agregar nuestra red, con `zerotier-cli join el-id-de-mi-network`.

	Vete al panel de ZeroTier y comprueba que todo está bien. Es posible que tengas que autorizar la conexión, o no funcionará.

	Si decides hacer cambios de IPs te recomiendo hacer un `zerotier-cli leave el-id-de-mi-network`, reiniciar el equipo, y luego volve a entrar en tu red.


ZeroTier tarda un poco en reaccionar al agregar una red, asi que no te desesperes si haces ping a otros equipos de tu red y no responden, es posible que tengas que esperar un poco.