use PM_PROYECTO;

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

#peliculas descripcion
insert into pelicula(p_descripcion) values('Descripcion de pelicula 1');
insert into pelicula(p_descripcion) values('Descripcion de pelicula 2');
insert into pelicula(p_descripcion) values('Descripcion de pelicula 3');
insert into pelicula(p_descripcion) values('Descripcion de pelicula 4');
insert into pelicula(p_descripcion) values('Descripcion de pelicula 5');
#series descripcion
insert into serie(s_descripcion,s_temporada) values('Descripcion de serie 1',1);
insert into serie(s_descripcion,s_temporada) values('Descripcion de serie 2',1);
insert into serie(s_descripcion,s_temporada) values('Descripcion de serie 3',1);
insert into serie(s_descripcion,s_temporada) values('Descripcion de serie 4',1);
insert into serie(s_descripcion,s_temporada) values('Descripcion de serie 5',1);
#juegos descripcion
insert into juego(j_descripcion,j_caracteristicas)values('Emulador del juego Sonic','compatible con windows 7/8/8.1/10 Requisitos minimos i5 4ta generacion, 4 GB RAM');
insert into juego(j_descripcion,j_caracteristicas)values('Emulador del juego Super Mario Maker','compatible con windows 7/8/8.1/10 Requisitos minimos i5 4ta generacion, 4 GB RAM');
insert into juego(j_descripcion,j_caracteristicas)values('Emulador del juego The Legend of Zelda: Breath of the Wild','compatible con windows 7/8/8.1/10 Requisitos minimos i7 7ta generacion, 8 GB RAM');
insert into juego(j_descripcion,j_caracteristicas)values('Emulador del juego The Legend of Zelda: Majoras Mask 3DS','compatible con windows 7/8/8.1/10 Requisitos minimos i5 7ma generacion, 6 GB RAM');
insert into juego(j_descripcion,j_caracteristicas)values('Emulador del juego Sonic','compatible con windows 7/7/8/8.1/10 Requisitos minimos i5 4ta generacion, 4 GB RAM');
#programas descripcion
insert into programa(p_descripcion,p_caracteristicas,p_version) values('Descripcion de programa 1','Suite de Adobe Para Windows8/8.1/10 x64','CS2020');
insert into programa(p_descripcion,p_caracteristicas,p_version) values('Descripcion de programa 2','Programa de limpieza compatible con Windows 7/8/8.1/10 x32 y x64','2015');
insert into programa(p_descripcion,p_caracteristicas,p_version) values('Descripcion de programa 3','Programa Adobe Photoshop portable Para Windows 7/8/8.1/10 x64','CS6');
insert into programa(p_descripcion,p_caracteristicas,p_version) values('Descripcion de programa 4','Winrar + crack para Windows 7/8/8.1/10 x64','2018');
insert into programa(p_descripcion,p_caracteristicas,p_version) values('Descripcion de programa 5','Office 365 Para Windows 8/8.1/10 x64','2018');
insert into programa(p_descripcion,p_caracteristicas,p_version) values('Descripcion de programa 6','Aftter Effects Para Windows 7/8/8.1/10 x64','C2020');


# Llenado de articulos

#Peliculas
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_pelicula) values('Sonic',1,'2020','2.4 GB',1);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_pelicula) values('Ready Player One',2,'2018','4.4 GB',2);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_pelicula) values('Dr Strange',3,'2016','3.2 GB',3);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_pelicula) values('Avengers: Intinity War',4,'2018','4.8 GB',4);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_pelicula) values('Big 6 Hero',5,'2014','3.6 GB',5);
#Series
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_serie) values('The Flash',6,'2014','2.4 GB',1);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_serie) values('Brooklyn Nine-Nine',7,'2013','2.4 GB',2);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_serie) values('The Big Bang Theory',8,'2007','2.4 GB',3);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_serie) values('Arrow',9,'2012','2.4 GB',4);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_serie) values('Smallville',10,'2001','2.4 GB',5);
# Juegos
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_juego) values('Sonic',11,'2020','5.2 GB', 1);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_juego) values('Super Mario Maker',12,'2020','5.6 GB', 2);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_juego) values('The Legend of Zelda: Breath of the Wild',13,'2015','22 GB', 3);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_juego) values('The Legend of Zelda: Majoras Mask 3DS',14,'2015','6 GB', 4);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_juego) values('ARK',15,'2008','18.6 GB', 5);
# Programas
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_programa) values('Suite CS2020 Adobe',16,'2020','18.6 GB', 1);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_programa) values('CCleaner',17,'2015','2.6 GB', 2);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_programa) values('Photoshop CS6',18,'2016','4.4 GB', 3);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_programa) values('Winrar 2.4.6',19,'2018','2.1 GB', 4);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_programa) values('Microsft Office 365',20,'2018','15.6 GB', 5);
insert into articulo(a_titulo,a_portada,a_fsalida,a_peso,a_programa) values('After Effects CS2020',21,'2020','18.6 GB', 6);

select * from juego;
select * from articulo;
#motivo
insert into Reporte(r_motivo) values('enlace caido');