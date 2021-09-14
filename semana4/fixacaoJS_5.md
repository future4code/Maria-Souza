``````
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
    function extrairNomes (animais) {
    return (animais.nome)
}
const nomeBichos = animais.map(extrairNomes)
return nomeBichos
}
``````
