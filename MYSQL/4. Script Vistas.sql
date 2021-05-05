DELIMITER //
create view V_CATALOGO_SERIE as 
select a_id ID, I.img_ruta Ruta, a_titulo Titulo, a_visita Visitas, a_peso Peso, a_fsalida Estreno, a_fsubida Subido from articulo 
join imagen as I
on I.img_id = a_portada
where a_serie is not null
order by a_fsalida desc;
//

DELIMITER //
create view V_CATALOGO_PELICULA as 
select a_id ID, I.img_ruta Ruta, a_titulo Titulo, a_visita Visitas, a_peso Peso, a_fsalida Estreno, a_fsubida Subido from articulo 
join imagen as I
on I.img_id = a_portada
where a_pelicula is not null
order by a_fsalida desc;
//

DELIMITER //
create view V_CATALOGO_Juego as 
select a_id ID, I.img_ruta Ruta, a_titulo Titulo, a_visita Visitas, a_peso Peso, a_fsalida Estreno, a_fsubida Subido from articulo 
join imagen as I
on I.img_id = a_portada
where a_juego is not null
order by a_fsalida desc;
//

DELIMITER //
create view V_CATALOGO_Programa as 
select a_id ID, I.img_ruta Ruta, a_titulo Titulo, a_visita Visitas, a_peso Peso, a_fsalida Estreno, a_fsubida Subido from articulo 
join imagen as I
on I.img_id = a_portada
where a_programa is not null
order by a_fsalida desc;
//

#drop view v_catalogo;
DELIMITER //
create view V_CATALOGO as 
select a_id ID, I.img_ruta Ruta, a_titulo Titulo, a_visita Visitas, a_peso Peso, a_fsalida Estreno, a_fsubida Subido, a_pelicula Pelicula, a_serie Serie, a_juego Juego, a_programa Programa from articulo 
join imagen as I
on I.img_id = a_portada
where a_estado = 1
order by a_fsalida desc;
//

#recordar agrupar cuando quira revisar historial y no cantidad de reportes
#drop view V_Reportes;
DELIMITER //
create view V_REPORTES as
select A.a_id ID, I.img_ruta Ruta ,A.a_titulo Titulo, U.usu_nickname Usuario, U.usu_correo Correo, R.r_motivo Motivo, RA.ra_fecha Fecha from reportearticulo as RA
join reporte as R
on RA.ra_reporte_motivo = R.r_id
join articulo as A
on RA.ra_id_articulo = A.a_id
join usuario as U
on RA.ra_id_usuario = U.usu_id
join imagen as I
on A.a_portada = I.img_id;
//

select * from V_CATALOGO_PELICULA order by Estreno;
select * from V_CATALOGO_SERIE order by Subido, Estreno desc;
select * from V_CATALOGO_Juego; 
select * from V_CATALOGO_Programa;
select * from v_catalogo;