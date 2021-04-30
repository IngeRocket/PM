$(document).ready(function(){
	//alert("Funciona");
	Peticion(1,1);
	$("body").on("click",".elemento", function(){
		var identificador = $(this).attr("identificador");
		var titulo = $(this).attr("titulo");
		var ruta = $(this).attr("ruta");
		var numero = $(this).attr("numero");
		IrReporteEspecifico(identificador, titulo, ruta, numero);
		//alert(identificador);
	});

	$("body").on("click","#logo", function(){
		IrReporte();
	});

	$("body").on("click", "#Salida", function(){
		IrLogIn();
	});

});

function AgregarElemento(identificador, titulo, ruta, numero){
	$(".contenedor").append("<div class='elemento' titulo='"+titulo+"'  ruta='"+ruta+"' numero='"+numero+"' identificador='"+identificador+"'>"+
			"<div class='portada'><img class='a-ruta' src='"+ruta+"'></div>"+
			"<div class='titulo'><label class='a-titulo' >"+titulo+"</label></div>"+
			"<div class='reportes'><label class='a-numero'>"+numero+"</label></div>"+
			"</div>");
}

function Peticion(articulo, opcion){
	//aqui va el ajax
	var dataToSend = { 
		action: "Reportes",
		articulo: articulo,
		opcion: opcion
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
					console.log(data);
					if(opcion==1){
						for(var i = 0; i < datos.length; i++){
							AgregarElemento(datos[i].ID, datos[i].Titulo, datos[i].Ruta, datos[i].Reportes);
							}
					}else{
						alert("No hay reportes");
					
					}		
				}else{
					alert("no hay resultados");
				}	

			}
		});
}

function IrLogIn(){
	localStorage.clear();
	window.location.href="index.html";
}
function IrReporteEspecifico(articulo, titulo, ruta, numero){
	localStorage.setItem("a-id", articulo);
	localStorage.setItem("a-titulo", titulo);
	localStorage.setItem("a-ruta", ruta);
	localStorage.setItem("a-numero", numero);
	window.location.href = "ReporteEspecifico.html";
}
function IrReporte(){
	window.location.href= "reporte.html";
}