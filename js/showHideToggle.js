/* Trabalhando com Show, Hide e Toggle */
$(document).ready(function() {
    $('main').css('padding', '20px');
    // Acrescentando um novo elemento depois da TAG 'main'
    $('main').append('<h3>Testando</h3>');

    // Acrescentando um novo elemento antes da TAG 'main'
    $('main').prepend('<h3>Testando</h3>');

    $('main').prepend('<p id="teste">Teste Show, Hide and Toggle</p>');
    $('main').prepend('<button id="showbtn">Show</button>');
    $('main').prepend('<button id="hidebtn">Hide</button>');
    $('main').prepend('<button id="togglebtn">Toggle</button>');

    $('#showbtn').click(function() {
        $('#teste').show(); // Aparecer
    });

    $('#hidebtn').click(function() {
        $('#teste').hide(); // Desaparecer
    });

    $('#togglebtn').click(function() {
        $('#teste').toggle(); // Alterna
    });
});