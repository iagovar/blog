<!DOCTYPE html>
<html>
<head>
	<title>Iagovar.com - Prueba</title>
</head>
<body>
<img src="./cat.jpeg">
	<?php
		// Obtener la dirección IP del visitante
		$ip = $_SERVER['REMOTE_ADDR'];
		
		// Archivo de texto donde se guardarán las direcciones IP, operadores y ubicaciones
		$archivo = 'ips.txt';
		
		// Llamada a la API de geolocalización de IP para obtener la ubicación utilizando cURL
		$apiKey = 'ecbd212b64de7196424fcd78add678b2'; // Reemplaza esto con tu propia clave API
		$url = 'http://ipapi.com/api/'.$ip.'?access_key='.$apiKey.'&output=json';
		
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		$respuesta = curl_exec($ch);
		curl_close($ch);
		
		$datos = json_decode($respuesta, true);
		$operador = $datos['org'];
		$ubicacion = $datos['city'] . ', ' . $datos['region_name'] . ', ' . $datos['country_name'];
		
		// Agregar la dirección IP, el operador y la ubicación al archivo de texto
		file_put_contents($archivo, $ip . ',' . $operador . ',' . $ubicacion . "\n", FILE_APPEND);
		
		// Mostrar un mensaje de confirmación
		//echo 'La dirección IP ' . $ip . ', el operador ' . $operador . ' y la ubicación ' . $ubicacion . ' han sido guardados en el archivo ' . $archivo;
	?>
</body>
</html>


