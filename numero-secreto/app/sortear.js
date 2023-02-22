//console.log('estou aqui')

const menor_valor = 1
const maior_valor = 1000

const numero_secreto = gerar_numero() //variável que representa o número aleatório

function gerar_numero() {
    return parseInt(Math.random() * maior_valor + 1) //função math.random para gerar um aleatório
    //como pega números de 0 a 1, multiplicar pelo maior valor + 1 para virar inclusivo e pegar a parte inteira
}

console.log('Número secreto: ', numero_secreto)

//Altera no HTML os valores definidos como maior e menor valor
const elemento_menor_valor = document.getElementById('menor-valor')
elemento_menor_valor.innerHTML = menor_valor

const elemento_maior_valor = document.getElementById('maior-valor')
elemento_maior_valor.innerHTML = maior_valor