/* Trabalhando com eventos com JQuery */
/* Vamos capturar eventos com JQuery */
$(document).ready(function() {
    $('#click').click(function() {
        // Mudando texto do botão
        $(this).html('Ok');
    });
	
	$('#dbclick').dbclick(function(){
		$(this).html('Ok');
	});

	$('#mouseenter').mouseenter(function(){
		$(this).html('Ok');
	});

	$('#mouseleave').mouseleave(function(){
		$(this).html('Ok');
	});

	$('#keypress').keypress(function(){
		$('#keypress').html('keypress' + $(this).val());
	});

	$('#keydown').keydown(function(){
		$('#keydown').html('keydown' + $(this).val());
	});

	$('#keyup').keyup(function(){
		$('#keyup').html('keyup' + $(this).val());
	});
});