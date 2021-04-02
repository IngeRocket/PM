/* 1 PELICULAS, 2 SERIES, 3 JUEGOS, 4 PROGRAMAS */
var Objetos = function(id, titulo, ruta, tipo) {
	this.id = 0,
	this.titulo = titulo,
	this.ruta = ruta,
	this.tipo = tipo
};


var myObj = {name: "John", age: 31, city: "New York"};

/* Miniaturas del carousel principal */
function Miniatura(){
	/* categoria > inferior > tarjetas > miniaturas*/
	/* conforma div class imagen > img */
	
	
}

/* Carga de imagenes de categorias inferiores */
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

