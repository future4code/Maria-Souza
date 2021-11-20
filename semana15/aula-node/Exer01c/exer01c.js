const nome = process.argv[2]
const idade = process.argv[3]
const idadeMaisSete = Number(idade) + 7

console.log('\x1b[33m%s\x1b[0m', `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeMaisSete}`)