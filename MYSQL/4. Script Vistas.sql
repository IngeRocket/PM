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

DELIMITER //
create view V_CATALOGO as 
select a_id ID, I.img_ruta Ruta, a_titulo Titulo, a_visita Visitas, a_peso Peso, a_fsalida Estreno, a_fsubida Subido, a_pelicula Pelicula, a_serie Serie, a_juego Juego, a_programa Programa from articulo 
join imagen as I
on I.img_id = a_portada
order by a_fsalida desc;
//


select * from V_CATALOGO_PELICULA order by Estreno;
select * from V_CATALOGO_SERIE order by Subido, Estreno desc;
select * from V_CATALOGO_Juego; 
select * from V_CATALOGO_Programa;