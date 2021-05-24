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
				//alert("Opcion de mi cuenta");
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

		/*$("body").on("click","#Buscar", function(){
			var titulobusqueda = document.getElementById("Texto-buscar").value;
			localStorage.setItem("Busqueda", titulobusqueda);
			localStorage.setItem("Filtro", 5);
			window.location.href="categoria.html";
		});*/

		$("body").on("click",".logo", function(){
			IrPrincipal();
		});
		$("#menu-cat-pelicula").click(function(){
			localStorage.setItem("NombreDeCategoria","Peliculas");
			IrCategoriaEspecifica();
		});
		$("#menu-cat-serie").click(function(){
			localStorage.setItem("NombreDeCategoria","Series");
			IrCategoriaEspecifica();
		});
		$("#menu-cat-juego").click(function(){
			localStorage.setItem("NombreDeCategoria","Juegos");
			IrCategoriaEspecifica();
		});
		$("#menu-cat-programa").click(function(){
			localStorage.setItem("NombreDeCategoria","Programas");
			IrCategoriaEspecifica();
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
		 document.getElementById('cuenta-opc1').innerHTML = Usuario;
		 document.getElementById('cuenta-opc2').innerHTML = "Cerrar Sesion";
		//alert(Usuario);
		/*opcion1.innerHTML= Usuario;
		opcion2.innerHTML= "Cerrar Sesion";*/

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
	//alert("Cierre de sesion");
	Swal.fire({icon: 'success', title: 'SESION', text: 'Hasta la proxima!' });
	localStorage.clear();
	IrLogIn();
}
function IrCategoriaEspecifica(){
	window.location.href="CategoriaEspecifica.html";
}