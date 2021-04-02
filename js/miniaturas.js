function Miniatura(){
	/* categoria > inferior > tarjetas > miniaturas*/
	/* conforma div class imagen > img */
	
	
}

function AgregarPelicula(ruta){
	$("#min-Peliculas").append("<div class='imagen'><a href='#'><img src='img/Peliculas/1.jpg'></a></div>");
}
function AgregarSerie(ruta){
	$("#min-Series").append("<div class='imagen'><a href='#'><img src='img/Series/1.jpg'></a></div>");
}
function AgregarJuego(ruta){
	$("#min-Juegos").append("<div class='imagen'><a href='#'><img src='img/Juegos/1.jpg'></a></div>");
}
function AgregarPrograma(ruta){
	$("#min-Programas").append("<div class='imagen'><a href='#'><img src='img/Programas/1.jpg'></a></div>");
}

/* al cargar resulltados de la base de datos, se llena automaticamente cada contenedor de elementos */