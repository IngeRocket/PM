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
 	});
 	$("body").on("click","#descripcion",function(){
 		document.getElementById("overlay").style="opacity: 1";
 		document.getElementById("info-articulo").innerHTML = descripcion;
 	});
 	$("body").on("click","#enlace",function(){
 		document.getElementById("overlay").style="opacity: 1";
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
		alert("no hay nada");
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
	labelFechaAct.innerHTML = "Fecha de actualizacion:" +" "+fecha;
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
			console.log(datos);

			if(datos.length > 0){
				Llenado(datos[0].Visitas, datos[0].Descargas, datos[0].Factualizacion, datos[0].Ruta);	
				descripcion = datos[0].Descripcion;
			} 	
			
		}
	}); 
}

function Reporte(){
	alert("Opcion de Reporte");

	if( idUsuario != null){
		
		alert(idUsuario);

		var dataToSend = { action: "Reporte", idusuario: idUsuario, idelemento: idSeleccion};

		$.ajax({
		url: "php/webservice.php",
		async: true,
		type: 'POST',
		data: dataToSend, 
		success: function (data){
			
				var datos = JSON.parse(data);
				console.log(datos);

				if(datos.length > 0){
					alert(datos[0].Mensaje);
				} 	
				//console.log(data);
			}
		}); 

	}else{
		alert("No puedes reportar si no tienes una sesion iniciada");
	}
}