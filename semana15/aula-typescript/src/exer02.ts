// A) e B)

function obterEstatisticas (numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort (
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    type resultado = {
        maior: number,
        menor: number,
        media: number
    }

    const estatisticas: resultado = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}



// C)

type amostraDados = {
    nums: number[]
    obterEstatisticas: (nums: number[]) =>
    object
}

const amostraDeIdades: amostraDados = {
    nums: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: (nums: number[]) => 
        obterEstatisticas
}

console.log(amostraDeIdades)