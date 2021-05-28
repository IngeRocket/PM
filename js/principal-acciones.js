var Guardado;
var Seccion = "Peliculas";
$(document).ready( function(){
/* TRAER INFORMACION Y GUARDAR EN LOCALSTORAGE LOS JSON	*/
	Seccion = "Peliculas";
	Borrar();
	document.getElementById("nav-peliculas").style="background-color: #2085b8;";
	ContenidoPrincipal();

	$("body").on("click", ".tarjetas .miniaturas .imagen", function(){
		var identificador = $(this).attr("articulo");
		var tipo = $(this).attr("tipo");
		//alert("Articulo: "+ identificador+ " tipo "+tipo);
		IrElementoEspecifico(identificador, tipo);
	});

	$("body").on("click", ".carousel-contenido .miniaturas .imagen .nada", function(){
		var identificador = $(this).attr("articulo");
		var tipo = $(this).attr("tipo");
		//alert("Articulo: "+ identificador+ " tipo "+tipo);
		IrElementoEspecifico(identificador, tipo);
	});

	$("body").on("click","#Buscar", function(){
		//alert("Hola");
				var titulobusqueda = document.getElementById("Texto-buscar").value;
				localStorage.setItem("Busqueda", titulobusqueda);
				localStorage.setItem("Categoria", 5);
				localStorage.setItem("Filtro", 1); //nombre A - Z
				window.location.href="Buscador.html";
			});
});

function Opcion1(){
	Seccion = "Peliculas";
	Borrar();
	document.getElementById("nav-peliculas").style="background-color: #2085b8;";
	CargarAtributos(0,1);
}

function Opcion2(){
	Seccion = "Series";
	Borrar();
	document.getElementById("nav-series").style="background-color: #2085b8;";
	CargarAtributos(5,2);
}

function Opcion3(){
	Seccion = "Juegos";
	Borrar();
	document.getElementById("nav-juegos").style="background-color: #2085b8;";
	CargarAtributos(10,3);
}

function Opcion4(){
	Seccion = "Programas";
	Borrar();
	document.getElementById("nav-programas").style="background-color: #2085b8;";
	CargarAtributos(15,4);
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
				 			"<img src='"+ ruta +"'>"+
				 			"<label class='overlay'>"+ titulo +"</label>" +
				 			"</div>");
}
function GrupoSerie(articulo, titulo, ruta){
	$("#min-Series").append("<div class='imagen' tipo='2' articulo='"+ articulo +"'>"+
							"<img src='"+ ruta +"'>"+
							"<label class='overlay'>"+ titulo +"</label>" +
							"</div>");
}
function GrupoJuego(articulo, titulo, ruta){
	$("#min-Juegos").append("<div class='imagen' tipo='3' articulo='"+ articulo +"'>"+
				 			"<img src='"+ ruta +"'>"+
				 			"<label class='overlay'>"+ titulo +"</label>" +
				 			"</div>");
}
function GrupoPrograma(articulo, titulo, ruta){
	$("#min-Programas").append("<div class='imagen' tipo='4' articulo='"+ articulo +"'>"+
				 				"<img src='"+ ruta +"'>"+
				 				"<label class='overlay'>"+ titulo +"</label>" +
				 				"</div>");
}

function CargaInfo(data){

	var datos = JSON.parse(data);
	//console.log(data);
	Guardado = JSON.parse(data);
	
	//carousel apartado peliculas (Siempre se muestra apartado peliculas al llegar a esta pagina)
	CargarAtributos(0,1);

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
	/**/

}

function CargarAtributos(indice, tipo){
	document.getElementById("C-1").src = Guardado[indice + 0].Ruta;
	document.getElementById('C-1').setAttribute("articulo",Guardado[indice + 0].ID);
	document.getElementById('C-1').setAttribute("tipo",tipo);

	document.getElementById("C-2").src = Guardado[indice + 1].Ruta;
	document.getElementById('C-2').setAttribute("articulo",Guardado[indice + 1].ID);
	document.getElementById('C-2').setAttribute("tipo",tipo);

	document.getElementById("C-3").src = Guardado[indice + 2].Ruta;
	document.getElementById('C-3').setAttribute("articulo",Guardado[indice + 2].ID);
	document.getElementById('C-3').setAttribute("tipo",tipo);

	document.getElementById("C-4").src = Guardado[indice + 3].Ruta;
	document.getElementById('C-4').setAttribute("articulo",Guardado[indice + 3].ID);
	document.getElementById('C-4').setAttribute("tipo",tipo);

	document.getElementById("C-5").src = Guardado[indice + 4].Ruta;
	document.getElementById('C-5').setAttribute("articulo",Guardado[indice + 4].ID);
	document.getElementById('C-5').setAttribute("tipo",tipo);
}

function IrElementoEspecifico(articulo, tipo){
		localStorage.setItem("id-elemento",articulo);
		localStorage.setItem("tipo-elemento",tipo);
		window.location.href="elemento.html";
}