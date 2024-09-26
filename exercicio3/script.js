//# Exercício 3

//Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:


const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
console.log(pokemon1)

//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”
const newPokemon1 = {...pokemon1,
    nome:"Squirtle",
    tipo:"Água"}
console.log(newPokemon1)
//b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** que deve começar vazio.
pokemon1.ataques= []
console.log(pokemon1)

//c-) crie um objeto de `ataque` com a estrutura abaixo e o adicione no array `ataques` utilizando `**push()**`
const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}

pokemon1.ataques.push(ataque);
console.log(pokemon1)
/* ```
nome: Investida,
dano: 40,
tipo: Normal,
precisao: 100,
``` */

//c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade de mesmo nome criada para o objeto original;
newPokemon1.ataques = [{...newPokemon1.ataques, ataque}]
/* console.log(newPokemon1) */
//d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**; no array de `ataques`
pokemon1.ataques.push({
    nome:"Folha navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
    })
console.log(pokemon1)
//e) para a cópia, crie o `ataque` **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**; e adicione no array.
newPokemon1.ataques.push({
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
})
console.log(newPokemon1)
//f) Imprima os dois objetos  do tipo pokemon no console.
console.log(pokemon1.tipo)
console.log(newPokemon1.tipo)

console.log(pokemon1.ataques)
console.log(newPokemon1.ataques)
