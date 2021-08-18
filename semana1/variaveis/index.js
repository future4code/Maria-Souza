// EXERCÍCIO 01 - INTERPRETAÇÃO

let a = 10
let b = 10

console.log(b) // Será impresso o valor de b (10)

b = 5
console.log(a, b) // Será impresso o valor de a (10) e b (5)

// EXERCÍCIO 02 - INTERPRETAÇÃO

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) // Será impresso o valor de a (10), b (10) e c (10)

// EXERCÍCIO 03 - INTERPRETAÇÃO

let p = prompt("Quantas horas você trabalha por dia?") // p deveria ser horaTrabalho
let t = prompt("Quanto você recebe por dia?") // t deveria ser salarioDia
alert(`Voce recebe ${t/p} por hora`) // O alerta seria então "${horaTrabalho/salarioDia} por hora"

// EXERCÍCIO 01 - ESCRITA

let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

// Os dois foram definidos como undefined no console do navegador pois não possuem valor atribuído.

const nome = prompt("Qual seu nome?")
const idade = prompt("Qual sua idade?")

console.log(nome)
console.log(idade)
console.log("Nome:", typeof nome, "Idade:", typeof idade)

// Os dois aparecem como string no console pois seus valores foram atribuídos por texto no prompt.

console.log("Olá", nome, "você tem", idade, "anos.")

// EXERCÍCIO 02 - ESCRITA

const chuva = prompt("Está chovendo?")
const comida = prompt("Você comeu bolo hoje?")
const clima = prompt("Está calor?")

console.log("Está chovendo?", chuva) 
console.log("Você comeu bolo hoje?", comida)
console.log("Está calor?", clima)

// EXERCÍCIO 03 - ESCRITA

let a = 10
let b = 25
let c

a = c
b = a
c = b

console.log("O novo valor de a é", a) // O novo valor é 25
console.log("O novo valor de b é", b) // O novo valor é 10

// DESAFIO

let primeiroNumero = Number(prompt("Digite um número entre 1 e 100"))
let segundoNumero = Number(prompt("Digite outro número entre 1 e 100"))

console.log("O primeiro número somado ao segundo número resulta em:", primeiroNumero+segundoNumero)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", primeiroNumero * segundoNumero)