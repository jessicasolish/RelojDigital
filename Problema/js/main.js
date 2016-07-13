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
