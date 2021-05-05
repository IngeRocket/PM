DELIMITER //
create trigger trg_Reporte 
AFTER INSERT
ON reportearticulo FOR EACH ROW
begin
DECLARE idArticulo int;
DECLARE Cuenta int;

set idArticulo= (select ra_id_articulo from new);
set Cuenta = ( select COUNT(*) from reportearticulo where ra_id_articulo = idArticulo);

if Cuenta = 5 then
	update articulo set a_estado = 0 where a_id = idArticulo;
end if;

end;
//
