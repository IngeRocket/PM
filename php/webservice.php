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

		case 'Principal':
			Principal();
		break;

		case 'Lectura':
			Ver();
		break;

		case 'Reporte':
			GenerarReporte();
		break;

		case 'Reportes':
			ListaReportes();
		break;

		case 'SolucionReporte':
			SolucionReporte();
		break;
	}


		function Login(){
			$conexion = Conectar();
			$usuario = $_POST['user'];
			$password = $_POST['pass'];
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
			$conexion = Conectar();
			$titulo = $_POST['titulo'];
			$categoria = $_POST['categoria'];
			$filtro = $_POST['filtro'];
			$sentencia = $conexion->prepare("CALL SP_Busqueda(?,?,?)");
			$sentencia->bind_param('sss', $titulo, $categoria, $filtro);
			$sentencia->execute();

			$resultado = $sentencia->get_result();
			if (mysqli_num_rows ( $resultado ) == 0){
				return null;
			}else{
				//$resultado = $sentencia->get_result();
				while( $r = $resultado->fetch_assoc()) {
			                $rows[] = $r;
			         }                    
				echo json_encode($rows,JSON_UNESCAPED_UNICODE);     

			}
			
			$sentencia->close();
			$conexion->close();
		}

		function Ver(){
			try {
			$conexion = Conectar();
			$clave = $_POST['clave'];
			$tipo = $_POST['tipo'];
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

		function Principal(){
			$conexion = Conectar();
			$sentencia = $conexion->prepare("CALL SP_Principal()");
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
			$conexion = Conectar();
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
			$conexion = Conectar();
			$usuario = $_POST['idusuario'];
			$articulo = $_POST['idelemento'];
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

		function ListaReportes(){
			$conexion = Conectar();
			$articulo = $_POST['articulo'];
			$opcion = $_POST['opcion'];
			$sentencia = $conexion->prepare("CALL SP_ConsultaReporte(?,?)");
			$sentencia->bind_param('ss', $articulo, $opcion);
			$sentencia->execute();
			$resultado = $sentencia->get_result();
			while( $r = $resultado->fetch_assoc()) {
			                $rows[] = $r;
			         }                    
			echo json_encode($rows,JSON_UNESCAPED_UNICODE);     
			$sentencia->close();
			$conexion->close();
		}
	function SolucionReporte(){
		$conexion = Conectar();
		$articulo = $_POST['articulo'];
		$sentencia = $conexion->prepare("CALL SP_SolucionReporte(?)");
		$sentencia->bind_param('s', $articulo);
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