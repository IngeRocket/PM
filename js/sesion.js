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

		$("body").on("click","#btn-CrearCuenta",function(){
			var unoUsuario 	= document.getElementById("i-usu").value;
			var dosCorreo 	= document.getElementById("i-email").value;
			var tresPass	= document.getElementById("i-clave").value;

			if (unoUsuario.length == 0)
				alert("Campo de Usuario vacio, favor de llenar");
				else if (dosCorreo.length == 0)
					alert("Campo de correo vacio, favor de llenar");
					else if(tresPass.length == 0)
						alert("Campo de clave vacio, favor de llenar");
						else
							RegistrarUsuario(unoUsuario,dosCorreo, tresPass);
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

function RegistrarUsuario(user, email, pass){
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
			if(datos[0].Resultado == 0){
				alert(datos[0].Mensaje);
			}else{
				if(datos[0].Resultado == 1){
					alert(datos[0].Mensaje);
					//aqui se hace la llamada para el envio de correo electronico
					var uno = document.getElementById("i-usu").value;
					var dos = document.getElementById("i-email").value;
					alert(uno + ' '+ dos);
					MandarCorreo(uno, dos);
					//aqui se llama a la funcion de ir a login (index.html)
					//IrLogIn();
					
				}
			}			
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
				//nuevo
				if(datos[0].Rol==1){
					//usuario normal
					GuardarDatos(datos[0].usuId, datos[0].usuname, datos[0].usuemail);
					debugger;
					alert("Alerta antes de cambio");
					IrPrincipal();
				}else{
					//admin
					IrPantallaAdmin();
				}
				
				//fin de nuevo bloque
			}			
			//console.log(data);
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
function MandarCorreo(usuario, correo){
	var dataToSend = { 
		action: "Correo",
		usuario: usuario,
		correo: correo
		};
	$.ajax({
	url: "php/correo.php",
	async: true,
	type: 'POST',
	data: dataToSend, 
	success: function (data){
			console.log("correo enviado");
		}
	});
}
function IrPantallaAdmin(){
	window.location.href="reporte.html";
}