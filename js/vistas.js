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

