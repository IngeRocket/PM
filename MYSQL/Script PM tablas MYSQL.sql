/* diseño de base de datos para Programacion Multimedia*/
/* AGREGAR CALIDAD EN SERIES Y PELICULAS */
create database PM_PROYECTO;
use PM_PROYECTO;


create table Usuario(
usu_id int unsigned auto_increment primary key,
usu_correo varchar(60) unique,
usu_nickname varchar(25) unique,
usu_clave text not null,
usu_fregistro date,
usu_rol int default 1,
usu_imagen mediumblob null
);

create table Imagen(
img_id int unsigned auto_increment primary key,
img_ruta text not null,
img_formato varchar(8) null
);

create table Reporte_Pelicula(
rp_id_pelicula int unsigned not null,
rp_id_usuario int unsigned not null,
rp_estado bool default 0,
rp_freporte date default (date( now() ) ),
rp_fsolucion date default (date( now() ) ),
constraint primary key PR_rp_pl_llave(rp_id_promgrama , rp_id_usuario),
constraint foreign key FK_rp_pl_usuario(rp_id_usuario) references Usuario(usu_id) on delete cascade,
constraint foreign key FK_rp_pl_programa(rp_id_programa) references Pelicula(p_id) on delete cascade
);
create table Reporte_Serie(
rs_id_serie int unsigned not null,
rs_id_usuario int unsigned not null,
rs_estado bool default 0,
rs_freporte date default (date( now() ) ),
rs_fsolucion date default (date( now() ) ),
constraint primary key PR_rpj_llave(rp_id_promgrama , rp_id_usuario),
constraint foreign key FK_rpj_usuario(rp_id_usuario) references Usuario(usu_id) on delete cascade,
constraint foreign key FK_rpj_programa(rp_id_juego) references Serie(s_id) on delete cascade
);
create table Reporte_Juego(
rj_id_juego int unsigned not null,
rj_id_usuario int unsigned not null,
rj_estado bool default 0,
rj_freporte date default (date( now() ) ),
rj_fsolucion date default (date( now() ) ),
constraint primary key PR_rpj_llave(rp_id_promgrama , rp_id_usuario),
constraint foreign key FK_rpj_usuario(rp_id_usuario) references Usuario(usu_id) on delete cascade,
constraint foreign key FK_rpj_programa(rp_id_juego) references Juego(j_id) on delete cascade
);
create table Reporte_Programa(
rp_id_programa int unsigned not null,
rp_id_usuario int unsigned not null,
rp_estado bool default 0,
rp_freporte date default (date( now() ) ),
rp_fsolucion date default (date( now() ) ),
constraint primary key PR_rp_prg_llave(rp_id_promgrama , rp_id_usuario),
constraint foreign key FK_rp_prg_usuario(rp_id_usuario) references Usuario(usu_id) on delete cascade,
constraint foreign key FK_rp_prg_programa(rp_id_programa) references Programa(p_id) on delete cascade
);

create table Imagen_Pelicula(
ip_id_p int unsigned not null,
ip_id_img int unsigned not null,
ip_portada bool default 0,
constraint primary key(ip_id_p, ip_id_img),
constraint FK_ip_p foreign key(ip_id_p) references Pelicula(p_id),
constraint FK_ip_img foreign key(ip_id_img) references Imagen(img_id)
);
create table Imagen_Serie(
is_id_s int unsigned not null,
is_id_img int unsigned not null,
is_portada bool default 0,
constraint primary key(is_id_s, is_id_img),
constraint FK_is_s foreign key(is_id_s) references Serie(s_id),
constraint FK_is_img foreign key(is_id_img) references Imagen(img_id)
);
create table Imagen_Juego(
ij_id_j int unsigned not null,
ij_id_img int unsigned not null,
ij_portada bool default 0,
constraint primary key(ij_id_j, ij_id_img),
constraint FK_ij_j foreign key(ij_id_j) references Juego(j_id),
constraint FK_ij_img foreign key(ij_id_img) references Imagen(img_id)
);
create table Imagen_Programa(
iprg_id_p int unsigned not null,
iprg_id_img int unsigned not null,
iprg_portada bool default 0,
constraint primary key(iprg_id_p, iprg_id_img),
constraint FK_iprg_p foreign key(iprg_id_p) references Programa(p_id),
constraint FK_iprg_img foreign key(iprg_id_img) references Imagen(img_id)
);
DELIMITER //
//
