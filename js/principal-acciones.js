var Guardado;
var Seccion = "Peliculas";
$(document).ready( function(){
/* TRAER INFORMACION Y GUARDAR EN LOCALSTORAGE LOS JSON	*/
	Seccion = "Peliculas";
	Borrar();
	document.getElementById("nav-peliculas").style="background-color: #2085b8;";
	ContenidoPrincipal();
});

function Opcion1(){
	Seccion = "Peliculas";
	Borrar();
	document.getElementById("nav-peliculas").style="background-color: #2085b8;";
	document.getElementById("C-1").src = Guardado[0].Ruta;
	document.getElementById("C-2").src = Guardado[1].Ruta;
	document.getElementById("C-3").src = Guardado[2].Ruta;
	document.getElementById("C-4").src = Guardado[3].Ruta;
	document.getElementById("C-5").src = Guardado[4].Ruta;
}

function Opcion2(){
	Seccion = "Series";
	Borrar();
	document.getElementById("nav-series").style="background-color: #2085b8;";
	document.getElementById("C-1").src = Guardado[5].Ruta;
	document.getElementById("C-2").src = Guardado[6].Ruta;
	document.getElementById("C-3").src = Guardado[7].Ruta;
	document.getElementById("C-4").src = Guardado[8].Ruta;
	document.getElementById("C-5").src = Guardado[9].Ruta;
}

function Opcion3(){
	Seccion = "Juegos";
	Borrar();
	document.getElementById("nav-juegos").style="background-color: #2085b8;";
	document.getElementById("C-1").src = Guardado[10].Ruta;
	document.getElementById("C-2").src = Guardado[11].Ruta;
	document.getElementById("C-3").src = Guardado[12].Ruta;
	document.getElementById("C-4").src = Guardado[13].Ruta;
	document.getElementById("C-5").src = Guardado[14].Ruta;
}

function Opcion4(){
	Seccion = "Programas";
	Borrar();
	document.getElementById("nav-programas").style="background-color: #2085b8;";
	document.getElementById("C-1").src = Guardado[15].Ruta;
	document.getElementById("C-2").src = Guardado[16].Ruta;
	document.getElementById("C-3").src = Guardado[17].Ruta;
	document.getElementById("C-4").src = Guardado[18].Ruta;
	document.getElementById("C-5").src = Guardado[19].Ruta;
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

function CargaInfo(data){
	var datos = JSON.parse(data);
	Guardado = JSON.parse(data);
	
	document.getElementById("C-1").src = datos[0].Ruta;
	document.getElementById("C-2").src = datos[1].Ruta;
	document.getElementById("C-3").src = datos[2].Ruta;
	document.getElementById("C-4").src = datos[3].Ruta;
	document.getElementById("C-5").src = datos[4].Ruta;
	
	document.getElementById("P-1").src = datos[20].Ruta;
	document.getElementById("P-2").src = datos[21].Ruta;
	document.getElementById("P-3").src = datos[22].Ruta;
	document.getElementById("P-4").src = datos[23].Ruta;
	document.getElementById("P-5").src = datos[24].Ruta;

	document.getElementById("S-1").src = datos[25].Ruta;
	document.getElementById("S-2").src = datos[26].Ruta;
	document.getElementById("S-3").src = datos[27].Ruta;
	document.getElementById("S-4").src = datos[28].Ruta;
	document.getElementById("S-5").src = datos[29].Ruta;

	document.getElementById("J-1").src = datos[30].Ruta;
	document.getElementById("J-2").src = datos[31].Ruta;
	document.getElementById("J-3").src = datos[32].Ruta;
	document.getElementById("J-4").src = datos[33].Ruta;
	document.getElementById("J-5").src = datos[34].Ruta;

	document.getElementById("PRG-1").src = datos[35].Ruta;
	document.getElementById("PRG-2").src = datos[36].Ruta;
	document.getElementById("PRG-3").src = datos[37].Ruta;
	document.getElementById("PRG-4").src = datos[38].Ruta;
	document.getElementById("PRG-5").src = datos[39].Ruta;
}

function Borrar(){
	document.getElementById("nav-peliculas").style="background-color: rgba(0,0,0,.9);";
	document.getElementById("nav-series").style="background-color: rgba(0,0,0,.9);";
	document.getElementById("nav-juegos").style="background-color: rgba(0,0,0,.9);";
	document.getElementById("nav-programas").style="background-color: rgba(0,0,0,.9);";
}