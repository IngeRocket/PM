/* crear una key en local storage llamada llave categoria especifica*/
var nombrecategoria = "";
$(document).ready( function(){
	Datos();

});

function Datos(){
	nombrecategoria = localStorage.getItem("NombreDeCategoria");

	if(nombrecategoria != null){
		document.getElementById("NombreDeCategoria").innerHTML = nombrecategoria;
		CatalogoCompleto();
	}
}

function CatalogoCompleto(){
	//Si entra por un enlace, mandar a llamar la vista correspondiente con ajax
}