var Usuario = "";
var idUsuario = 0;
var invitado = false;

$(document).ready(	function(){
	/*alert("Hola");*/
		$("body").on("click",".cuenta-opc1", function(){
			if(Usuario==""){
				window.location.href="login.html";	
			}else{
				//opciones de cuenta como cambiar password
			}	
		});

		$("body").on("click",".cuenta-opc2", function(){
			if(Usuario==""){
				window.location.href="Registro.html";	
			}else{
				//opciones de cuenta como cambiar password
			}	
		});

		$("body").on("click",".logo", function(){
				window.location.href="index.html";					
		});

});

function Requisitos(){
 /* Revisar si existe la variable sesion y si tiene valor con local storage*/
var sesion = localStorage.getItem("sesion");

		if (sesion==null){
		sesion = false;
		}else{

		}
}

