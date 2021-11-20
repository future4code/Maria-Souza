const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch (operacao) {
	case "soma":
		console.log('\x1b[36m', "Resposta: ", num1 + num2)
		break
	case "sub":
		console.log('\x1b[36m', "Resposta: ", num1 - num2)
		break
    case "div":
        console.log('\x1b[36m', "Resposta: ", num1 / num2)
        break
    case "mult":
        console.log('\x1b[36m', "Resposta: ", num1 * num2)
        break
    default:
        console.log('\x1b[31m' ,"digite uma operação válida! Pode ser soma, sub, div ou mult")
}

console.log('\x1b[35m', "Você digitou: ", operacao)