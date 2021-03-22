/* diseño de base de datos para Programacion Multimedia*/

create database PM_PROYECTO;
use PM_PROYECTO;

create table Usuario(
usu_id int unsigned auto_increment primary key,
usu_correo text not null UNIQUE,
usu_nombre varchar(25) not null,
usu_ap varchar(25) not null,
usu_clave text not null,
usu_fregistro date default now(),
usu_rol int default 1
);
create table Imagen(
img_id int unsigned auto_increment primary key,
img_imagen mediumblob not null,
img_formato varchar(8) not null
);

create table Pelicula(
p_id int unsigned auto_increment primary key,
p_titulo text not null,
p_descripcion text not null,
p_year varchar(4) not null,
p_peso varchar(20) not null,
p_fsubida date default now(),
p_factualizacion date default now(),
p_visita bigint unsigned default 1,
p_activo bool default 1
);
create table Serie(
s_id int unsigned auto_increment primary key,
s_titulo text not null,
s_descripcion text not null,
s_temporada int not null,
s_year varchar(4) not null,
s_peso varchar(20) not null,
s_fsubida date default now(),
s_factualizacion date default now(),
s_visita bigint unsigned default 1,
s_activo bool default 1
);
create table Juego(
j_id int unsigned auto_increment primary key,
j_titulo text not null,
j_descripcion text not null,
j_temporada int not null,
j_year varchar(4) not null,
j_peso varchar(20) not null,
j_fsubida date default now(),
j_factualizacion date default now(),
j_visita bigint unsigned default 1,
j_activo bool default 1
);
create table Programa(
p_id int unsigned auto_increment primary key,
p_titulo text not null,
p_descripcion text not null,
p_version varchar(10) not null,
p_peso varchar(20) not null,
p_fsubida date default now(),
p_factualizacion date default now(),
p_visita bigint unsigned default 1,
p_activo bool default 1
);

create table Reporte_Pelicula(
rp_id_pelicula int unsigned not null,
rp_id_usuario int unsigned not null,
rp_estado bool default 0,
constraint primary key PR_rp_pl_llave(rp_id_promgrama , rp_id_usuario),
constraint foreign key FK_rp_pl_usuario(rp_id_usuario) references Usuario(usu_id) on delete cascade,
constraint foreign key FK_rp_pl_programa(rp_id_programa) references Pelicula(p_id) on delete cascade
);
create table Reporte_Serie(
rs_id_serie int unsigned not null,
rs_id_usuario int unsigned not null,
rs_estado bool default 0,
constraint primary key PR_rpj_llave(rp_id_promgrama , rp_id_usuario),
constraint foreign key FK_rpj_usuario(rp_id_usuario) references Usuario(usu_id) on delete cascade,
constraint foreign key FK_rpj_programa(rp_id_juego) references Serie(s_id) on delete cascade
);
create table Reporte_Juego(
rj_id_juego int unsigned not null,
rj_id_usuario int unsigned not null,
rj_estado bool default 0,
constraint primary key PR_rpj_llave(rp_id_promgrama , rp_id_usuario),
constraint foreign key FK_rpj_usuario(rp_id_usuario) references Usuario(usu_id) on delete cascade,
constraint foreign key FK_rpj_programa(rp_id_juego) references Juego(j_id) on delete cascade
);
create table Reporte_Programa(
rp_id_programa int unsigned not null,
rp_id_usuario int unsigned not null,
rp_estado bool default 0,
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
constraint FK_ij_j foreign key(ij_id_j) references Pelicula(j_id),
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
