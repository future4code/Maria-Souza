// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite aqui a altura do retângulo"))
  const largura = Number(prompt("Digite aqui a largura do retângulo"))
  const areaRetangulo = altura * largura
  console.log(areaRetangulo)
  return areaRetangulo
}
calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Digite o ano em que você nasceu"))
  const idadeUsuario = anoAtual - anoNascimento
  console.log(idadeUsuario)
  return idadeUsuario
}
imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return (peso / (altura * altura))
}
calculaIMC(75, 1.80)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt("Digite o seu nome")
  const idadeUsuariio = Number(prompt("Digite a sua idade"))
  const emailUsuario = prompt("Digite o seu e-mail")
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuariio} anos, e o meu email é ${emailUsuario}.`)
  return 
}
imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const corUm = prompt("Diga uma cor que você gosta!")
  const corDois = prompt("Diga outra cor que você gosta!")
  const corTres = prompt("Diga mais uma cor que você gosta!")
  const arrayCores = [corUm, corDois, corTres]
  console.log(arrayCores)
  return
}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const emMaiuscula = string.toUpperCase()
  return emMaiuscula
}
retornaStringEmMaiuscula("Eu gosto de bolo de aipim")

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const precisaVender = custo / valorIngresso
  return precisaVender
}
calculaIngressosEspetaculo()

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return (string1.length === string2.length)
}
checaStringsMesmoTamanho()

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return (array[0])
}
retornaPrimeiroElemento()

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length -1]
}
retornaUltimoElemento()

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
   const n1 = array[0]
   const n2 = array[array.length - 1]
   array[0] = n2
   array[array.length - 1] = n1
   return array
}
trocaPrimeiroEUltimo()

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return (string1 >= string2)
}
checaIgualdadeDesconsiderandoCase

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}