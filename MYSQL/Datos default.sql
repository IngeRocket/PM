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
/*		VISTAS		*/
/* HACER LO MISMO CON LA CATEGORIA DE PELICULAS, PROGRAMAS Y JUEGOS*/
DELIMITER //
create view V_Series as
select S.s_id ID, S.s_titulo Serie, S.s_year Estreno, S.s_fsubida Subida, I.img_ruta Portada, S.s_peso Peso, S.s_visita Visitas from Imagen as I
join imagen_serie as IMGS
on IMGS.is_id_img = I.img_id
join Serie as S
on S.s_id = IMGS.is_id_s;
//

SELECT * FROM V_SERIES;