/* Começando a desenvolver com JQuery */

$(document).ready(function() {
    /* este é um seletor JQuer que muda o conteudo 
       de qualquer TAG do html atraves do id 
       $(selector).html(htmlString);
    */

    $('#titulo').html('JQuery - Danilo Righetto');
    $('#desc').html('Curso basico de JQuery');

    // Fazendo o header desaparecer
    $('header').hide();

    // Trocando a cor do texto da TAG h1
    $('h1').css('color', 'red');

    /* Modelo do seletor utilizado no exemplo acima 
    $(selector).css(propertyName, value);
    */

    //Criando um botão para executar o hide()

    $('button').click(function() {
        $(this).css('color', 'blue');
        alert('Botao azul clicado!');
    });

    // Pega o valor da DIV e atribui a uma variavel
    var bird = $('#bird').html();
    $('#bird2').html(bird + ' voando com JQuery <br />');

    //Para acessar a DIV usando a classe
    var alerta = $('.bird').html();
    alert(alerta);

    // trocando a cor da ultima classe 'title' para 'green'
    $('.title:last').css('color', 'green');


});