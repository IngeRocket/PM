	$(document).ready(	function(){
		
		DatosGuardados();

		$("body").on("click","#Buscar-titulos",function(){
			VaciarCaja();
			var tituloDeBusqueda = document.getElementById("titulo-busqueda");
			var aux = tituloDeBusqueda.value;
			alert(aux);
			
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

					if(datos.length > 0){
						for (var i = 0; i < datos.length; i++) {

							if(datos[i].Pelicula != null)
								AgregarPelicula(datos[i].ID,datos[i].Ruta,datos[i].Peso);
							else
								if(datos[i].Serie != null)
									AgregarSerie(datos[i].ID,datos[i].Ruta,datos[i].Peso);	
						} 
					}else{
						alert("no hay resultados");
					}	
					//console.log(data);
				}
			});
		});
		
		$("body").on("click",".resultado", function(){					
			window.location.href="elemento.html";
		});
		
	});	

function AgregarPelicula(id,ruta,peso){
			$(".resultados").append("<div class='resultado'>"+
			"<div class='r-id'>"+id+"</div>"+
			"<div class='r-tipo pelicula'>Pelicula</div>"+
			"<div class='r-contenido'><img src='"+ruta+"'></div>"+
			"<div class='r-peso pelicula'><label>"+ peso +"</label></div>"+
			"</div>");
}

function AgregarSerie(id,ruta,peso){
			$(".resultados").append("<div class='resultado'>"+
			"<div class='r-id'>"+id+"</div>"+
			"<div class='r-tipo serie'>Serie</div>"+
			"<div class='r-contenido'><img src='"+ruta+"'></div>"+
			"<div class='r-peso serie'><label>"+ peso +"</label></div>"+
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
}