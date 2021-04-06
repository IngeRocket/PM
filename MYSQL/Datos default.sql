use PM_PROYECTO;

select * from imagen;
/*
insert into Imagen(img_ruta,img_formato)values('img/peliculas/1.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/peliculas/2.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/peliculas/3.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/peliculas/4.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/peliculas/5.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/series/1.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/series/2.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/series/3.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/series/4.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/series/5.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/juegos/1.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/juegos/2.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/juegos/3.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/juegos/4.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/juegos/5.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/programas/1.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/programas/2.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/programas/3.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/programas/4.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/programas/5.jpg','JPG');
insert into Imagen(img_ruta,img_formato)values('img/programas/6.jpg','JPG');

describe serie;
insert into serie(s_titulo, s_descripcion,s_temporada,s_year,s_peso) values('The Flash','23/23 episodios 1080p',1,'2014','2.4 GB');
insert into serie(s_titulo, s_descripcion,s_temporada,s_year,s_peso) values('Brooklyn Nine-Nine','24/24 episodios 1080p',1,'2013','4.5 GB');
insert into serie(s_titulo, s_descripcion,s_temporada,s_year,s_peso) values('The Big Bang Theory','17/17 episodios 1080p',1,'2007','3.6 GB');
insert into serie(s_titulo, s_descripcion,s_temporada,s_year,s_peso) values('Arrow','23/23 episodios 1080p',1,'2012','5.9 GB');
insert into serie(s_titulo, s_descripcion,s_temporada,s_year,s_peso) values('Smallville','21/21 episodios 720p',1,'2001','4.8 GB');

insert into imagen_serie(is_id_s,is_id_img,is_portada)values(1,6,1);
insert into imagen_serie(is_id_s,is_id_img,is_portada)values(2,7,1);
insert into imagen_serie(is_id_s,is_id_img,is_portada)values(3,8,1);
insert into imagen_serie(is_id_s,is_id_img,is_portada)values(4,9,1);
insert into imagen_serie(is_id_s,is_id_img,is_portada)values(5,10,1);

select * from imagen;
select * from serie;
select * from imagen_Serie; 
*/
describe articulo;
select * from imagen;
select * from serie;
insert into serie(s_descripcion,s_temporada) values('Descripcion de serie 1',1);
insert into serie(s_descripcion,s_temporada) values('Descripcion de serie 2',1);
insert into serie(s_descripcion,s_temporada) values('Descripcion de serie 3',1);
insert into serie(s_descripcion,s_temporada) values('Descripcion de serie 4',1);
insert into serie(s_descripcion,s_temporada) values('Descripcion de serie 5',1);

insert into pelicula(p_descripcion) values('Descripcion de pelicula 1');
insert into pelicula(p_descripcion) values('Descripcion de pelicula 2');
insert into pelicula(p_descripcion) values('Descripcion de pelicula 3');
insert into pelicula(p_descripcion) values('Descripcion de pelicula 4');
insert into pelicula(p_descripcion) values('Descripcion de pelicula 5');

insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_serie) values('The Flash',6,'2014','2.4 GB',1);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_serie) values('Brooklyn Nine-Nineh',7,'2013','2.4 GB',2);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_serie) values('The Big Bang Theory',8,'2007','2.4 GB',3);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_serie) values('Arrow',9,'2012','2.4 GB',4);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_serie) values('Smallville',10,'2001','2.4 GB',5);

insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_pelicula) values('Sonic',1,'2020','2.4 GB',1);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_pelicula) values('Ready Player One',2,'2018','4.4 GB',2);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_pelicula) values('Dr Strange',3,'2016','3.2 GB',3);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_pelicula) values('Avengers: Intinity War',4,'2018','4.8 GB',4);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_pelicula) values('Big 6 Hero',5,'2014','3.6 GB',5);
/*		VISTAS		*/
/* HACER LO MISMO CON LA CATEGORIA DE PELICULAS, PROGRAMAS Y JUEGOS*/
select * from articulo where a_serie is not null;
/*
DELIMITER //
create view V_Series as
select S.s_id ID, S.s_titulo Serie, S.s_year Estreno, S.s_fsubida Subida, I.img_ruta Portada, S.s_peso Peso, S.s_visita Visitas from Imagen as I
join imagen_serie as IMGS
on IMGS.is_id_img = I.img_id
join Serie as S
on S.s_id = IMGS.is_id_s;
//
*/
describe articulo;
SELECT * FROM V_SERIES;
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

select * from V_CATALOGO_PELICULA order by Estreno;
select * from V_CATALOGO_SERIE order by Subido, Estreno desc;