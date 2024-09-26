/**Exercício 3

Observe o objeto abaixo e, utilizando o espalhamento resolva os exercícios a seguir:

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando nome por “Squirtle” e tipo por “Água”

b) No objeto original, adicione mais uma propriedade, chamada ataques. Esta propriedade deve guardar um array que deve começar vazio.

c-) crie um objeto de ataque com a estrutura abaixo e o adicione no array ataques utilizando **push()**

nome: Investida,
dano: 40,
tipo: Normal,
precisao: 100,

c) Na cópia do objeto original, adicione a propriedade ataques a partir do espalhamento da propriedade de mesmo nome criada para o objeto original;

d) para o objeto original, adicione o ataque “Folha Navalha”, com 45 de dano, 100 de precisão, e de tipo “Grama”; no array de ataques

e) para a cópia, crie o ataque “Jato de Água”, com 40 de dano, 100 de precisão, e do tipo “Água”; e adicione no array.

f) Imprima os dois objetos  do tipo pokemon no console. */



const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando nome por
// “Squirtle” e tipo por “Água”

const pokemon2 ={...pokemon1,
	nome:"Squirtle",
	tipo:"Água",
}//copia


//pokemon2.nome.replace("Squirtle").tipo.replace("Agua");


//b) No objeto original, adicione mais uma propriedade, chamada ataques. Esta propriedade 
//deve guardar um array que deve começar vazio.

const arrayVacio = []



/**c-) crie um objeto de ataque com a estrutura abaixo e o adicione no array ataques 
 * utilizando **push()***

nome: Investida,
dano: 40,
tipo: Normal,
precisao: 100, */

const arrayAtaque = {
nome: Investida,
dano: 40,
tipo: Normal,
precisao: 100
}



console.log(arrayAtaque)

//d) para o objeto original, adicione o ataque “Folha Navalha”, com 45 de dano,
// 100 de precisão, e de tipo “Grama”; no array de ataques

const arrayAtaqueDois = arrayAtaque.push({nome: "Folha Navalha", dano:"45",precisao: "100", ataque:"Grama"})
console.log(arrayAtaqueDois)


//e) para la copia, crear el ataque "Chorro de agua", 
//con 40 de daño, 100 de precisión y del tipo "Agua"; y añádelo a la matriz.
const arrayAtaqueTreis  = arrayAtaque.push ({nome : "Chorro de agua", dano: 40,	precisao: 100,tipo: "Agua"})
console.log(arrayAtaqueTreis)

//f) Imprimir los dos objetos de tipo pokemon en la consola. */

console.log(pokemon1);
console.log(pokemon2);