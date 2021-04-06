use pm_proyecto;


create table Pelicula(
p_id int unsigned auto_increment primary key,
p_descripcion text not null
);
create table Serie(
s_id int unsigned auto_increment primary key,
s_descripcion text not null,
s_temporada int not null
);
create table Juego(
j_id int unsigned auto_increment primary key,
j_descripcion text not null,
j_caracteristicas text not null
);
create table Programa(
p_id int unsigned auto_increment primary key,
p_descripcion text not null,
p_caracteristicas text not null,
p_version varchar(10) not null
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