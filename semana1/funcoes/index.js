// EXERCÍCIO DE INTERPRETAÇÃO 01

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) // 10
console.log(minhaFuncao(10)) // 50

/* A) No caso, o resultado da multiplicação da variável por 5, será também multiplicado por 2 e 10.
Como 'variavél' não tem valor númerico, o resultado será 5 no final. Multiplicando por 2, o primeiro
resultado será 10. O segundo, será 50. */

// B) Ao retirar o console.log dos dois, os resultados não seriam exibidos no console do navegador. 


// EXERCÍCIO DE INTERPRETAÇÃO 02

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// A) Essa função procura a palavra 'cenoura' na frase inserida no prompt.

/* B)
    I. true
    II. true
    III. true -- apesar da frase ser 'cenouras', a raiz principal - cenoura - se encontra presente.
*/


// EXERCÍCIO DE CÓDIGO 01

// A)
function imprimeMeusDados() {
    console.log("Eu sou a Maria, tenho 32 anos, moro no Rio de Janeiro e sou estudante da Labenu.")
}

imprimeMeusDados()

// B)
function seusDados(nomeUser, idadeUser, enderecoUser, profissaoUser) {
    const dadosUsuario = "Eu sou a " + nomeUser + "," + " tenho " + idadeUser + " anos, moro em " + enderecoUser + " e sou " + profissaoUser + "."
    return dadosUsuario
}

console.log(seusDados("Batatinha", 24, "Rua da Batata", "Caçadora de Hambúrguer"))


// EXERCÍCIO DE CÓDIGO 02

// A)
function somaUm(numUm, numDois) {
    const somaTotal = numUm + numDois 
    return somaTotal
}

console.log("A soma de 4 + 4 é", somaUm(4, 4))

// B)
function ehBoolean(numeroUm, numeroDois) {
    const compara = numeroUm >= numeroDois
    return compara
}

console.log("3 é maior ou igual a 5?", ehBoolean(3, 5))

// C)
function ehPar(seraQueEhPar) {
    const comparaPar = seraQueEhPar % 2 === 0
    return comparaPar
}

console.log("O número 8 é par?", ehPar(8))

// D)
function imprimeMensagem() {
    const mensagemManeira = "Eu gosto de bolo de aipim! / " + " Eu gosto de bolo de aipim!".length + " / Eu gosto de bolo de aipim!".toUpperCase()
    return mensagemManeira
}

console.log(imprimeMensagem())

// D

// Não deu tempo de fazer ainda. =/ 