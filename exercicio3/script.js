const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

// a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

const pokemon2 = {
    ...pokemon1,
    nome:"Squirtle",
    tipo:"Àgua",
}
// b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`

pokemon1.ataques = [
  
]
const informacoesDeAtaque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,

}

pokemon1.ataques.push(informacoesDeAtaque)


// c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;

pokemon2.informacoesDeAtaque = [...pokemon1.ataques]


// d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;

pokemon1.ataques.push([{
    nome:"Folha Navalha",
    dano: 45,
    tipo:"Grama",
    precisao:100,
}])

// e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;

pokemon2.informacoesDeAtaque.push([{
    nome:"Jato de Agua",
    dano: 40,
    precisao: 100,
    tipo: "Agua",
}])

// f) Imprima os dois objetos no console.
console.log(pokemon1)
console.log(pokemon2)




   




