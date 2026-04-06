const conta = document.getElementById('conta');
const resultado = document.getElementById('resultado');
const buttons = document.querySelectorAll('#teclado button');

let numeroAtual = ''
let numeroAnterior = ''
let operacao = ''
let ultimoNumero = ''
let ultimaOperacao = ''
let resultadoCalculado = false

buttons.forEach(function (botao) {
    botao.addEventListener('click', function () {
        const valor = botao.textContent;

        if (botao.id === 'clear') {
            numeroAtual = ''
            numeroAnterior = ''
            operacao = ''
            ultimoNumero = ''
            ultimaOperacao = ''
            resultadoCalculado = false
            conta.textContent = ''
            resultado.textContent = ''

        } else if (botao.id === 'equals') {
            if (numeroAnterior === '' && ultimoNumero === '') return

            let num1, num2, op

            if (numeroAnterior !== '') {
                num1 = parseFloat(numeroAnterior.replace(',', '.'))
                num2 = parseFloat(numeroAtual.replace(',', '.'))
                op = operacao
                ultimoNumero = numeroAtual
                ultimaOperacao = operacao
            } else {
                num1 = parseFloat(resultado.textContent.replace(',', '.'))
                num2 = parseFloat(ultimoNumero.replace(',', '.'))
                op = ultimaOperacao
            }

            let calculo = 0
            if (op === '+') calculo = num1 + num2
            if (op === '-') calculo = num1 - num2
            if (op === '*') calculo = num1 * num2
            if (op === '/') {
                if (num2 === 0) {
                    resultado.textContent = 'Erro'
                    numeroAtual = ''
                    numeroAnterior = ''
                    operacao = ''
                    return
                }
                calculo = num1 / num2
            }
            conta.textContent = num1 + ' ' + op + ' ' + num2 + ' ='

            if (calculo > 999999999 || calculo < -999999999) {
                resultado.textContent = calculo.toExponential(2)
            } else {
                resultado.textContent = parseFloat(calculo.toFixed(10))
            }

            
            numeroAtual = ''
            numeroAnterior = ''
            operacao = ''
            resultadoCalculado = true

        } else if (['+', '-', '*', '/'].includes(valor)) {
            if (numeroAtual === '' && numeroAnterior === '' && !resultadoCalculado) return

            if (resultadoCalculado) {
                numeroAnterior = resultado.textContent
                numeroAtual = ''
                resultadoCalculado = false
                operacao = valor
                conta.textContent = numeroAnterior + ' ' + operacao
                return
            }

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

            if (resultadoCalculado) {
                numeroAtual = ''
                resultadoCalculado = false
            }

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