
call SP_Login('IngeRocket','IngeRocket');
call SP_Registro('IngeRocket','IngeRocket@correo.com','IngeRocket');
call SP_Registro('Mangano','Mangano@correo.com','Mangano');
call SP_Login('IngeRocket@correo.com','IngeRocket');
call SP_Login('IngeRocket','IngeRocket');
call SP_Login('IngeRocket','IngeRocket0');
select * from usuario;
select * from v_reportes;
call SP_AltaReporte(2,2);
select * from reportearticulo;

call SP_ConsultaReporte(4,2);