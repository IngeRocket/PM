$(document).ready( function(){

var idSeleccion = localStorage.getItem("id-elemento");
var tipoSeleccion = localStorage.getItem("tipo-elemento");

	if(idSeleccion == null){
		alert("no hay nada");
	}else{
		//funcion ajax
		var dataToSend = { action: "Ver", clave: idSeleccion, tipo: tipoSeleccion};
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
	}

});