use PM_PROYECTO;

DELIMITER //
create procedure SP_Login(usuario varchar(60), clave text)
begin
DECLARE clave2 text;
set clave2 = SHA1(clave);
		SELECT IF( EXISTS( SELECT usu_nickname FROM usuario WHERE (usu_correo = usuario OR usu_nickname = usuario ) AND usu_clave = clave2 ),1,0) AS Resultado;
end;
//

DELIMITER //
create procedure SP_Registro(usuario varchar(25), correo varchar(60), clave text)
begin
DECLARE clave2 text;
	set clave2 = SHA1(clave);
	insert into usuario(usu_correo, usu_nickname, usu_clave, usu_fregistro) values (correo, usuario, clave2, date( now() ) );
end;
//
call SP_Registro('IngeRocket','IngeRocket@correo.com','IngeRocket');
call SP_Login('IngeRocket@correo.com','IngeRocket');
call SP_Login('IngeRocket','IngeRocket');
select * from usuario;
