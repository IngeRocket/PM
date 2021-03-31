
function Registro(user, pass, email){
	var dataToSend = { 
		action: "Registro",
		email: email,
		user: user,
		pass: pass
		};
			$.ajax({
			url: "../php/webservice.php",
			async: true,
			type: 'POST',
			data: dataToSend, 
			success: function (data){
					var datos = JSON.parse(data);			
				/*	for (var i = 0; i < datos.length; i++) {	
					} */
					alert(data);
				}
			});
}

function Login(){
	var dataToSend = { 
		action: "Login",
		user: user,
		pass: pass
		};
			$.ajax({
			url: "../php/webservice.php",
			async: true,
			type: 'POST',
			data: dataToSend, 
			success: function (data){
					var datos = JSON.parse(data);			
					alert(data);
				}
			});
}