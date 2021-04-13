<?php
	include 'conexion.php';

	$action = $_POST['action'];

	if ($action == "Prueba")
		Prueba();
	else
		if($action == "Catalogo")
			Catalogo();
		else
		if($action == "Login")
			Login();
		else
			if($action == "Busqueda")
				Busqueda();


		if($action == "Registro"){
			$user = $_POST['user'];
			$pass = $_POST['pass'];
			$email = $_POST['email'];
			RegistroUsuario($user, $pass, $email);
		}		
		
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

	function Catalogo(){
		$conexion = Conectar();
		$sentencia = $conexion->prepare("CALL sp_Catalogo");
		$sentencia->execute();

		$resultado = $sentencia->get_result();
		while( $r = $resultado->fetch_assoc()) {
		                $rows[] = $r;
		         }                    
		echo json_encode($rows,JSON_UNESCAPED_UNICODE);     

		$sentencia->close();
		$conexion->close();
	}


	function Login(){
		$usuario = $_POST['user'];
		$password = $_POST['pass']; // La contraseña es case sensity debido a la encriptacion
		/*
		$usuario = "IngeRocket";
		$password = "IngeRocket"; */ 
		$conexion = Conectar();
		$sentencia = $conexion->prepare("CALL SP_Login(?,?)");
		$sentencia->bind_param('ss', $usuario, $password);
		$sentencia->execute();

		$resultado = $sentencia->get_result();
		while( $r = $resultado->fetch_assoc()) {
		                $rows[] = $r;
		         }                    

		echo json_encode($rows,JSON_UNESCAPED_UNICODE);     

		$sentencia->close();
		$conexion->close();
		
		}

		function Busqueda(){

		/* 1 Pelicula, 2 Serie, 3 Juego, 4 Programa, 5 Todas*/
		$titulo = $_POST['titulo'];
		$categoria = $_POST['categoria'];
		
		$conexion = Conectar();
		$sentencia = $conexion->prepare("CALL SP_Busqueda(?,?)");
		$sentencia->bind_param('ss', $titulo, $categoria);
		$sentencia->execute();

		$resultado = $sentencia->get_result();
		while( $r = $resultado->fetch_assoc()) {
		                $rows[] = $r;
		         }                    

		echo json_encode($rows,JSON_UNESCAPED_UNICODE);     

		$sentencia->close();
		$conexion->close();
		
		}
/*
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
*/
?>