<?php
	include 'conexion.php';

	$action = $_POST['action'];

	switch ($action) {

		case 'Login':
			Login();
		break;

		case 'Busqueda':
			Busqueda();
		break;

		case 'Registro':
			Registro();
		break;

		case 'Destacado':
			Destacado();
		break;

		case 'Reciente':
			Reciente();
		break;

		case 'Lectura':
			Ver();
		break;

		case 'Reporte':
			GenerarReporte();
		break;
	}


		function Login(){
		$usuario = $_POST['user'];
		$password = $_POST['pass'];
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

		function Ver(){
			try {
			$clave = $_POST['clave'];
			$tipo = $_POST['tipo'];
			$conexion = Conectar();
			$sentencia = $conexion->prepare("CALL SP_Lectura(?,?)");
			$sentencia->bind_param('ss', $clave, $tipo);
			$sentencia->execute();

			$resultado = $sentencia->get_result();
			while( $r = $resultado->fetch_assoc()) {
			                $rows[] = $r;
			         }                    
			echo json_encode($rows,JSON_UNESCAPED_UNICODE);     

			$sentencia->close();
			$conexion->close();
			//tipo de procedimiento a llamar
			} catch (Exception $e) {
				echo $e->getMessage();
			}
			
		}

		function Destacado(){
			$opcion = $_POST['opcion'];

		$conexion = Conectar();
		$sentencia = $conexion->prepare("CALL SP_Destacado(?)");
		$sentencia->bind_param('s', $opcion);
		$sentencia->execute();

		$resultado = $sentencia->get_result();
		while( $r = $resultado->fetch_assoc()) {
		                $rows[] = $r;
		         }                    
		echo json_encode($rows,JSON_UNESCAPED_UNICODE);     

		$sentencia->close();
		$conexion->close();
		}

		function Reciente(){
		$opcion = $_POST['opcion'];
		$conexion = Conectar();
		$sentencia = $conexion->prepare("CALL SP_Reciente(?)");
		$sentencia->bind_param('s', $opcion);
		$sentencia->execute();
		
		$resultado = $sentencia->get_result();
		while( $r = $resultado->fetch_assoc()) {
		                $rows[] = $r;
		         }                    
		echo json_encode($rows,JSON_UNESCAPED_UNICODE);     
		
		$sentencia->close();
		$conexion->close();
		}

		function Registro(){
		$user = $_POST['user'];
		$email = $_POST['email'];
		$pass = $_POST['pass'];
		$sentencia = $conexion->prepare("CALL SP_Registro(?,?,?)");
		$sentencia->bind_param('sss', $user, $email, $pass);
		$sentencia->execute();

		$resultado = $sentencia->get_result();
		while( $r = $resultado->fetch_assoc()) {
		                $rows[] = $r;
		         }                    
		echo json_encode($rows,JSON_UNESCAPED_UNICODE);     

		$sentencia->close();
		$conexion->close();
		}

		function GenerarReporte(){
			
			$usuario = $_POST['idusuario'];
			$articulo = $_POST['idelemento'];
			$conexion = Conectar();
			$sentencia = $conexion->prepare("CALL SP_AltaReporte(?,?)");
			$sentencia->bind_param('ss', $usuario, $articulo);
			$sentencia->execute();

			$resultado = $sentencia->get_result();
			while( $r = $resultado->fetch_assoc()) {
			                $rows[] = $r;
			         }                    
			echo json_encode($rows,JSON_UNESCAPED_UNICODE);     

			$sentencia->close();
			$conexion->close();
		}
/**/
?>