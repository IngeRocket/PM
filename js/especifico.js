var idSeleccion = 0;
var tipoSeleccion = 0;
var idUsuario = null;

var descripcion = "Esta es la descripcion del producto";
var enlace = "";
$(document).ready( function(){

	Credenciales();

	$("body").on("click","#btn_reportar",function(){
		Reporte();
	});

 	$("body").on("click","#portada",function(){
 		document.getElementById("overlay").style="opacity: 0";
 		QuitarFormato();
 		document.getElementById("portada").style="background-color: #2085b8;";
	
 	});
 	$("body").on("click","#descripcion",function(){
 		document.getElementById("overlay").style="opacity: 1";
 		document.getElementById("info-articulo").innerHTML = descripcion;
 		QuitarFormato();
 		document.getElementById("descripcion").style="background-color: #2085b8;";
	
 	});
 	$("body").on("click","#enlace",function(){
 		document.getElementById("overlay").style="opacity: 1";
 		QuitarFormato();
 		document.getElementById("enlace").style="background-color: #2085b8;";
 		if(idUsuario != null){
 			document.getElementById("info-articulo").innerHTML = "Enlace";
 		}else{
 			document.getElementById("info-articulo").innerHTML = "Inicia Sesion para poder ver el enlace de descarga";
 		}
 	});

});

function Credenciales(){

	idUsuario = localStorage.getItem("idUsuario");

	idSeleccion = localStorage.getItem("id-elemento");
 	tipoSeleccion = localStorage.getItem("tipo-elemento");

	if(idSeleccion == null){
		Swal.fire({icon: 'error', title: 'AVISO', text: 'Acceso denegado!' });
	}else{
		BusquedaEspecifica();
	}

}

function Llenado(visita, descargas ,fecha, ruta){
	var labelVisita 	= document.getElementById("N-vistas");
	var labelDescarga 	= document.getElementById("N-descargas");
	var labelFechaAct 	= document.getElementById("F-Verificacion");

	$("#imagen").attr("src", ruta);

	labelVisita.innerHTML = "Visitas:" +" "+visita;
	labelDescarga.innerHTML = "Descargas:" +" "+descargas;
	labelFechaAct.innerHTML = "Fecha de actualizaci&oacute;n:" +" "+fecha;
}

function BusquedaEspecifica(){
	var dataToSend = { action: "Lectura", clave: idSeleccion, tipo: tipoSeleccion};

	$.ajax({
	url: "php/webservice.php",
	async: true,
	type: 'POST',
	data: dataToSend, 
	success: function (data){
		
			var datos = JSON.parse(data);
			//console.log(data);
			if(datos.length > 0){
				Llenado(datos[0].Visitas, datos[0].Descargas, datos[0].Factualizacion, datos[0].Ruta);	
				descripcion = datos[0].Descripcion;
				document.getElementById("titulo-articulo").innerHTML = datos[0].Titulo;
			} 	
			
		}
	}); 
}

function QuitarFormato(){
	document.getElementById("portada").style="background-color: rgba(0,0,0,.9);";
	document.getElementById("descripcion").style="background-color: rgba(0,0,0,.9);";
	document.getElementById("enlace").style="background-color: rgba(0,0,0,.9);";
}

function Reporte(){
	//alert("Opcion de Reporte");

	if( idUsuario != null){
		
		//alert(idUsuario);

		var dataToSend = { 
		action: "Reporte", 
		idusuario: idUsuario, 
		idelemento: idSeleccion
	};

		$.ajax({
		url: "php/webservice.php",
		async: true,
		type: 'POST',
		data: dataToSend, 
		success: function (data){
				//console.log(data);
/**/
				var datos = JSON.parse(data);
				//console.log(datos);

				if(datos.length > 0){
					//alert(datos[0].Mensaje);
					Swal.fire({icon: 'info', title: 'AVISO', text: datos[0].Mensaje });
				} 	
				//console.log(data);
				
			}
		}); 

	}else{
		//alert("No puedes reportar si no tienes una sesion iniciada");
		Swal.fire({icon: 'info', title: 'AVISO', text: 'No puedes reportar si no tienes una sesion iniciada' });
	}
}