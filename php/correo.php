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
    $mensaje='<html>'.
    '<head>'.
    '<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">'.
    '<style type="text/css">'.
      '*{'.
        'margin: 0px;'.
        'padding: 0px;'.
        'box-sizing: border-box;'.
      '}'.
      '.color-fuente-1{'.
        'color: #ffffff;'.
      '}'.
      '.color-fuente-4{'.
        'color: #2085B8;'.
      '}'.
      '.fuente-1{'.
       'font-family: Arial;'.
      '}'.
      '.cuerpo-2{'.
        'font-size: 22px;'.
      '}'.
      '.cuerpo-3{'.
        'font-size: 20px;'.
      '}'.
      '.subtitulo-1{'.
        'font-size: 12px;'.
      '}'.
      '.contenedor{'.
        'display:flex;'.
        'flex: 1 1 auto;'.
        'background-color: skyblue;'.
      '}'.
      '.correo{'.
        'display: flex;'.
        'flex: 1 1 auto;'.
        'flex-flow: column;'.
        'max-width: 500px;'.
        'height: 625px;'.
        'align-self: center;'.
      '}'.
      '.correo-logo{'.
        'display: flex;'.
        'width: 100%;'.
        'height: 15%;'.
        'background-color: #000;'.
        'justify-content: center;'.
        'overflow: hidden;'.
      '}'.
      '.correo-cuerpo{'.
        'display: flex;'.
        'height: 70%;'.
        'width: 100%;'.
        'flex-flow: column;'.
        'justify-content: center;'.
        'background-color: #0c0c0c;'.
      '}'.
      '.correo-footer{'.
        'display: flex;'.
        'background-color: #000;'.
        'height: 15%;'.
        'width: 100%;'.
      '}'.
      '.cuerpo-titulo, .cuerpo-usuario, .cuerpo-texto, .correo-footer{'.
        'width: 100%;'.
        'display: flex;'.
        'justify-content: center;'.
        'text-align: center;'.
      '}'.
      '.correo-footer{'.
        'flex-flow: column;'.
        'align-items: center;'.
      '}'.
      '.correo-footer > label{'.
      'margin-top: 10px;'.
      '}'.
      '.cuerpo-usuario > label{'.
      'margin:20px;'.
      '}'.
      '@media (max-width: 500px){'.
      '.contenedor{'.
      'width: 100%;'.
      '}'.
      '.correo{'.
      'width: 100%;'.
      '}'.
    '}'.
    '</style>'.
    '</head>'.
    '<body>'.
    '<div class="contenedor">'.
    '<div class="correo">'.
    '<div class="correo-logo"><img src="https://galeriadetiromi.000webhostapp.com/styles/logo.PNG"></div>'.
    '<div class="correo-cuerpo">'.
    '<div class="cuerpo-titulo">'.
    '<label class="color-fuente-1 fuente-1 cuerpo-2">Hola!</label></div>'.
    '<div class="cuerpo-usuario">'.
    '<label class="color-fuente-4 fuente-1 cuerpo-2">Nombre de Usuario</label></div>'.
    '<div class="cuerpo-texto">'.
    '<label class="color-fuente-1 fuente-1 cuerpo-3">Bienvenido y gracias por registrarte en nuestra pagina de CompucaliTVPlus.com</label></div>'.
    '</div>'.
    '<div class="correo-footer">'.
    '<label class="fuente-1 color-fuente-1 subtitulo-1">Copyright 2010 - 2021</label>'.
    '<label class="fuente-1 color-fuente-1 subtitulo-1">www.compucalitvPLUS.com</label>'.
    '<label class="fuente-1 color-fuente-1 subtitulo-1">Mexico, Nuevo Leon</label>'.
    '</div>'.
    '</div>'.
    '</div>'.
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