
const conta = document.getElementById('conta');
const resultado = document.getElementById('resultado');

const buttons = document.querySelectorAll('#teclado button');

buttons.forEach(function (botao) {
    botao.addEventListener('click', function () {
        const valor = botao.textContent;

        if (botao.id === 'clear') {
            // limpa tudo
        } else if (botao.id === 'equals') {
            // calcula
        } else if (['+', '-', '*', '/'].includes(valor)) {
            // guardou operação, número sobe
        } else {
            // é um número, adiciona no visor
        }
    })
})


let numeroAtual = ''
let numeroAnterior = ''
let operacao = ''