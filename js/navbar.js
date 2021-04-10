var Usuario = "";
var idUsuario = 0;
var Invitado = false;

$(document).ready(	function(){
		
		Requisitos();

		$("body").on("click",".cuenta-opc1", function(){
			if(Usuario==null){
				localStorage.setItem("Invitado", false);
				//alert("click");
				IrLogIn();	
			}else{
				alert("Opcion de mi cuenta");
				//opciones de cuenta como cambiar password
				/* al cambiar, si da clic me voy a configuracion*/
			}	
		});

		$("body").on("click",".cuenta-opc2", function(){
			if(Usuario==null){
				IrRegistro();	
			}else{
				//opciones de cuenta como cambiar password
				/* al cambiar, esta opcion sera de log out */
				CerrarSesion();
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
 	
 	//alert(Usuario); // su valor es nulo al venir de localstorage
 	/* aqui se revisara si hay sesion para cambiar nombre en opcion 1 de navbar*/
 	if (Usuario != null){
 		//document.getElementById("n-opc-1").value = Usuario;
		var opcion1 = document.getElementById("n-opc-1");
		var opcion2 = document.getElementById("n-opc-2");
		opcion1.innerHTML= Usuario;
		opcion2.innerHTML= "Cerrar Sesion";

 	}
}

function IrRegistro(){
	localStorage.clear();
	window.location.href = "registro.html";
}

function IrLogIn(){
	localStorage.clear();
	window.location.href = "index.html";	
}

function IrPrincipal(){
	window.location.href= "principal.html";	
}

function CerrarSesion(){
	alert("Cierre de sesion");
	localStorage.clear();
	IrLogIn();
}