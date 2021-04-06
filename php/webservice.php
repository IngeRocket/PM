<?php
	include 'conexion.php';

	$action = $_POST['action'];

	if ($action == "Prueba") {
		Prueba();
	}

/*
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
		case "Prueba":{
			Prueba();
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

	// FUNCIONES DE CARGA DE ELEMENTOS DE INDEX	
	function CargarPeliculas(){

	}
	function CargarSeries(){

	}
	function CargarJuegos(){

	}
	function CargarProgramas(){

	}
	
	//	BUSCADOR DE INDEX	
	function RealizarBusqueda(opcion, nombre){
		// Opcion: numero 1 - 4 
	}
*/
	function Prueba(){
		$conexion = Conectar();
		$sentencia = $conexion->prepare("CALL sp_prueba");
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