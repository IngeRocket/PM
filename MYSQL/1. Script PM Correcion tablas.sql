create database pm_proyecto;
use pm_proyecto;


create table usuario(
usu_id int unsigned auto_increment primary key,
usu_correo varchar(60) unique,
usu_nickname varchar(25) unique,
usu_clave text not null,
usu_fregistro date,
usu_rol int default 1,
usu_imagen mediumblob null
);


create table pelicula(
p_id int unsigned auto_increment primary key,
p_descripcion text not null
);
create table serie(
s_id int unsigned auto_increment primary key,
s_descripcion text not null,
s_temporada int not null
);
create table juego(
j_id int unsigned auto_increment primary key,
j_descripcion text not null,
j_caracteristicas text not null
);
create table programa(
p_id int unsigned auto_increment primary key,
p_descripcion text not null,
p_caracteristicas text not null,
p_version varchar(10) not null
);

create table imagen(
img_id int unsigned auto_increment primary key,
img_ruta text not null,
img_formato varchar(8) null
);

-- drop table articulo;
create table articulo(
a_id int unsigned auto_increment primary key,
a_titulo text not null,
a_portada int unsigned not null,
a_fsalida varchar(4),
a_fsubida date default ( date(now()) ),
a_factualizacion date default ( date( now() ) ),
a_estado bit default 1,
a_visita int unsigned default 1,
a_peso varchar(15) not null,
a_pelicula int unsigned null,
a_serie int unsigned null,
a_juego int unsigned null,
a_programa int unsigned null,
constraint FK_a_pelicula foreign key (a_pelicula) references pelicula(p_id) on delete cascade,
constraint FK_a_serie foreign key (a_serie) references serie(s_id) on delete cascade,
constraint FK_a_juego foreign key (a_juego) references juego(j_id) on delete cascade,
constraint FK_a_programa foreign key (a_programa) references programa(p_id) on delete cascade,
constraint FK_a_portada foreign key (a_portada) references imagen(img_id) on delete cascade
);

create table reporte(
r_id int unsigned auto_increment primary key,
r_motivo text not null
);

#drop table ReporteArticulo;
create table reportearticulo(
ra_id_usuario int unsigned not null,
ra_id_articulo int unsigned not null,
ra_reporte_motivo int unsigned default 1,
ra_fecha date default (date ( now() )),
constraint FK_ra_id_usuario foreign key (ra_id_usuario) references usuario(usu_id),
constraint FK_ra_id_articulo foreign key (ra_id_articulo) references articulo(a_id),
constraint FK_ra_reporte foreign key (ra_reporte_motivo) references reporte(r_id),
constraint FK_ra_primary primary key (ra_id_articulo, ra_id_usuario)
);

alter table pelicula add column p_enlace text null;
alter table serie add column s_enlace text null;
alter table juego add column j_enlace text null;
alter table programa add column p_enlace text null;
alter table articulo add column a_descarga int unsigned default 0;
/*NUEVAS TABLAS*/

create table destacado(
d_articulo int not null,
d_titulo text,
d_imagen text,
d_pelicula int null,
d_serie int null,
d_juego int null,
d_programa int null,
d_nuevo int unsigned default 0
);



