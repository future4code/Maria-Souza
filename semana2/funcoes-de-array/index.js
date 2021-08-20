// EXERCÍCIO DE INTERPRETAÇÃO 01

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

// A) 3 linhas, e cada linha contendo a informação (nome e apelido) de um item do array.



// EXERCÍCIO DE INTERPRETAÇÃO 02

  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)

// A) Apenas a informação solicitada (no caso, nome) na lista.



// EXERCÍCIO DE INTERPRETAÇÃO 03

  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)

// A) O primeiro e o segundo item pois estão de acordo com a condição imposta (que seria itens diferentes de Chijo).



// EXERCÍCIOS DE CÓDIGO 01

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // A)
function extrairNomeDoguinhos (pets) {
    return (pets.nome)
}
const nomeDoguinhos = pets.map(extrairNomeDoguinhos)
console.log(nomeDoguinhos)


 // B)
function osSalsichinhas (pets) {
    return pets.raca === "Salsicha"
}
const salsichinhasOnly = pets.filter(osSalsichinhas)
console.log(salsichinhasOnly)


 // C) 
function osPoodles (pets) {
    return pets.raca === "Poodle"
}
function nomePoodles (pets) {
    return pets.nome
}
const poodlesOnly = pets.filter(osPoodles).map(nomePoodles)
console.log(poodlesOnly)
console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${poodlesOnly}!`)



// EXERCÍCIO DE CÓDIGO 02

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // A) 
function extrairNomeProdutos (produtos) {
    return produtos.nome
}
const nomeProdutos = produtos.map(extrairNomeProdutos)
console.log(nomeProdutos)


// B) 
const listaDeDesconto = produtos.map((item) => {
    return { nome: item.nome, preço: (item.preco * 0.95) }
})
console.log(listaDeDesconto)


// C) 
function extrairBebidas (produtos) {
    return produtos.categoria === "Bebidas"
}
const asCachacas = produtos.filter(extrairBebidas)
console.log(asCachacas)


// D) 
function extrairYpe (produtos) {
    return produtos.nome.includes("Ypê")
}
const mostrandoYpe = produtos.filter(extrairYpe)
console.log(mostrandoYpe)


// E)
const vendendoYpe = mostrandoYpe.map((item) => {
    return `Compre ${item.nome} por ${item.preco}` 
})
console.log(vendendoYpe)