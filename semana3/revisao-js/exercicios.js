// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   array.sort((a, b) => a - b)
   return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter(i => i % 2 === 0)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   return array.filter(i => i % 2 === 0).map(item => item ** 2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   const maiorNum = array.reverse(array.sort((a, b) => a - b))
   return maiorNum[0]   
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   const [menorNum, maiorNum] = retornaArrayOrdenado([num1, num2])
   return {
      maiorNumero: maiorNum,
      maiorDivisivelPorMenor: maiorNum % menorNum === 0,
      diferenca: maiorNum - menorNum
   }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   const primeirosPares = []
   for (let i = 0; i < n; i++) {
      primeirosPares[i] = 2 * i
   }
   return primeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   if (ladoA === ladoB && ladoB === ladoC) 
      return "Equilátero"
   if (ladoA === ladoC || ladoB === ladoA || ladoB === ladoC)
   return "Isósceles"
   if (ladoA != ladoB || ladoB != ladoC || ladoC != ladoA)
   return "Escaleno"
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   const emOrdem = retornaArrayOrdenado(array)
   const oSegundoMenor = 1
   const oSegundoMaior = array.length - 2

   return [
      emOrdem[oSegundoMaior],
      emOrdem[oSegundoMenor]
   ]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return {
      ...pessoa, 
      nome: "ANÔNIMO"
   }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const ehAutorizada = pessoa => (
      pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60)
      return pessoas.filter(ehAutorizada)

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const naoEhAutorizada = pessoa => (
     pessoa.altura < 1.5 && pessoa.idade < 14 && pessoa.idade > 60)
     return pessoas.filme(naoEhAutorizada)
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
   const soma = (n1, n2) => n1 + n2
   contas.forEach(conta2 => {
   const somaDosGastos = conta2.compras.reduce(soma, 0)
   conta2.saldoTotal = conta2.saldoTotal - somaDosGastos
   conta2.compras = []
})

   return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
   const emOrdemAlfabetica = (a, b) => a.nome > b.nome ? 1: - 1
   return consultas.sort(emOrdemAlfabetica)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}