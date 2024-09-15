
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

const copiaPokemon1 = {...pokemon1};
console.log('Cópia objeto pokemom1', pokemon1);

//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

copiaPokemon2 = {...copiaPokemon1};
copiaPokemon2.nome= "Squirtle",
copiaPokemon2.tipo= "Água",
copiaPokemon2.nível= 5
console.log(copiaPokemon2);

//b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`

copiaPokemon2.ataques = []
copiaPokemon2.ataques.push({
    nome: 'Investida',
    dano: 40,
    tipo: 'Nomal',
    precisao: 100,
})
console.log(copiaPokemon2);

//c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;

copiaPokemon1.ataques = []
console.log(copiaPokemon1);

//d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;

copiaPokemon1.ataques = "Folha Navalha"

//e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;

copiaPokemon2.ataques.push({
    nome: 'Jato de Água',
    dano: 40,
    tipo: 'Água',
    precisao: 100
})
//f) Imprima os dois objetos no console.

console.log(copiaPokemon1);
console.log(copiaPokemon2);