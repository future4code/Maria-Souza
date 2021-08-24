/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



console.log("Boas vindas ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {

const cartaUsuario = comprarCarta()
const cartaUsuario2 = comprarCarta()

console.log("Usuário - cartas:", cartaUsuario.texto, cartaUsuario2.texto, "- pontuação:", cartaUsuario.valor + cartaUsuario2.valor)

const cartaComputador = comprarCarta()
const cartaComputador2 = comprarCarta()
console.log("Computador - cartas:", cartaComputador.texto, cartaComputador2.texto, "- pontuação:", cartaComputador.valor + cartaComputador2.valor)

const resultadoUsuario = cartaUsuario.valor + cartaUsuario2.valor
const resultadoComputador = cartaComputador.valor + cartaComputador2.valor

if (resultadoUsuario > resultadoComputador && resultadoUsuario <= 21) {
      console.log("O usuário ganhou! Aeeeee")
} else if (resultadoComputador > resultadoUsuario && resultadoComputador <= 21) {
      console.log("O computador ganhou! Tente de novo.")
} else {   
      console.log("Empate!")
}

} else {
   console.log("O jogo acabou.")
}


