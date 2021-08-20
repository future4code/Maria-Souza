// EXERCÍCIO DE INTERPRETAÇÃO 01

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

/* O resultado é 10. O código coloca como condição que ele repita e some o número 5 enquanto o resultado for menor do que 5.
No caso, ao atingir 10, ele pára de rodar pois 10 é maior do que 5, a condição imposta.
*/



//  EXERCÍCIO DE INTERPRETAÇÃO 02

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

// A) [19, 21, 23, 25, 27, 30]
// B) Por padrão, não. 



// EXERCÍCIO DE INTERPRETAÇÃO 03

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

// 4 asteriscos, 1 por linha.




// EXERCÍCIO DE CÓDIGO 01

let petUsuario = Number(prompt("Quantos bichinhos de estimação você tem? Digite um número."))
const listaBicho = []

// A e B)

if (petUsuario === 0) {
  console.log("Que pena! Você pode adotar um pet!")
} 
for (let i = 0; i < petUsuario; i++) {
if (petUsuario > 0) {
  const nomeBicho = prompt("Que legal! Digite o nome do seu bichinho")
  listaBicho.push(nomeBicho)
} 
}

// C)
console.log(listaBicho)



// EXERCÍCIO DE CÓDIGO 02

const arrayOriginal = [2, 3, 6, 7, 10]

// A)
function imprimeListaOriginal() {
  console.log(arrayOriginal)
}
imprimeListaOriginal()

// B)

function imprimeValorOriginal (arrayOriginal) {
  for (let valorDoOriginal of arrayOriginal) {
    console.log(valorDoOriginal / 10)
  }
}
imprimeValorOriginal(arrayOriginal)
 
// C)
const novoArray = []
  for (let valorPar of arrayOriginal) {
  if (valorPar % 2 === 0) {
    novoArray.push(valorPar)
  }
}
console.log(novoArray)

// D) 
function imprimeOArray (arrayOriginal) {
  let stringsDoArray = []
  let i = 0
  for(let valorDoString of arrayOriginal){
  stringsDoArray.push(`O elemento do index ${i} é: ${valorDoString}`)
  i++
}
console.log(stringsDoArray)
}
imprimeOArray(arrayOriginal)

// E)
let maiorNum = 0
let menorNum = Infinity
function qualMenorMaior(arrayOriginal) {
  for (let i = 0; i < arrayOriginal.length; i++) {
    if(arrayOriginal[i] < menorNum) {
      menorNum = arrayOriginal[i]
    } else if (arrayOriginal[i] > maiorNum ) {
      maiorNum = arrayOriginal[i]
    }
  }
  console.log("O maior número do array é: ", maiorNum)
  console.log("O menor número do array é: ", menorNum)
}
qualMenorMaior(arrayOriginal)
