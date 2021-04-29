/* crear una key en local storage llamada llave categoria especifica*/
var nombrecategoria = "";
$(document).ready( function(){
	Datos();

});

function Datos(){
	nombrecategoria = localStorage.getItem("NombreDeCategoria");

	if(nombrecategoria != null){
		document.getElementById("NombreDeCategoria").innerHTML = nombrecategoria;
		CatalogoCompleto(nombrecategoria);
	}
}


function AgregarPelicula(id,ruta,peso){
	$(".resultados").append("<div class='resultado' tipo='1' atributo='"+id+"'>"+
	"<div class='r-id'>"+id+"</div>"+
	"<div class='r-tipo pelicula'><label class='color-fuente-1'>Pelicula</label></div>"+
	"<div class='r-contenido'><img src='"+ruta+"'></div>"+
	"<div class='r-peso pelicula'><label class='color-fuente-1'>"+ peso +"</label></div>"+
	"</div>");
}

function AgregarSerie(id,ruta,peso){
	$(".resultados").append("<div class='resultado' tipo='2' atributo='"+id+"'>"+
	"<div class='r-id'>"+id+"</div>"+
	"<div class='r-tipo serie'><label class='color-fuente-1'>Serie</label></div>"+
	"<div class='r-contenido'><img src='"+ruta+"'></div>"+
	"<div class='r-peso serie'><label class='color-fuente-1'>"+ peso +"</label></div>"+
	"</div>");
}

function AgregarJuego(id,ruta,peso){
	$(".resultados").append("<div class='resultado' tipo='3' atributo='"+id+"'>"+
	"<div class='r-id'>"+id+"</div>"+
	"<div class='r-tipo juego'><label class='color-fuente-1'>Juego</label></div>"+
	"<div class='r-contenido'><img src='"+ruta+"'></div>"+
	"<div class='r-peso juego'><label class='color-fuente-1'>"+ peso +"</label></div>"+
	"</div>");
}

function AgregarPrograma(id,ruta,peso){
	$(".resultados").append("<div class='resultado' tipo='4' atributo='"+id+"'>"+
	"<div class='r-id'>"+id+"</div>"+
	"<div class='r-tipo programa'><label class='color-fuente-1'>Programa</label></div>"+
	"<div class='r-contenido'><img src='"+ruta+"'></div>"+
	"<div class='r-peso programa'><label class='color-fuente-1'>"+ peso +"</label></div>"+
	"</div>");
}

function CatalogoCompleto(nombre){
var indice = 0;
var aux = "";
switch(nombre){
	case 'Peliculas': 		indice = 1; break;
	case 'Series': 			indice = 2; break;
	case 'Juegos': 			indice = 3; break;
	case 'Programas': 		indice = 4; break;
}
	var dataToSend = { 
		action: "Busqueda",
		titulo: aux,
		categoria: indice
		};

		$.ajax({
		url: "php/webservice.php",
		async: true,
		type: 'POST',
		data: dataToSend, 
		success: function (data){
			
				var datos = JSON.parse(data);
				console.log(datos);
				if(datos.length > 0){
					for (var i = 0; i < datos.length; i++) {

						if(datos[i].Pelicula != null)
							AgregarPelicula(datos[i].ID,datos[i].Ruta,datos[i].Peso);
						else
							if(datos[i].Serie != null)
								AgregarSerie(datos[i].ID,datos[i].Ruta,datos[i].Peso);
								else
									if(datos[i].Juego != null)	
					 					AgregarJuego(datos[i].ID,datos[i].Ruta,datos[i].Peso);
										else
											AgregarPrograma(datos[i].ID,datos[i].Ruta,datos[i].Peso);
										}
				}else{
					alert("no hay resultados");
				}	
				//console.log(data);
			}
		});
}
