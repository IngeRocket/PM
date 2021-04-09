var Usuario = "";
var idUsuario = 0;
var invitado = false;

$(document).ready(	function(){
		
		Requisitos();
		$("body").on("click","#btn-login", function(){
			//funcion de login					
		});
		$("body").on("click","#btn-registro", function(){					
			IrRegistro();
		});
		$("body").on("click","#btn-invitado", function(){					
			NavegacionGuess(true);
		});
		$("body").on("click","#btn-r-login", function(){					
			IrLogIn();
		});
});

function Requisitos(){
 /* Revisar si existe la variable sesion y si tiene valor con local storage*/
	invitado = localStorage.getItem("Invitado");
 	usuario = localStorage.getItem("Usuario");
 	idUsuario = localStorage.getItem("idUsuario");
 	//alert(invitado); /* revisar porque entreba en false */

 	if (invitado == true) {
 		IrPrincipal();
 	}

}

function NavegacionGuess(valor){
	if(valor){
		localStorage.setItem("Invitado",true);
		window.location.href="principal.html";
	}
}
function IrRegistro(){
	window.location.href="registro.html";
}
function IrLogIn(){
	window.location.href="index.html";	
}
function IrPrincipal(){
	window.location.href="principal.html";	
}