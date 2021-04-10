use PM_PROYECTO;

DELIMITER //
create procedure SP_Login(usuario varchar(60), clave text)
begin
DECLARE clave2 text;
DECLARE usuId int;
DECLARE usuemail varchar(60);
DECLARE usuname varchar(25);
DECLARE Resultado int;
set clave2 = SHA1(clave);
set Resultado =	(SELECT IF( EXISTS( SELECT usu_nickname FROM usuario WHERE (usu_correo = usuario OR usu_nickname = usuario ) AND usu_clave = clave2 ),1,0) );

if Resultado = 1 then
	set usuId = (select usu_id from usuario where usu_correo = usuario OR usu_nickname = usuario);
    set usuemail = (select usu_correo from usuario where usu_correo = usuario OR usu_nickname = usuario);
    set usuname = (select usu_nickname from usuario where usu_correo = usuario OR usu_nickname = usuario);
	select Resultado, usuId, usuemail, usuname;
else
	select Resultado;
end if;

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

DELIMITER //
create procedure SP_Prueba()
begin
select * from v_catalogo_pelicula;
end
//
call SP_Prueba;
DELIMITER //
create procedure SP_Catalogo()
begin
select * from v_catalogo;
end
//

