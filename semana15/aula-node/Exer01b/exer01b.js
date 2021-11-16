const nome = process.argv[2]
const idade = process.argv[3]

console.log('\x1b[36m%s\x1b[0m', `Olá, ${nome}! Você tem ${idade} anos.`)