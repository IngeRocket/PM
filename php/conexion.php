<?php
	function Conectar(){
		$databasehost = "127.0.0.1";	
		$databaseuser = "root";
		$databasepass = "root";
		$databasename = "pm_proyecto";

		$conexion = new mysqli($databasehost, $databaseuser, $databasepass, $databasename, 3306);
		if ($conexion->connect_errno) {
			echo "Problema con la conexion a la base de datos";
		}	
		return $conexion;
	}
?>