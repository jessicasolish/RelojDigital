$(function() {
	$("#reloj").on(actual());
	$(".nombreCapital").click(function() {
		var click= this.checked;
		num = $(this).attr("data");
		if (click==true) {
			$("#horaCapital").append('<div id= "time' +num+ '" ></div>');
			capitales(num);
		}else {
			$("#time"+num).remove();
		}
	}); 
});
var num= 0;

function actual() {
    var fecha=new Date(); //Actualizar fecha.
    var hora=fecha.getHours(); //hora actual
    var minuto=fecha.getMinutes(); //minuto actual
    var segundo=fecha.getSeconds(); //segundo actual
    var dia=fecha.getDay(); //día actual
    var mes=fecha.getMonth(); //mes actual
   	var meses=new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	var dias=new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
        if (hora<10) { //dos cifras para la hora
            hora="0"+hora;
            }
        if (minuto<10) { //dos cifras para el minuto
            minuto="0"+minuto;
            }
        if (segundo<10) { //dos cifras para el segundo
            segundo="0"+segundo;
            }
         //ver en el recuadro del reloj:
	setTimeout("actual()",1000); 
    $("#reloj").html(hora+" : "+minuto+" : "+segundo);	
	$("#fecha").html(dias[dia]+ " , "+fecha.getDate()+ " de "+ meses[mes]);
}
