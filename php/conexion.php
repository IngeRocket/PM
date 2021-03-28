<?php
	function connect() {
		$databasehost = "127.0.0.1";	
		$databaseuser = "root";
		$databasepass = "root";
		$databasename = "BDM_PROYECTO";

		$mysqli = new mysqli($databasehost, $databaseuser, $databasepass, $databasename,3306);
		if ($mysqli->connect_errno) {
			echo "Problema con la conexion a la base de datos";
		}
		return $mysqli;
	}	
?>