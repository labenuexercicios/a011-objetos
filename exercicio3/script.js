/*# Exercício 3

Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:

```jsx
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};*/

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

//1) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”.
const pokemon2 = {...pokemon1,
    nome: "Squirtle",
    tipo: "Agua"
}

/*2) No objeto original, adicione mais uma propriedade, chamada `ataques`. 
Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. 
Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()*/

pokemon1.ataques = ([])

const ataqueUm = {
    nome: "Investida;",
    dano: 40,
    tipo: "Normal;",
    precisao: 100}

pokemon1.ataques.push(ataqueUm)

/*3) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade 
criada para o objeto original*/

pokemon2.ataques = ([...pokemon1.ataques])

/*4) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”*/

const ataqueDois ={     
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
}
pokemon1.ataques.push(ataqueDois)

/*5) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”***/

const ataqueTres = {
    nome: "Jato de Agua",
    dano: 40,
    tipo: "Agua",
    precisao: 100
}
pokemon2.ataques.push(ataqueTres)

/*6)Imprima os dois objetos no console*/

console.log(pokemon1)
console.log(pokemon2)