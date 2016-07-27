/* Usando animação */

$(document).ready(function() {
    $('main').prepend('<button id="animatebtn">Animate</button>');


    // Inserindo uma animação
    $('#animatebtn').click(function() {
        $('#test').animate({
            'font-size': '4em'
        }, 2000, function() {
            // Função para executar
            // Quando a animação terminar
            $(this).css('border-color', 'red');
        });
    });
});