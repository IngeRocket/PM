var Usuario = "";
var CorreoUsuario = "";
var idUsuario = 0;
var Invitado = false;
var solicitud = false;

$(document).ready(	function(){
		
		Requisitos();

		$("body").on("click","#btn-login", function(){
			//funcion de login	
			var user = document.getElementById("usu_name").value;
			var pass = document.getElementById("usu_pass").value;
			if(user == null || user == "")
				alert("Favor de rellenar campo de usuario");
			else
			if (pass == null || pass == "")
			alert("Favor de rellenar campo de clave de acceso");

			if(user!="" && pass!="" && !solicitud){
				solicitud = true;
				alert("Iniciando peticion de login");
				LogIn(user, pass);
			}else{
				if(solicitud){
					alert("Espere la respuesta del servidor por favor");
				}
			}
		
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
	
	Invitado = localStorage.getItem("Invitado");
 	Usuario = localStorage.getItem("Usuario");
 	idUsuario = localStorage.getItem("idUsuario");
 	CorreoUsuario = localStorage.getItem("CorreoUsuario");
	
 	//alert(invitado); /* revisar porque entreba en false */
	/**/
 	if (Invitado != null || Usuario != null) {
 		alert("Datos de sesion previa");
 		IrPrincipal();
 	}
}

function RegistrarUsuario(user, pass, email){
	var dataToSend = { 
		action: "Registro",
		user: user,
		pass: pass,
		email: email
		};
	$.ajax({
	url: "php/webservice.php",
	async: true,
	type: 'POST',
	data: dataToSend, 
	success: function (data){

			var datos = JSON.parse(data);			
			/*for (var i = 0; i < datos.length; i++) {
				}*/  
			//alert(data);
			console.log(data);
		}
	});
}

function LogIn(user, pass){
	var dataToSend = { 
		action: "Login",
		user: user,
		pass: pass
		};
	$.ajax({
	url: "php/webservice.php",
	async: true,
	type: 'POST',
	data: dataToSend, 
	success: function (data){
			var datos = JSON.parse(data);
			if(datos[0].Resultado == 0){
				//datos incorrectos
			}else{
				GuardarDatos(datos[0].usuId, datos[0].usuname, datos[0].usuemail);
				alert("Alerta antes de cambio");
				IrPrincipal();
			}			
			/*for (var i = 0; i < datos.length; i++) {
				}*/  
			//alert(data);
			console.log(data);
			solicitud = false;
		}
	});
}

function NavegacionGuess(valor){
	if(valor){
		localStorage.setItem("Invitado", true);
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
function GuardarDatos(idusu, usuario, correo){
	localStorage.setItem("Invitado", false);
	localStorage.setItem("idUsuario",idusu);
	localStorage.setItem("Usuario",usuario);
	localStorage.setItem("CorreoUsuario",correo);
}