use PM_PROYECTO;
# drop procedure SP_Login;
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
	/*set usuId = (select usu_id from usuario where usu_correo = usuario OR usu_nickname = usuario);
    set usuemail = (select usu_correo from usuario where usu_correo = usuario OR usu_nickname = usuario);
    set usuname = (select usu_nickname from usuario where usu_correo = usuario OR usu_nickname = usuario);*/
	select Resultado, usu_id usuId, usu_correo usuemail, usu_nickname usuname, usu_rol Rol from usuario where usu_correo = usuario OR usu_nickname = usuario;
else
	select Resultado;
end if;

end;
//

DELIMITER //
create procedure SP_Registro(usuario varchar(25), correo varchar(60), clave text)
begin
DECLARE existencia int;
DECLARE direccion int;
DECLARE nombre int;
DECLARE clave2 text;
	set existencia  =	(SELECT IF( EXISTS( SELECT usu_nickname FROM usuario WHERE usu_correo = correo OR usu_nickname = usuario), 1, 0) );
	
    if existencia = 1 then
    #mensaje especifico
			set direccion = (SELECT IF( EXISTS( SELECT usu_nickname FROM usuario WHERE usu_correo = correo), 1, 0) );
			set nombre = (SELECT IF( EXISTS( SELECT usu_nickname FROM usuario WHERE usu_nickname = usuario), 1, 0) );
        
			if direccion = 1 and nombre = 1 then
				select '0' Resultado, 'El nombre de usuario y direccion de correo electronico NO estan disponibles para registro' Mensaje;
            else
				if direccion = 1 then
					select '0' Resultado, 'La direccion de correo electronico NO esta disponible para registro' Mensaje;
				else
                    select '0' Resultado, 'El nombre de usuario NO esta disponible para registro' Mensaje;
                end if;
			end if;
	else
	# mensaje de exito
		set clave2 = SHA1(clave);
		insert into usuario(usu_correo, usu_nickname, usu_clave, usu_fregistro) values (correo, usuario, clave2, date( now() ) );
		select '1' Resultado, 'Registro exitoso' Mensaje, correo 'Correo';
   
    end if;
end;
//
#DROP PROCEDURE SP_DESTACADO;
DELIMITER //
create procedure SP_Destacado()
begin
# meter datos a nueva tabla
INSERT INTO destacado (d_articulo, d_titulo, d_imagen, d_pelicula, d_serie, d_juego, d_programa, d_nuevo) 
SELECT ID, Titulo, Ruta, Pelicula, Serie, Juego, Programa, 0 FROM v_catalogo WHERE Pelicula is not null order by Visitas desc limit 5;

INSERT INTO destacado (d_articulo, d_titulo, d_imagen, d_pelicula, d_serie, d_juego, d_programa, d_nuevo) 
SELECT ID, Titulo, Ruta, Pelicula, Serie, Juego, Programa, 0 FROM v_catalogo WHERE Serie is not null order by Visitas desc limit 5;

INSERT INTO destacado (d_articulo, d_titulo, d_imagen, d_pelicula, d_serie, d_juego, d_programa, d_nuevo) 
SELECT ID, Titulo, Ruta, Pelicula, Serie, Juego, Programa, 0 FROM v_catalogo WHERE Juego is not null order by Visitas desc limit 5;

INSERT INTO destacado (d_articulo, d_titulo, d_imagen, d_pelicula, d_serie, d_juego, d_programa, d_nuevo) 
SELECT ID, Titulo, Ruta, Pelicula, Serie, Juego, Programa, 0 FROM v_catalogo WHERE Programa is not null order by Visitas desc limit 5;

end;
//
#DROP PROCEDURE SP_Reciente;
DELIMITER //
create procedure SP_Reciente()
begin
#insertar contenido reciente a la tabla nuevo
INSERT INTO destacado (d_articulo, d_titulo, d_imagen, d_pelicula, d_serie, d_juego, d_programa, d_nuevo) 
SELECT ID, Titulo, Ruta, Pelicula, Serie, Juego, Programa, 1 FROM v_catalogo WHERE Pelicula is not null order by ID desc limit 5;

INSERT INTO destacado (d_articulo, d_titulo, d_imagen, d_pelicula, d_serie, d_juego, d_programa, d_nuevo) 
SELECT ID, Titulo, Ruta, Pelicula, Serie, Juego, Programa, 1 FROM v_catalogo WHERE Serie is not null order by ID desc limit 5;

INSERT INTO destacado (d_articulo, d_titulo, d_imagen, d_pelicula, d_serie, d_juego, d_programa, d_nuevo) 
SELECT ID, Titulo, Ruta, Pelicula, Serie, Juego, Programa, 1 FROM v_catalogo WHERE Juego is not null order by ID desc limit 5;

INSERT INTO destacado (d_articulo, d_titulo, d_imagen, d_pelicula, d_serie, d_juego, d_programa, d_nuevo) 
SELECT ID, Titulo, Ruta, Pelicula, Serie, Juego, Programa, 1 FROM v_catalogo WHERE Programa is not null order by ID desc limit 5;
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

DECLARE idarticulo int;
set idArticulo = idElemento;
	if tipo = 1 then
	set idElemento = (select a_pelicula from articulo where a_id = idArticulo);
	end if;
	if tipo = 2 then
	set idElemento = (select a_serie from articulo where a_id = idArticulo);
	end if;
    if tipo = 3 then
	set idElemento = (select a_juego from articulo where a_id = idArticulo);
	end if;
    if tipo = 4 then
	set idElemento = (select a_programa from articulo where a_id = idArticulo);
	end if;

	if tipo = 1 then
		-- se esta buscando en peliculas
    update articulo set a_visita = a_visita + 1 where a_pelicula = idElemento;
        
	select A.a_titulo Titulo, P.p_descripcion Descripcion, A.a_fsalida Fsalida,P.p_enlace Enlace, I.img_ruta Ruta, A.a_factualizacion Factualizacion, A.a_peso Peso, A.a_descarga Descargas, A.a_visita Visitas from articulo as A 
    join pelicula as P
    on P.p_id = A.a_pelicula
    join imagen as I
    on I.img_id = A.a_portada
    where A.a_pelicula = idElemento and A.a_estado = 1;
    end if;
    
    if tipo = 2 then
    -- series
        update articulo set a_visita = a_visita + 1 where a_serie = idElemento;
	select A.a_titulo Titulo, S.s_descripcion Descripcion, A.a_fsalida Fsalida, S.s_enlace Enlace, I.img_ruta Ruta, A.a_factualizacion Factualizacion, A.a_peso Peso, A.a_descarga Descargas, A.a_visita Visitas from articulo as A 
    join serie as S
    on S.s_id = A.a_serie
    join imagen as I
    on I.img_id = A.a_portada
    where A.a_serie = idElemento and A.a_estado = 1;
    end if;
    
    if tipo = 3 then
    -- juegos
        update articulo set a_visita = a_visita + 1 where a_juego = idElemento;
	select A.a_titulo Titulo, J.j_descripcion Descripcion, A.a_fsalida Fsalida, j_caracteristicas Caracteristicas,J.j_enlace Enlace, I.img_ruta Ruta, A.a_factualizacion Factualizacion, A.a_peso Peso, A.a_descarga Descargas, A.a_visita Visitas from articulo as A 
    join juego as J
    on J.j_id = A.a_juego
    join imagen as I
    on I.img_id = A.a_portada
    where A.a_juego = idElemento and A.a_estado = 1;
    end if;
    
    if tipo = 4 then
	-- programa 
    update articulo set a_visita = a_visita + 1 where a_programa = idElemento;
	
    select A.a_titulo Titulo, P.p_descripcion Descripcion, P.p_caracteristicas Caracteristicas, P.p_version 'Version', P.p_enlace Enlace, A.a_fsalida Fsalida, I.img_ruta Ruta, A.a_factualizacion Factualizacion, A.a_peso Peso, A.a_descarga Descargas, A.a_visita Visitas from articulo as A 
    join programa as P
    on P.p_id = A.a_programa
    join imagen as I
    on I.img_id = A.a_portada
    where A.a_programa = idElemento and A.a_estado = 1;
    end if;


end;
//

#Usuario reporta
DELIMITER //
create procedure SP_AltaReporte(idusuario int, idarticulo int)
begin
	DECLARE Resultado int;
    
	set Resultado =	(SELECT IF( EXISTS( SELECT ra_fecha FROM reportearticulo WHERE ra_id_usuario = idusuario AND ra_id_articulo = idarticulo ),1,0) );
    
    if Resultado = 1 then
		select '1' Resultado, 'Ya realizaste un reporte a este articulo con anterioridad' Mensaje;
		else
        insert into reportearticulo(ra_id_usuario, ra_id_articulo,ra_reporte_motivo)values(idusuario,idarticulo,1);
        select '1' Resultado, 'Reporte realizado con exito' Mensaje;
    end if;
    
end;
//
#drop procedure SP_ConsultaReporte;
DELIMITER //
create procedure SP_ConsultaReporte(idarticulo int, opcion int)
begin
		# opcion 1 lista de reportes
	if opcion = 1 then
		select ID, Ruta, Titulo, count(*) 'Reportes' from v_reportes
		group by Titulo
		order by Fecha asc;
	end if;
    
		# opcion 2 descripcion de reporte de articulo especifico
	if opcion = 2 then
		select ID, Ruta, Usuario, Correo, Motivo, Fecha  from v_reportes
		where ID = idarticulo
        order by Fecha asc;
	end if;
end;
//

#drop procedure SP_SolucionReporte;
DELIMITER //
create procedure SP_SolucionReporte(idarticulo int)
begin
# primero traer a los correos de los usuarios, luego borrar registros de la tabla de reportes
		select Titulo, Usuario, Correo, Fecha  from v_reportes
		where ID = idarticulo
        order by Fecha asc;
        
        delete from reportearticulo where ra_id_articulo = idarticulo;
        
        update articulo set a_estado = 1 where a_id = idarticulo;
end;
//

#drop procedure SP_Principal;
DELIMITER //
create procedure SP_Principal()
begin
call SP_Destacado();
call SP_Reciente();
select d_articulo ID, d_titulo Titulo, d_imagen Ruta, d_pelicula Pelicula, d_serie Serie, d_juego Juego, d_programa Programa, d_nuevo Nuevo from destacado;
truncate table destacado;
end;
//
call SP_Principal();

call SP_ConsultaReporte(1,1);

/*
select * from articulo;
CALL SP_Lectura(23,3);
CALL SP_Lectura(1,1);
CALL SP_Lectura(1,4);
select * from V_catalogo_programa;
CALL SP_Lectura(15,3);
select * from articulo where a_id = 23;
CALL SP_Reciente(1);

select * from v_reportes;
select * from usuario;

