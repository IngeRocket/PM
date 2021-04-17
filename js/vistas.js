	$(document).ready(	function(){
		
		DatosGuardados();

		$("body").on("click","#Buscar-titulos",function(){
			VaciarCaja();
			FuncionBusqueda();
		});
		
		$("body").on("click",".resultado", function(){					
			//obtencion de credencial para proxima pagina
		var identificador = $(this).attr("atributo");
		var tipo = $(this).attr("tipo");
		localStorage.setItem("id-elemento",identificador);
		localStorage.setItem("tipo-elemento",tipo);
		window.location.href="elemento.html";

		});
		
	});	

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

function VaciarCaja(){
	var caja = document.getElementById("resultados");
	caja.innerHTML="";
}

function DatosGuardados(){
	document.getElementById("titulo-busqueda").value = localStorage.getItem("Busqueda");
	var filtroactivo = localStorage.getItem("Filtro");
	if( filtroactivo == null || filtroactivo == 5)
		document.getElementById("r-1").checked = true;	//todo
		else if( filtroactivo == 1 )
			document.getElementById("r-2").checked = true; //peliculas
		else if( filtroactivo == 2 )
			document.getElementById("r-3").checked = true; //series
		else if( filtroactivo == 3 )
			document.getElementById("r-4").checked = true; //juegos
		else if( filtroactivo == 4 )
			document.getElementById("r-5").checked = true; //programas

		FuncionBusqueda();
}

function FuncionBusqueda(){
	var tituloDeBusqueda = document.getElementById("titulo-busqueda");
	var aux = tituloDeBusqueda.value;
	//alert(aux);
	
	var radios = document.getElementsByName('r-categoria');
	var indice = 0;
	for (var i = 0; i < radios.length; i++) {
		if(radios[i].checked){
			indice = radios[i].value;
			localStorage.setItem("Filtro",indice); //guardar por si da F5
			break;
		}
	}
	//alert(indice);
	/* FUNCIONA PROBAR TRAER TITULO DE BUSQUEDA DEL INPUT */
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