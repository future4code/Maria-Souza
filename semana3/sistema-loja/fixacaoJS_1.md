```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salarioFixo = 2000
  let valorPorCadaCarro = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05) + salarioFixo
  return valorPorCadaCarro
}
```