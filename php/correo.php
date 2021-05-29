<?php

	$action = $_POST['action'];
	if($action == "Correo"){
		EnviarCorreo();
	}

  function EnviarCorreo(){
    $nombre = $_POST['usuario'];
    $para = $_POST['correo'];
  	/*$para = 'angel.66.mendoza@gmail.com';*/
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
    '<body style="display: flex !important; justify-content: center !important;">'.
    '<table style=" font-family: Arial; font-size: 22px; id="tabla" style=" max-width: 400px;'.
    ' border: none; margin: 0px; padding: 0px; border-collapse: collapse; border:none; background-color: #0c0c0c; border: solid white 1px;">'.
    '<tr>'.
    '<td style="margin: 0px; padding: 0px; background-color: #000; border:none; text-align: center; width: 100%;">'.
    '<img src="https://programacionmultimedia1635986.herokuapp.com/img/logo.png"></td>'.
    '</tr>'.
    '<tr>'.
    '<td class="saludo" style="margin: 0px; padding: 0px; border:none; font-size:1.5em; background-color: #0c0c0c; text-align: center; width: 100%; color: #fff; padding-top: 200px;">Hola</td>'.
    '</tr>'.
    '<tr>'.
    '<td style="text-align: center; width: 100%; color: #2085B8; border:none; height: 100px; background-color: #0c0c0c; font-size:1.5em;" class="nombre">'.$nombre.'</td>'.
    '</tr>'.
    '<tr>'.
    '<td style="text-align: center; width: 100%; background-color: #0c0c0c; color:#fff; padding-bottom: 100px; font-size:1.5em; height: 200px;" class="mensaje">Bienvenido y gracias por registrarte en nuestra pagina de CompucaliTVPlus.com</td>'.
    '</tr>'.
    '<tr>'.
    '<td style="background-color: #000; text-align:center; color: #fff;" class="despedida">'.
    '<label>Copyright 2010 - 2021</label><br>'.
    '<label>www.compucalitvPLUS.com</label><br>'.
    '<label>Mexico, Nuevo Leon</label>'.
    '</td>'.
    '</tr>'.
    '</table>'.
    '</body>'.
    '</html>';
    $cabeceras = 'MIME-Version: 1.0' . "\r\n";
  	$cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
  	$cabeceras .= 'From:CompucaliTVPlus';

  	$enviado = mail($para, $titulo, $mensaje, $cabeceras);

  	if ($enviado)
  	  echo 'Email enviado correctamente';
  	else
  	  echo 'Error en el envío del email';
  }

?>