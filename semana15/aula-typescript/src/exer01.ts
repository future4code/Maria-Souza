
// A) Ocorre um erro onde o Typescript diz que o tipo 'number' não pode ser atribuído ao tipo 'string'.

// B) no caso, podemos adicionar number ao tipo string, ao declarar um | entre as palavras string e number.

// C) e D)

enum cores {
    VIOLETA = "Violeta",
    ANIL = "Anil",
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja",
    VERMELHO = "Vermelho"
}

type pessoas = {
    nome: string,
    idade: number,
    corFavorita: cores
}

const maria: pessoas = {
    nome: "Maria",
    idade: 33,
    corFavorita: cores.VIOLETA
}

const jujuba: pessoas = {
    nome: "Jujuba",
    idade: 10,
    corFavorita: cores.VERDE
}

const paulo: pessoas = {
    nome: "Paulo",
    idade: 68,
    corFavorita: cores.ANIL
}

const monica: pessoas = {
    nome: "Mônica",
    idade: 26,
    corFavorita: cores.LARANJA
}

