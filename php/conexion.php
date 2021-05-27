<?php
	function Conectar(){
		$databasehost = "pm-1635986-bd.cwotpk0fvwu5.us-west-2.rds.amazonaws.com";	
		$databaseuser = "admin";
		$databasepass = "IngeRocket";
		$databasename = "pm_proyecto";

		$conexion = new mysqli($databasehost, $databaseuser, $databasepass, $databasename, 3306);
		if ($conexion->connect_errno) {
			echo "Problema con la conexion a la base de datos";
		}	
		return $conexion;
	}
?>