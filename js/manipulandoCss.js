/* Manipulando CSS e adicionando Class */
$(document).ready(function() {
    $('#header').addClass('header');
    $('#header').css('height', '60px');
    $('#header').css('padding', '10px');
    $('#title').css('margin-top', '0px');
    $('#title').css('margin-botton', '0px');
    $('#desc').css('margin-top', '0px');

    /* Podemos adicionar inclusive classes do bootstrap */
    // seletor para remover classes usando JQuery
    $(selector).removeClass(className);
});