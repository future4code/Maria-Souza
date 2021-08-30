`````
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let xVezes = 0
  for (let numero of arrayDeNumeros) {
    if (numero === numeroEscolhido)
    xVezes = 1 + xVezes
  }
  if (xVezes === 0) {
  return "Número não encontrado"
  } else {
  return `O número ${numeroEscolhido} aparece ${xVezes}x`
}}
`````
