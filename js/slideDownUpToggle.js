/* Slide down up e toggle */
/* Serve para criar efeitos e animações */

$(document).ready(function() {
    $('main').prepend('<p id="teste">Teste Show, Hide and Toggle</p>');
    $('main').prepend('<button id="slidedown">SlideDown</button>');
    $('main').prepend('<button id="slideup">SlideUp</button>');
    $('main').prepend('<button id="slidetoggle">SlideToggle</button>');


    // Slide Down - Fecha
    $('#slidedown').click(function() {
        $('#teste').slideDown();
    });

    // Slide Up - Abre
    $('#slideup').click(function() {
        $('#teste').slideUp();
    });

    // Slide Toggle - Alterna
    $('#slidetoggle').click(function() {
        $('#teste').slideToggle();
    });
});