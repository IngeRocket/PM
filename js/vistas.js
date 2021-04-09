	$(document).ready(	function(){

		$("body").on("click","#Buscar",function(){
			var dataToSend = { 
				action: "Catalogo"
				};
			$.ajax({
			url: "php/webservice.php",
			async: true,
			type: 'POST',
			data: dataToSend, 
			success: function (data){

					var datos = JSON.parse(data);			
					for (var i = 0; i < datos.length; i++) {

						if(datos[i].Pelicula != null)
							AgregarPelicula(datos[i].ID,datos[i].Ruta,datos[i].Peso);
						else
							if(datos[i].Serie != null)
								AgregarSerie(datos[i].ID,datos[i].Ruta,datos[i].Peso);
						
					}  
					//alert(data);
					console.log(data);
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

