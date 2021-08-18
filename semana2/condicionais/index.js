// EXERCÍCIO DE INTERPRETAÇÃO 01

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// A) Ele verifica se o resto da divisão do número que o usuário digitou por 2 é igual a 0.
// B) Números cujo resto da divisão do número inserido por 2 é 0. Ou seja, se é par.
// C) Números cujo resto da divisão do número inserido por 2 é 1. Ou seja, ímpar.



// EXERCÍCIO DE INTERPRETAÇÃO 02

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// A) Para que o usuário escolha uma fruta e veja o seu preço.
// B) O preço da fruta Maçã é R$2.25
// C) Mostraria todos os preços como 5, valor dado ao default.



// EXERCÍCIO DE INTERPRETAÇÃO 03 

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// A) A primeira linha define que o valor da const numero será digitado no prompt pelo usuário.
// B) A mensagem seria "Esse número passou no teste" pois 10 é maior do que 0. No caso de -10, já iria aparecer a outra frase "Essa mensagem é secreta!!!"
/* C) Sim, haverá um erro. No caso, só existe if no código, e não o else para determinar o quê o programa deve fazer em caso do usuário digitar um número
menor do que zero. O certo também seria dar um console.log dentro do else com a mensagem. E, embaixo, ao chamar a função, usar numero e não mensagem. Ficaria assim:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
} else {
    console.log("Essa mensagem é secreta!!!")
}

console.log(numero)
*/



// EXERCÍCIO DE CÓDIGO 01

// A e B)
const idadeUsuario = Number(prompt("Digite a sua idade"))

// C) 
if (idadeUsuario >= 18) {
  console.log("Você pode dirigir!")
} else {
  console.log("Você não pode dirigir!")
}

console.log(idadeUsuario)



// EXERCÍCIO DE CÓDIGO 02

const qualTurno = prompt("Qual o turno que você estuda? Digite M para matutino, V para vespertino ou N para noturno.")

if (qualTurno.toLocaleUpperCase() === "M") {
  console.log("Bom dia!")
} else if (qualTurno.toLocaleUpperCase() === "V") {
  console.log("Boa tarde!")
} else if (qualTurno.toLocaleUpperCase() === "N") {
  console.log("Boa noite!")
} else {
  console.log("Digite um turno válido.")
}



// EXERCÍCIO DE CÓDIGO 03

const qualTurno = prompt("Qual o turno que você estuda? Digite M para matutino, V para vespertino ou N para noturno.").toLocaleUpperCase()

const funcaoUsuario = (turnoUsuario) => {
  switch (turnoUsuario) {
    case "M":
      console.log("Bom dia!")
      break
    case "V":
      console.log("Boa tarde!")
      break
    case "N":
      console.log("Boa noite!")
      break
    default:
      console.log("Digite um turno válido.")
  }
}

funcaoUsuario(qualTurno)



// EXERCÍCIO DE CÓDIGO 04

const generoFilme = prompt("Qual gênero de filme vamos ver?")
const precoFilme = Number(prompt("Quanto que você pode pagar pelo ingresso? Digite o valor em números."))

  if (generoFilme.toLocaleUpperCase() && "fantasia" && precoFilme < 15) {
    console.log("Bom filme!")
  } else {
    console.log("Escolha outro filme :(")
  }