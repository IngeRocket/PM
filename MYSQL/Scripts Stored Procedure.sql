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
end;
//


DELIMITER //
create procedure SP_Busqueda (busqueda text, categoria int)
begin
if categoria = 1 then
SELECT * FROM v_catalogo WHERE Titulo LIKE CONCAT('%',busqueda,'%') and Pelicula is not null;
elseif categoria = 2 then
SELECT * FROM v_catalogo WHERE Titulo LIKE CONCAT('%',busqueda,'%')and Serie is not null;
elseif categoria = 3 then
SELECT * FROM v_catalogo WHERE Titulo LIKE CONCAT('%',busqueda,'%')and Juego is not null;
elseif categoria = 4 then
SELECT * FROM v_catalogo WHERE Titulo LIKE CONCAT('%',busqueda,'%')and Programa is not null;
elseif categoria = 5 then
SELECT * FROM v_catalogo WHERE Titulo LIKE CONCAT('%',busqueda,'%');
end if;
end;
//


drop procedure SP_Lectura;
DELIMITER //
create procedure SP_Lectura(idElemento int, tipo int)
begin
	if tipo = 1 then
		-- se esta buscando en peliculas
    update articulo set a_visita = a_visita + 1 where a_pelicula = idElemento;
        
	select A.a_titulo, P.p_descripcion, A.a_fsalida ,P.p_enlace, I.img_ruta, A.a_factualizacion, A.a_peso, A.a_descarga, A.a_visita from articulo as A 
    join pelicula as P
    on P.p_id = A.a_pelicula
    join imagen as I
    on I.img_id = A.a_portada
    where A.a_pelicula = idElemento and A.a_estado = 1;
    end if;
    
    if tipo = 2 then
    -- series
        update articulo set a_visita = a_visita + 1 where a_serie = idElemento;
	select A.a_titulo, S.s_descripcion, A.a_fsalida, S.s_enlace ,I.img_ruta, A.a_factualizacion, A.a_peso, A.a_descarga, A.a_visita from articulo as A 
    join serie as S
    on S.s_id = A.a_serie
    join imagen as I
    on I.img_id = A.a_portada
    where A.a_serie = idElemento and A.a_estado = 1;
    end if;
    
    if tipo = 3 then
    -- juegos
        update articulo set a_visita = a_visita + 1 where a_juego = idElemento;
	select A.a_titulo, J.j_descripcion, A.a_fsalida, j_caracteristicas ,J.j_enlace ,I.img_ruta, A.a_factualizacion, A.a_peso, A.a_descarga, A.a_visita from articulo as A 
    join juego as J
    on J.j_id = A.a_juego
    join imagen as I
    on I.img_id = A.a_portada
    where A.a_juego = idElemento and A.a_estado = 1;
    end if;
    
    if tipo = 4 then
	-- programa 
    update articulo set a_visita = a_visita + 1 where a_pelicula = idElemento;
	
    select A.a_titulo, P.p_descripcion, P.p_enlace, A.a_fsalida ,I.img_ruta, A.a_factualizacion, A.a_peso, A.a_descarga, A.a_visita from articulo as A 
    join programa as P
    on P.p_id = A.a_programa
    join imagen as I
    on I.img_id = A.a_portada
    where A.a_programa = idElemento and A.a_estado = 1;
    end if;


end
//

call SP_Lectura(1,1);
/*call sp_busqueda ('a', 1);
SELECT * FROM v_catalogo*/



