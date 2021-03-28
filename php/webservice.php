<?php
	include 'conexion.php';

	$action = $_POST['action'];

	switch($action){
		case "Registro":{
			$user = $_POST['user'];
			$pass = $_POST['pass'];
			$email = $_POST['email'];
			RegistroUsuario($user, $pass, $email);
		}
		default:
			{
				alert("Hola");
			}
	}	


	function RegistroUsuario(usuario, password, email){
		
	}

?>