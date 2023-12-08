---
template: post

title: Instalar DuckDNS en Alpine Linux

description: Pasos para tonticos y olvidadizos como yo

comments: true

date: 2022-11-28

---

<div style="background-color: lightgreen; display: block; padding: 1em;">
El artículo lo escribo partiendo de mis conocimientos, asi que hay apartados que te pueden parecer poco desarrollados. Quizá te pueda ayudar si me lo comentas en @iagovar (twitter).
<br><br>
Asume que ya tienes una cuenta en DuckDNS y que ya has instalado Alpine. Una guía para instalación <a href="https://iagovar.com/sysadmin/instalar-gitea-vm-alpine-linux">aquí</a>.
</div>

1. Instalamos CURL con `apk add curl`.

2. Creamos el directorio ~/duckdns con `mkdir ~/duckdns`.

3. Creamos un archivo *duck.sh* dentro del nuevo directorio con `vi ~/duckdns`.

4. Hay que añadir el siguiente token al archivo con VI, naturalmente con los datos de tu dominio:

	````
	echo url="https://www.duckdns.org/update?domains=exampledomain&token=a7c4d0ad-114e-40ef-ba1d-d217904a50f2&ip=" | curl -k -o ~/duckdns/duck.log -K -
	````

	Esto se puede complicar bastante, dependiendo del cliente de SSH que uses. Desde Windows PowerShell en Windows 10, simplemente entrando en el modo edición de VI con `i`, pulsando botón derecho del ratón, se pegará el código.

	Luego es cuestión de salir con `ESC` y luego `:wq` para que se guarden los cambios.

	Un `cat duck.sh` debería mostrar el contenido del archivo que acabamos de guardar.

5. Cambiamos los permisos del archivo con `chmod 700 duck.sh`

6. Hora de meterlo en un CRON Job. Como no manejo CRON con frecuencia, [este enlace](https://linuxhandbook.com/crontab/) explica bien todo lo que hay que saber al respecto.

	- Meteremos el trabajo en el CRONTAB de admin asi que ejecutamos `sudo crontab -e`.

	- Pegamos un comentario y el código del trabajo:

	````
	# Ejecutamos acutalizacion de duckdns cada 5 mins
	*/5 	* 		* 		* 		* 		/home/miUsuario/duckdns/duck.sh >/dev/null 2>&1
	* 		*/12 	* 		* 		* 		rm -rf /home/miUsuario/duckdns/duck.log >/dev/null 2>&1
	````

	De esta forma actualizaremos el cron cada 5 minutos (por si hay algún corte de conexión), y borraremos el log cada 12h, por si acaso se nos olvida y crece a lo loco.

	Si no te aclaras o te da pereza existe un [crontab generator](https://crontab-generator.org/) que es muy útil para vagos.