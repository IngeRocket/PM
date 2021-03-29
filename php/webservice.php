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
		case "Login":{
			$user = $_POST['user'];
			$pass = $_POST['pass'];
			RegistroUsuario($user, $pass);
		}
		default:
			{
				alert("Hola");
			}
	}	


	function RegistroUsuario(usuario, password, email){
		$sentencia = $conexion->prepare("CALL SP_Registro(?,?,?)");
		$sentencia->bind_param('sss', usuario, email, password);
		$sentencia->execute();

		$resultado = $sentencia->get_result();
		while( $r = $resultado->fetch_assoc()) {
		                $rows[] = $r;
		         }                    
		echo json_encode($rows,JSON_UNESCAPED_UNICODE);     

		$sentencia->close();
		$conexion->close();
	}


	function Login(usuario, password){
		$sentencia = $conexion->prepare("CALL SP_Login(?,?)");
		$sentencia->bind_param('ss', usuario, password);
		$sentencia->execute();

		$resultado = $sentencia->get_result();
		while( $r = $resultado->fetch_assoc()) {
		                $rows[] = $r;
		         }                    
		echo json_encode($rows,JSON_UNESCAPED_UNICODE);     

		$sentencia->close();
		$conexion->close();
	}

?>