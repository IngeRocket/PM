var Usuario = "";
var idUsuario = 0;
var Invitado = false;

$(document).ready(	function(){
		
		Requisitos();

		$("body").on("click",".cuenta-opc1", function(){
			if(Invitado || Usuario==""){
				localStorage.setItem("Invitado", false);
				//alert("click");
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

		$("body").on("click","#Buscar", function(){
			window.location.href="categoria.html";
		});



});

function Requisitos(){
 /* Revisar si existe la variable sesion y si tiene valor con local storage*/
	Invitado = localStorage.getItem("Invitado");
 	Usuario = localStorage.getItem("Usuario");
 	idUsuario = localStorage.getItem("idUsuario");	
 	
 	/* aqui se revisara si hay sesion para cambiar nombre en opcion 1 de navbar*/
}

function IrRegistro(){
	window.location.href = "registro.html";
}

function IrLogIn(){
	localStorage.removeItem("Invitado");
	window.location.href = "index.html";	
}

function IrPrincipal(){
	window.location.href= "principal.html";	
}