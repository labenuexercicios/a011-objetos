//# Exercício 3

//Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:


const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

console.log("Objeto sem edição:", pokemon1);

//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

const pokemon2 = {...pokemon1}

// Alterando o valor da propiedade nome 

pokemon2.nome = "Squirtle"
console.log("Cópia com o nome alterado:", pokemon2);

// Alterando o valor da propiedade tipo

pokemon2.tipo = "“Água”"
console.log("Cópia com o tipo alterado:", pokemon2);

//b) No objeto original, adicione mais uma propriedade, chamada `ataques`. 
//Esta propriedade deve guardar um **array** de objetos 
//com a estrutura abaixo. Inicie a propriedade como um array 
//vazio, e crie o objeto abaixo utilizando `**push()**`

/*text
nome: Investida;
dano: 40;
tipo: Normal;
precisao: 100;
*/

pokemon1.ataques = []

const ataques = {
nome: "Investida",
dano: 40,
tipo: "Normal",
precisao: 100
}


pokemon1.ataques.push(ataques);

console.log("Objeto original com propriedade ataques: ", pokemon1);

//c) Na cópia do objeto original, adicione a propriedade **`ataques`**
//a partir do **espalhamento** da propriedade criada para o objeto original;

pokemon2.ataques=[...pokemon1.ataques]

console.log("Nova cópia, com nova propriedade: ", pokemon2);

//d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;

pokemon1.ataques.push({
nome: "Folha Navalha",
dano: 45,
tipo: "Grama",
precisao: 100
})

console.log("Objeto original com novo ataque: ", pokemon1);

//e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;

pokemon2.ataques.push({
    nome: "Jato de Agua",
    dano: 40,
    tipo: "Água",
    precisao: 100

}); 

console.log("Nova cópia, com nova propriedade: ", pokemon2);

//f) Imprima os dois objetos no console.

console.log("O objeto original é: ", pokemon1 ,"O objeto cópia é: ", pokemon2 );
