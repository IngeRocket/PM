var Usuario = "";
var idUsuario = 0;
var invitado = false;

$(document).ready(	function(){

		var invitado = localStorage.getItem("Invitado");		
		
		$("body").on("click",".cuenta-opc1", function(){
			if(Usuario==""){
				IrLogIn();	
			}else{
				//opciones de cuenta como cambiar password
				/* al cambiar, si da clic me voy a configuracion*/
			}	
		});

		$("body").on("click",".cuenta-opc2", function(){
			if(Usuario==""){
				IrRegistro();	
			}else{
				//opciones de cuenta como cambiar password
				/* al cambiar, esta opcion sera de log out */
			}	
		});

		$("body").on("click",".logo", function(){
				IrPrincipal();					
		});
		$("body").on("click","#btn-login", function(){
			//funcion de login					
		});
		$("body").on("click","#btn-registro", function(){					
			IrRegistro();
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

function NavegacionGuess(valor){
	if(valor){
		localStorage.setItem("Invitado",true);
		window.location.href="index.html";
	}else{
		localStorage.setItem("Invitado",false);
		window.location.href="index.html";
	}
}
function IrRegistro(){
	window.location.href="registro.html";
}
function IrLogIn(){
	window.location.href="login.html";	
}
function IrPrincipal(){
	window.location.href="principal.html";	
}