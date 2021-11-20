type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}


// A) tsc && node exer04.js

// B) Adicionaria ./src/ na frente da linha de comando acima.

// C) Sim, é só digitar tsc nome-do-doc1.js nome-do-doc2.js && node pasta-onde-estão

/*
D)

Configurações que me chamaram a atenção:

  "target": "es6", (versão do Javascript)
  "outDir": "./build", (redireciona para o output)
  "rootDir": "./src", (especifica a pasta raiz)
  "noImplicitAny": true, (mostra um erro em declarações onde há o o tipo "any" implícito)

O arquivo criado nos slides me parece mais compacto, contendo apenas o necessário para tudo funcionar. 
O segundo me pareceu a versão longa dele, com funcionalidades extras.

*/