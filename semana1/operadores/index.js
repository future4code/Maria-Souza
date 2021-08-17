// EXERCÍCIO DE INTERPRETAÇÃO 01

const bool1 = true
const bool2 = false
const bool3 = !bool2 // negação, seria o contrário de bool2, ou seja, true.

let resultado = bool1 && bool2
console.log("a. ", resultado) // false, bool1 e bool2 não são iguais.

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // false, bool1, bool2 e bool3 não são iguais.

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // true, bool1 ou bool2 é true e como bool3 é igual a !bool2, é true.

console.log("d. ", typeof resultado) // booleano.


// EXERCÍCIO DE INTERPRETAÇÃO 02

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

// RESPOSTA: o colega declarou o prompt errado, então ao invés de somar, ele vai unir, lado a lado, os dois números digitados no prompt da página.


// EXERCÍCIO DE INTERPRETAÇÃO 03

let primeiroNumero = prompt("Digite um numero!")
// o colega declarou o prompt errado, o número desse jeito vai ser reconhecido como string (texto). Ele precisa colocar let primeiroNumero = Number(prompt("Digite um numero!")) para a soma dar certo.
let segundoNumero = prompt("Digite outro numero!")
// mesma coisa aqui! O certo é let segundoNumero = Number(prompt("Digite outro numero!")).

const soma = primeiroNumero + segundoNumero

console.log(soma) // agora sim vai dar certo!


// EXERCÍCIO DE ESCRITA 01

let idade = Number(prompt("Qual sua idade?"))
let idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"))

console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmigo)
console.log("Vocês possuem", idade - idadeAmigo, "anos de diferença.")


// EXERCÍCIO DE ESCRITA 02

let numeroPar = Number(prompt("Digite um número par!"))

console.log("O resto da divisão desse número por 2 é", numeroPar % 2)

// o resto da divisão dos números pares por 2 é sempre 0. Se tentar inserir um número ímpar, o resultado é 1.


// EXERCÍCIO DE ESCRITA 03

const idadeAnos = Number(prompt("Qual a sua idade?"))
let anoAtual = Number(prompt("Qual o ano atual?"))

console.log("Sua idade em meses é", idadeAnos * 12)
console.log("Sua idade em dias é", idadeAnos * 365)
console.log("Sua idade em horas é", idadeAnos * 8766)


// EXERCÍCIO DE ESCRITA 04

let numeroUm = Number(prompt("Digite um número!"))
let numeroDois = Number(prompt("Digite outro número!"))

console.log("O primeiro número é maior que o segundo?", numeroUm > numeroDois)
console.log("O primeiro número é igual ao segundo?", numeroUm === numeroDois)
console.log("O primeiro número é divisível pelo segundo?", numeroUm % numeroDois === 0)
console.log("O segundo número é divisível pelo primeiro?", numeroDois % numeroUm === 0)