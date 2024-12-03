// Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

const pokemon2 = {...pokemon1}
// console.log (pokemon2)

pokemon2.nome = "Squirtle"
pokemon2.tipo = "Água"

console.log (pokemon2)

// b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`

pokemon1.ataque1 = []
console.log (pokemon1)

const ataqueInvestida = {nome: "Investida",
dano: 40,
tipo: "Normal",
precisao: 100}

pokemon1.ataque1.push(ataqueInvestida)
console.log (pokemon1.ataque1)

//c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;

// console.log(pokemon2)

pokemon2.ataque2 = [...pokemon1.ataque1]
console.log (pokemon2.ataque2)

// d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;

const ataqueFolhanavalha = {
    ataque: "Folha Navalha",
    dano: 45,
    precisao: 100,
    tipo:"Grama"
}

pokemon1.ataque1 = ataqueFolhanavalha

// console.log (pokemon1)

// e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;

const ataqueJatodeagua = {
    ataque: "Jato de Água",
    dano: 45,
    precisao: 100,
    tipo: "Água"
}

pokemon2.ataque2 = ataqueJatodeagua

// f) Imprima os dois objetos no console.

console.log (pokemon1)
console.log (pokemon2)
