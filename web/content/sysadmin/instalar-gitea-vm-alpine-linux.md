---
template: post

title: Instalar Gitea en una VM de Alpine Linux

description: Pasos para tonticos y olvidadizos como yo

comments: true

date: 2022-11-20

---

<div style="background-color: lightgreen; display: block; padding: 1em;">
Tengo un servidor <a href="https://www.proxmox.com/">Proxmox</a> y escribo esto para acordarme de todos los pasos para una instalación básica de Gitea.
<br><br>
El artículo lo escribo partiendo de mis conocimientos, asi que hay apartados que te pueden parecer poco desarrollados. Quizá te pueda ayudar si me lo comentas en @iagovar (twitter)
</div>

1. Descarga la última versión de Alpine para VMs, en este caso lo haremos con **alpine-virt-3.9.6-x86_64.iso** de [aquí](https://dl-cdn.alpinelinux.org/alpine/v3.9/releases/x86_64/).

2. Instalar Alpine Linux en la VM. Hay que subir la ISO a Proxmox y cargarlo en el DVD Drive.

	La documentación de Alpine para la instalación está [aquí](https://wiki.alpinelinux.org/wiki/Installation). Es preferible usar `setup-alpine` pero la documentación no coincide mucho con lo que muestra el instalador. Hay que configurar la pila IP, idioma, SSH, etc.

	**Nota:** *Necesitas el repo community para lo siguiente, mira el punto 4.* 

	Alpine no viene con *sudo* pero se puede instalar desde root con *su* y `apk add sudo` y metiendo el usuario con `visudo` en el apartado de `## User privilege specification` con una nueva línea `mi_usuario ALL=(ALL) ALL`. Más info [aquí](https://ostechnix.com/add-delete-and-grant-sudo-privileges-to-users-in-alpine-linux/)

	Como tengo poca costumbre con VI, recordar los comandos:

	- `i`: Meterse en el modo edición.
	- `ESC`: Salir del modo edición.
	- `:q`: Una vez fuera del modo edición, salir sin guardar cambios.
	- `:wq`: Una vez fuera del modo edición, salir guardando cambios.

3. En la [Guía de instalación de Gitea de Alpine](https://wiki.alpinelinux.org/wiki/Gitea) se indica instalar con MySQL, pero la vida es muy corta, asi que usaremos SQLite 3, y habrá que instalarlo primero con `apk add sqlite` (ya instala la última estable).

	Actualización: La guía está desactualizada.

4. Gitea está en el repo community de Alpine, asi que hay que habilitarlo editando `/etc/apk/repositories` con VI. La línea del repo community ya vendrá en el archivo, simplemente está comentada, hay que descomentarla y guardar los cambios.

5. Instalamos Gitea con `apk add gitea` y Bash con `apk add bash`, ya que Gitea lo necesitará para funcionar y Alpine Linux viene con Ash por defecto, sin Bash.

6. Crearemos el directorio `/etc/gitea` y le daremos permisos con `chmod 777 /etc/gitea` (**Esto es una mala práctica, ojo**).

	[Aquí](https://docs.gitea.io/en-us/config-cheat-sheet/) podemos ver algunas configuraciones previas, por si queremos algo más.

	El instalador de Gitea te obligará a usar el usuario `gitea` que no es root, pero habiendo creado el directorio y habiéndole dado permisos ya no debería quejarse.

7. Añadimos el servicio de gitea al boot de la VM. Puesto que Alpine usa [OpenRC](https://wiki.alpinelinux.org/wiki/OpenRC) en lugar de Systemd usaremos `sudo rc-update add gitea default`.

	Si por algún casual le han cambiado el nombre al servicio, `sudo service --list` debería mostrar todos los disponibles.

8. Podemos arrancar el servicio con `sudo service gitea start` y tendremos la url del instalador en el puerto 3000 de la IP de la VM para gestionar la configuración inicial. Reiniciar la VM también debería arrancar el servicio ahora.

	Para comprobar los servicios que están corriendo podemos usar el comando `rc-status`, aunque con visitar la URL es suficiente.