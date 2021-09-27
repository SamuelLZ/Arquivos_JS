// Criação do efeito acordeon
$(function () {
    $("#acordeon").accordion({
        active: false,
        collapsible: true
    });

    // Validação Jquery para o nome
    $("#form").validate({
        debug: true,
        rules: {
            nome: { required: true, minlength: 10 }
        },
        messages: {
            nome: {
                required: "<li>Por favor, digite seu nome.</li>",
                minlength: "<li>Seu nome deve ser maior.</li>"
            }
        }
    });

    // Validação com Jquery
    // Máscara para o CPF
    $('.mask-cpf').mask('999.999.999-99');

    // Máscara para o celular
    $("#cel").mask("(99)9999-9999?9");

    // Máscara para valor de salário
    $('#salario').maskMoney({
        showSymbol: true, symbol: 'R$ ',
        decimal: ',', thousands: '.', allowZero: true
    });
});