var IdArticulo = 0;
var solicitud = false;
$(document).ready( function(){
	//alert("Hola");
	IdArticulo = localStorage.getItem("a-id");
	if(IdArticulo == null || IdArticulo == 0){
		//alert("Forma de acceso invalida");
		Swal.fire({icon: 'error', title: 'AVISO', text: 'Forma de acceso invalida' });
	}else{
		document.getElementById('foto').src = localStorage.getItem("a-ruta");
		document.getElementById('titulo').innerHTML= localStorage.getItem("a-titulo");
		document.getElementById('numero').innerHTML= localStorage.getItem("a-numero");
	}

	
	//IdArticulo = localStorage.getItem("id-articulo");
	$("#reparar").click(function(){
		if(solicitud == false &&  IdArticulo != null){
			//alert("click a boton de reparar");
			solicitud = true;
			Peticion(IdArticulo);
		}else{
			//alert("Intento de peticion invalida");
			Swal.fire({icon: 'error', title: 'AVISO', text: 'Intento de solicitud invalida' });
		}	
	});
	$("body").on("click","#logo", function(){
		IrReporte();
	});
});

function Peticion(articulo){
	//aqui se manda al ajax que lo reparara
	var dataToSend = { 
		action: "SolucionReporte",
		articulo: articulo
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
					IrReporte();		
				}else{
					//alert("no hay resultados");
					Swal.fire({icon: 'info', title: 'AVISO', text: 'No hay resultados' });
				}	

			}
		});
}
function IrReporte(){
	window.location.href="reporte.html";
}