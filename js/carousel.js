$(document).ready(function(){
	var GaleriaPrincipal = document.querySelector('.carousel-contenido .miniaturas');
	var division = GaleriaPrincipal.scrollWidth / 5;

	var indice = 1;

	$("#g-flecha-der").click( function(){
		
		if(indice < 5){
			GaleriaPrincipal.scrollLeft += GaleriaPrincipal.offsetWidth;
			indice++;
		}else{
			GaleriaPrincipal.scrollLeft = 0;
			indice = 0;
		}
		
	});

	$("#g-flecha-izq").click( function(){
		if(indice > 1){
			GaleriaPrincipal.scrollLeft -= GaleriaPrincipal.offsetWidth;
			indice--;
		}else{
			GaleriaPrincipal.scrollLeft = GaleriaPrincipal.scrollWidth;
			indice = 5;
		}
	});

	/* grupo peliculas*/
	$('#p-flecha-izq').click(function(){
		var GgrpP = document.getElementById('min-Peliculas');
		GgrpP.scrollLeft = 0; 		
	});

	$('#p-flecha-der').click(function(){
		var GgrpP = document.getElementById('min-Peliculas');
		GgrpP.scrollLeft += GgrpP.offsetWidth;		 	
	});

	/* grupo Series*/
	$('#s-flecha-izq').click(function(){
		var GgrpP = document.getElementById('min-Series');
		GgrpP.scrollLeft = 0; 		
	});

	$('#s-flecha-der').click(function(){
		var GgrpP = document.getElementById('min-Series');
		GgrpP.scrollLeft += GgrpP.offsetWidth;		 	
	});

	/* grupo Juegos*/
	$('#j-flecha-izq').click(function(){
		var GgrpP = document.getElementById('min-Juegos');
		GgrpP.scrollLeft = 0; 		
	});

	$('#j-flecha-der').click(function(){
		var GgrpP = document.getElementById('min-Juegos');
		GgrpP.scrollLeft += GgrpP.offsetWidth;		 	
	});

	/* grupo Programas*/
	$('#prg-flecha-izq').click(function(){
		var GgrpP = document.getElementById('min-Programas');
		GgrpP.scrollLeft = 0; 		
	});

	$('#prg-flecha-der').click(function(){
		var GgrpP = document.getElementById('min-Programas');
		GgrpP.scrollLeft += GgrpP.offsetWidth;		 	
	});
	


}); //cierre del document ready
	
