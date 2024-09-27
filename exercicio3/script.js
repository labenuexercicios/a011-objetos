//Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:

/*```jsx
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
```

//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

//b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`

```text
nome: Investida;
dano: 40;
tipo: Normal;
precisao: 100;
```

//c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;

//d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;

//e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;

//f) Imprima os dois objetos no console.*/

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

const copiaPokemon1= {...pokemon1};

console.log(copiaPokemon1);
console.log(pokemon1);


copiaPokemon1= {...pokemon1, nome:"Squirtle" , tipo: "Água"};

//exercicio 3 b

pokemon1.ataques = [];
const ataque1 =

    {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100

    };

copiaPokemon1.ataques.push(ataque1);
console.log(pokemon.ataques)

//exercicio 3 c
console.log(copiaPokemon1)

copiaPokemon1.ataques = [];

copiaPokemon1.ataques = [...pokemon1.ataques];


//d

pokemon1.ataques.push({
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
    })

//e

copiaPokemon1.ataques.push({
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
    })

    //f

console.log(pokemon1,copiaPokemon1);