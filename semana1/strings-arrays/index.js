// EXERCÍCIO 01 - INTERPRETAÇÃO

let array
console.log('a. ', array) // a variável não teve valor atribuído, logo, vai aparecer como undefined.

array = null
console.log('b. ', array) // a variável teve valor null atribuído, logo, vai aparecer como null.

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // total será 11.

let i = 0
console.log('d. ', array[i]) /* i foi declarado como 0. Em seguida, ele acessa a lista criada previamente com array. 
O número exibido seria o primeiro da lista ("0"), portanto, 3. */

array[i+1] = 19
console.log('e. ', array) /* Substitui o primeiro item da lista por 19. Ou seja, ficaria 
3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13. */

const valor = array[i+6]
console.log('f. ', valor) // Acessa o 6º número da lista (i = 0, 0 + 6 = 6). Ou seja, 9.


// EXERCÍCIO 02 - INTERPRETAÇÃO

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS, 27.


// EXERCÍCIO 01 - CÓDIGO

const nomeDoUsuario = prompt("Digite o seu nome!")
const emailDoUsuario = prompt("Digite o seu e-mail!")

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso! Seja bem-vinda(o), " + nomeDoUsuario + "!")


// EXERCÍCIO 02 - CÓDIGO

const comidasFavoritas = ["Bolo", "Sushi", "Pastel", "Hambúrguer", "Chocolate"]

// a
console.log(comidasFavoritas)

// b
console.log("Essas são as minhas comidas favoritas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

// c
const comidasFavoritas2 = ["Bolo", "Sushi", "Pastel", "Hambúrguer", "Chocolate"]
const comidaUsuario = prompt("Digite a sua comida favorita!")
const comidasNovas = comidasFavoritas2
comidasNovas.splice(1, 1, comidaUsuario)
console.log(comidasNovas)


// EXERCÍCIO 03 - CÓDIGO

// a
const listaDeTarefas = []

// b
const tarefa1 = prompt("Diga uma tarefa que você precisa fazer!")
const tarefa2 = prompt("Diga outra tarefa que você precisa fazer!")
const tarefa3 = prompt("Finalmente, diga a última tarefa que você precisa fazer!")
listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

// c
console.log(tarefa1)
console.log(tarefa2)
console.log(tarefa3)

// d
const tarefasFeitas = Number(prompt("Qual dessas tarefas você fez hoje? A 0, 1 ou 2?"))

// e
let listaFinal = listaDeTarefas
listaFinal.splice(tarefasFeitas, 1)

// f
console.log(listaFinal)