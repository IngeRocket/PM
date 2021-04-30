var IdArticulo = 0;
var solicitud = false;
$(document).ready( function(){
	//alert("Hola");
	IdArticulo = localStorage.getItem("a-id");
	if(IdArticulo == null || IdArticulo == 0){
		alert("Forma de acceso invalida");
	}else{
		document.getElementById('foto').src = localStorage.getItem("a-ruta");
		document.getElementById('titulo').innerHTML= localStorage.getItem("a-titulo");
		document.getElementById('numero').innerHTML= localStorage.getItem("a-numero");
	}

	
	//IdArticulo = localStorage.getItem("id-articulo");
	$("#reparar").click(function(){
		if(solicitud == false){
			alert("click a boton de reparar");
			solicitud = true;
		}	
	});
});

function Peticion(articulo){
	//aqui se manda al ajax que lo reparara
}