// EXERCÍCIO DE INTERPRETAÇÃO 01
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

/* 
A) No primeiro, vai aparecer o nome do primeiro ator da lista (Matheus Nachtergaele).
No segundo, vai retornar o último item da lista elenco (Virginia Cavendish).
No terceiro, vai aparecer o canal Globo, horário 14h.
*/


// EXERCÍCIO DE INTERPRETAÇÃO 02
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// A) Na primeira: Juca, 3, SRD. Na segunda: Juba, 3, SRD. E na terceira: Jubo, 3, SRD.
// B) Ela faz o espalhamento, ou seja, é como se fosse uma cópia dos itens dentro do objeto "cachorro" para os outros.


// EXERCÍCIO DE INTERPRETAÇÃO 03
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// A) O primeiro será impresso como false. O segundo como undefined.
/* B) No primeiro, ele busca pela propriedade "backender", que está definida como false. 
No segundo, gera o resultado undefined pois a propriedade "altura" não foi declarada e nem definida. */


// EXERCÍCIOS DE CÓDIGO 01

// A)
const pessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi"],
}

    function aFuncao(objeto) {
        console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} e ${pessoa.apelidos[2]}.`)
}

aFuncao(pessoa)

// B)
const pessoaAdicao = {
    ...pessoa,
    apelidos: ["Jujuba", "Manjubinha", "Manduxa"]
}

aFuncao(pessoaAdicao)  // NÃO FUNCIONA


// EXERCÍCIOS DE CÓDIGO 02

// A)
const pessoaAmiga = {
    nome: "Débora",
    idade: 33,
    profissao: "Tatuadora"
}

const pessoaAmiga2 = {
    nome: "Elvis",
    idade: 28,
    profissao: "Médico"
}

// B) 
function funcaoAmigos(dadosAmigos) {
    return [dadosAmigos.nome, dadosAmigos.nome.length, dadosAmigos.idade, dadosAmigos.profissao, dadosAmigos.profissao.length]
}

console.log(funcaoAmigos(pessoaAmiga))
console.log(funcaoAmigos(pessoaAmiga2))


// EXERCÍCIO DE CÓDIGO 03

// Não deu tempo de fazer. =(