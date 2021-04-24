var Guardado;
var Seccion = "Peliculas";
$(document).ready( function(){
/* TRAER INFORMACION Y GUARDAR EN LOCALSTORAGE LOS JSON	*/
	Seccion = "Peliculas";
	Borrar();
	document.getElementById("nav-peliculas").style="background-color: #2085b8;";
	ContenidoPrincipal();

	$("body").on("click", ".imagen", function(){
		var identificador = $(this).attr("articulo");
		var tipo = $(this).attr("tipo");
		alert("Articulo: "+ identificador+" Tipo: "+tipo);
	});
});

function Opcion1(){
	Seccion = "Peliculas";
	Borrar();
	document.getElementById("nav-peliculas").style="background-color: #2085b8;";
	document.getElementById("C-1").src = Guardado[0].Ruta;
	document.getElementById("C-2").src = Guardado[1].Ruta;
	document.getElementById("C-3").src = Guardado[2].Ruta;
	document.getElementById("C-4").src = Guardado[3].Ruta;
	document.getElementById("C-5").src = Guardado[4].Ruta;
}

function Opcion2(){
	Seccion = "Series";
	Borrar();
	document.getElementById("nav-series").style="background-color: #2085b8;";
	document.getElementById("C-1").src = Guardado[5].Ruta;
	document.getElementById("C-2").src = Guardado[6].Ruta;
	document.getElementById("C-3").src = Guardado[7].Ruta;
	document.getElementById("C-4").src = Guardado[8].Ruta;
	document.getElementById("C-5").src = Guardado[9].Ruta;
}

function Opcion3(){
	Seccion = "Juegos";
	Borrar();
	document.getElementById("nav-juegos").style="background-color: #2085b8;";
	document.getElementById("C-1").src = Guardado[10].Ruta;
	document.getElementById("C-2").src = Guardado[11].Ruta;
	document.getElementById("C-3").src = Guardado[12].Ruta;
	document.getElementById("C-4").src = Guardado[13].Ruta;
	document.getElementById("C-5").src = Guardado[14].Ruta;
}

function Opcion4(){
	Seccion = "Programas";
	Borrar();
	document.getElementById("nav-programas").style="background-color: #2085b8;";
	document.getElementById("C-1").src = Guardado[15].Ruta;
	document.getElementById("C-2").src = Guardado[16].Ruta;
	document.getElementById("C-3").src = Guardado[17].Ruta;
	document.getElementById("C-4").src = Guardado[18].Ruta;
	document.getElementById("C-5").src = Guardado[19].Ruta;
}

function ContenidoPrincipal(){
	var dataToSend = { 
		action: "Principal"
		};

		$.ajax({
		url: "php/webservice.php",
		async: true,
		type: 'POST',
		data: dataToSend, 
		success: function (data){
			
				var datos = JSON.parse(data);
				CargaInfo(data);
						
			}
		});
}


function Borrar(){
	document.getElementById("nav-peliculas").style="background-color: rgba(0,0,0,.9);";
	document.getElementById("nav-series").style="background-color: rgba(0,0,0,.9);";
	document.getElementById("nav-juegos").style="background-color: rgba(0,0,0,.9);";
	document.getElementById("nav-programas").style="background-color: rgba(0,0,0,.9);";
}

function GrupoPelicula(articulo,titulo,ruta){
	$("#min-Peliculas").append("<div class='imagen' tipo='1' articulo='"+ articulo +"'>"+
				 			"<a href='#'><img src='"+ ruta +"'></a>"+
				 			"<label class='overlay'>"+ titulo +"</label>" +
				 			"</div>");
}
function GrupoSerie(articulo, titulo, ruta){
	$("#min-Series").append("<div class='imagen' tipo='2' articulo='"+ articulo +"'>"+
							"<a href='#'><img src='"+ ruta +"'></a>"+
							"<label class='overlay'>"+ titulo +"</label>" +
							"</div>");
}
function GrupoJuego(articulo, titulo, ruta){
	$("#min-Juegos").append("<div class='imagen' tipo='3' articulo='"+ articulo +"'>"+
				 			"<a href='#'><img src='"+ ruta +"'></a>"+
				 			"<label class='overlay'>"+ titulo +"</label>" +
				 			"</div>");
}
function GrupoPrograma(articulo, titulo, ruta){
	$("#min-Programas").append("<div class='imagen' tipo='4' articulo='"+ articulo +"'>"+
				 				"<a href='#'><img src='"+ ruta +"'></a>"+
				 				"<label class='overlay'>"+ titulo +"</label>" +
				 				"</div>");
}

function CargaInfo(data){
	var datos = JSON.parse(data);
	console.log(data);
	Guardado = JSON.parse(data);
	
	//carousel apartado peliculas (Siempre se muestra apartado peliculas al llegar a esta pagina)
	document.getElementById("C-1").src = datos[0].Ruta;
	document.getElementById("C-2").src = datos[1].Ruta;
	document.getElementById("C-3").src = datos[2].Ruta;
	document.getElementById("C-4").src = datos[3].Ruta;
	document.getElementById("C-5").src = datos[4].Ruta;

	//Llenado Peliculas
	for (var i = 20; i < 25; i++) {
		GrupoPelicula(datos[i].ID, datos[i].Titulo, datos[i].Ruta);
	}

	//Llenado Series
	for (var i = 25; i < 30; i++) {
		GrupoSerie(datos[i].ID, datos[i].Titulo, datos[i].Ruta);
	}

	//Llenado Juegos
	for (var i = 30; i < 35; i++) {
		GrupoJuego(datos[i].ID, datos[i].Titulo, datos[i].Ruta);
	}

	//Llenado Programas
	for (var i = 35; i < 40; i++) {
		GrupoPrograma(datos[i].ID, datos[i].Titulo, datos[i].Ruta);
	}

}