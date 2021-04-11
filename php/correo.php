<?php

	$action = $_POST['action'];
	if($action == "Correo"){
		EnviarCorreo();
	}

  function EnviarCorreo(){
  	$para = 'julio.97.mendoza@gmail.com';
  	$titulo = 'Bienvenido a CompucaliTVPlus';
/*  	$mensaje = '<html>'.
  		'<head><title>Email con HTML</title></head>'.
  		'<body><h1>Email con HTML</h1>'.
  		'Esto es un email que se envía en el formato HTML'.
  		'<hr>'.
  		'Enviado por mi programa en PHP'.
      ' "comillas dobles" '.
  		'</body>'.
  		'</html>';
*/  	
    $mensaje='<!DOCTYPE html>'.
    '<html>'.
    '<head>'.
    '<title></title>'.
    '</head>'.
    '<style type="text/css">'.
    '*{'.
    ' border: 0px;'.
    ' margin: 0px;'.
    '}'.
    'body{'.
    ' display:flex;'.
    ' justify-content: center;'.
    ' font-family: Arial;'.
    ' font-size: 22px;'.
    '}'.
    'table{'.
    ' max-width: 80%;'.
    ' border: none;'.
    ' margin: 0px;'.
    ' padding: 0px;'.
    ' border-collapse: collapse;'.
    ' background-color: yellow;'.
    ' background-color: #0c0c0c;'.
    '}'.
    'td{'.
    '  margin: 0px;'.
    '  padding: 0px;'.
    '  background-color: #0c0c0c;'.
    '  text-align: center;'.
    '  width: 100%;'.
    '}'.
    'td > img {'.
    ' width: 100%;'.
    '}'.
    '.nombre{'.
    ' color: #2085B8;'.
    '}'.
    '.saludo, .mensaje, .despedida {'.
    '  color: #fff;'.
    '}'.
    '.saludo{'.
    ' padding-top: 200px;'.
    '}'.
    '.nombre{'.
    'height: 100px;'.
    '}'.
    '.mensaje{'.
    ' padding-bottom: 100px;'.
    '  height: 200px;'.
    '}'.
    '.despedida{'.
    '  background-color: #000000;'.
    '}'.
    '</style>'.
    '<body>'.
    '<table id="tabla" style="width:100%">'.
    '<tr>'.
    '<td><img src="https://galeriadetiromi.000webhostapp.com/styles/logo.PNG"></td>'.
    '</tr>'.
    '<tr>'.
    '<td class="saludo">Hola</td>'.
    '</tr>'.
    '<tr>'.
    '<td class="nombre">Nombre de usuario</td>'.
    '</tr>'.
    '<tr>'.
    '<td class="mensaje">Bienvenido y gracias por registrarte en nuestra pagina de CompucaliTVPlus.com</td>'.
    '</tr>'.
    '<tr>'.
    '<td class="despedida">'.
    '<label class="fuente-1 color-fuente-1 subtitulo-1">Copyright 2010 - 2021</label><br>'.
    '<label class="fuente-1 color-fuente-1 subtitulo-1">www.compucalitvPLUS.com</label><br>'.
    '<label class="fuente-1 color-fuente-1 subtitulo-1">Mexico, Nuevo Leon</label>'.
    '</td>'.
    '</tr>'.
    '</table>'.
    '</body>'.
    '</html>';
    $cabeceras = 'MIME-Version: 1.0' . "\r\n";
  	$cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
  	$cabeceras .= 'From: CompucaliTVPlus';

  	$enviado = mail($para, $titulo, $mensaje, $cabeceras);

  	if ($enviado)
  	  echo 'Email enviado correctamente';
  	else
  	  echo 'Error en el envío del email';
  }

?>