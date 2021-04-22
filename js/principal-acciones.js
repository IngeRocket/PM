$(document).ready( function(){
	//alert("Hola");
	/* traer informacion con promesas */
/* TRAER INFORMACION Y GUARDAR EN LOCALSTORAGE LOS JSON	*/
	ContenidoPrincipal();
});

function Opcion1(){
//alert("Opcion 1");
/*document.getElementById("nav-peliculas").style.background="rgba( 31,69,121,.3)";
document.getElementById("nav-series").style.background="none";
document.getElementById("nav-juegos").style.background="none";
document.getElementById("nav-programas").style.background="none";*/
}

function Opcion2(){
//alert("Opcion 2");
/*document.getElementById("nav-peliculas").style.background="none";
document.getElementById("nav-series").style.background="rgba( 31,69,121,.3)";
document.getElementById("nav-juegos").style.background="none";
document.getElementById("nav-programas").style.background="none";*/
}

function Opcion3(){
//alert("Opcion 3");
/*document.getElementById("nav-peliculas").style.background="none";
document.getElementById("nav-series").style.background="none";
document.getElementById("nav-juegos").style.background="rgba( 31,69,121,.3)";
document.getElementById("nav-programas").style.background="none";*/
}

function Opcion4(){
//alert("Opcion 4");
/*document.getElementById("nav-peliculas").style.background="none";
document.getElementById("nav-series").style.background="none";
document.getElementById("nav-juegos").style.background="none";
document.getElementById("nav-programas").style.background="rgba( 31,69,121,.3)";*/
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
				//console.log(datos);
				if(datos.length > 0){
				/*	for (var i = 0; i < datos.length; i++) {
				
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
				
				}*/
				console.log(data);
				}else{
					alert("no hay resultados");
				}	
				
			}
		});
}
