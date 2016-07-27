// Validando formulario

$(document).ready(function() {
    $('form').submit(function() {
        //Pegando valores dos 'input'
        var name = $(':input[name=name]').val();
        var email = $(':input[name=email]').val();
        var tel = $(':input[name=tel]').val();
        var term = $(':input[name=name]').is(":checked");

        var errors = "";
        $('#errors').html("");

        //validando os dados
        if (name === "") {
            errors += "Preencha um nome;";
        }

        if (email === "") {
            errors += "Preencha um email;";
        }

        if (tel === "") {
            errors += "Preencha um telefone;";
        }

        if (term === false) {
            errors += "Aceite os termos;";
        }

        if (errors) {
            $('#errors').append(errors);
            return false;
        } else {
            return true;
        }

        // 'return false' cancela o submit

    });
});