/* crear una key en local storage llamada llave categoria especifica*/
var nombrecategoria = "";
$(document).ready( function(){
	Datos();
	
	$("#buscar-titulo").click(function(){
		var nombre = document.getElementById("barra-titulo").value;
		var numero = document.getElementById("filtros").value;
		localStorage.setItem("CE_busqueda", nombre);
		localStorage.setItem("CE_filtro", numero);
		CatalogoCompleto(nombre, nombrecategoria, numero);
	});
	$("#cambio-filtro").click(function(){
		var nombre = document.getElementById("barra-titulo").value;
		var numero = document.getElementById("filtros").value;
		localStorage.setItem("CE_busqueda", nombre);
		localStorage.setItem("CE_filtro", numero);
		CatalogoCompleto(nombre, nombrecategoria, numero);
	});

	$("body").on("click",".resultado", function(){					
		var identificador = $(this).attr("atributo");
		var tipo = $(this).attr("tipo");
		localStorage.setItem("id-elemento",identificador);
		localStorage.setItem("tipo-elemento",tipo);
		window.location.href="elemento.html";
	});

});

function Datos(){
	nombrecategoria = localStorage.getItem("NombreDeCategoria");

	var nombre = localStorage.getItem("CE_busqueda");
	document.getElementById('barra-titulo').value = nombre;
	var filtro = localStorage.getItem("CE_filtro");
	document.getElementById('filtros').value = filtro;
	console.log(nombre);
	console.log(filtro);
	if(nombrecategoria != null){
		CatalogoCompleto(nombre,nombrecategoria,filtro);
		document.getElementById("NombreDeCategoria").innerHTML = nombrecategoria;	
	}else{
		Swal.fire({icon: 'error', title: 'AVISO', text: 'Favor de no escribir el nombre de la pagina especifica' });
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

function LimpiarResultados(){
	document.querySelector('.resultados').innerHTML = "";
}

function CatalogoCompleto(nombre, categoria, numero){
	LimpiarResultados();
	var indice = 0;

	switch(categoria){
	case 'Peliculas': 		
	indice = 1; break;
	case 'Series': 			
	indice = 2; break;
	case 'Juegos': 			
	indice = 3; break;
	case 'Programas': 		
	indice = 4; break;
	}
	var dataToSend = { 
		action: "Busqueda",
		titulo: nombre,
		categoria: indice,
		filtro: numero
		};

		$.ajax({
		url: "php/webservice.php",
		async: true,
		type: 'POST',
		data: dataToSend, 
		success: function (data){
			if(data != ""){
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
				} 
			}else{
				Swal.fire({icon: 'info', title: 'AVISO', text: 'No hay resultados de busqueda' });
			}
			
			}
		});
}
