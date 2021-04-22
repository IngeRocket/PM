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

});
	
