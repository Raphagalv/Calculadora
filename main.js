
const conta = document.getElementById('conta');
const resultado = document.getElementById('resultado');

const buttons = document.querySelectorAll('#teclado button');

buttons.forEach(function (botao) {
    botao.addEventListener('click', function () {
        const valor = botao.textContent;

        if (botao.id === 'clear') {
            // limpa tudo
            numeroAtual = ''
            numeroAnterior = ''
            operacao = ''
            conta.textContent = ''
            resultado.textContent = ''
        } else if (botao.id === 'equals') {
            // lógica calculos
            if (numeroAnterior === '' || numeroAtual === '')
                return

            const num1 = parseFloat(numeroAnterior)
            const num2 = parseFloat(numeroAtual)
            let calculo = 0

            if (operacao === '+') calculo = num1 + num2
            if (operacao === '-') calculo = num1 - num2
            if (operacao === '*') calculo = num1 * num2
            if (operacao === '/') calculo = num1 / num2

            conta.textContent = numeroAnterior + ' ' + operacao + ' ' + numeroAtual + ' ='
            resultado.textContent = calculo
            numeroAtual = String(calculo)
            numeroAnterior = ''
            operacao = ''
        } else if (['+', '-', '*', '/'].includes(valor)) {
            // guarda a operação e sobe numero
            if (numeroAtual === '' && numeroAnterior === '') return

            if (numeroAtual === '' && operacao !== '') {
                operacao = valor 
                conta.textContent = numeroAnterior + ' ' + operacao
                return
            }

            operacao = valor
            numeroAnterior = numeroAtual
            numeroAtual = ''
            conta.textContent = numeroAnterior + ' ' + operacao
            resultado.textContent = ''
        } else {
            // Se é numero adiciona no visor

            if (valor === ',' && numeroAtual === '') {
                numeroAtual = '0,'
            } else if (valor === ',' && numeroAtual.includes(',')) {
                return
            } else {
                numeroAtual += valor
            }
            resultado.textContent = numeroAtual
        }
    })
})


let numeroAtual = ''
let numeroAnterior = ''
let operacao = ''