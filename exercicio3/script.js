// # Exercício 3

let pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
console.log("Pokemon original" )
console.log(pokemon1)
// a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

let Copiapokemon = {...pokemon1};
Copiapokemon.nome = "Squirtle"
Copiapokemon.tipo = "Água"
console.log("copia pokemon trocado dos objetos nome e tipo")
console.log(Copiapokemon )

// b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`

console.log(pokemon1.ataques)
pokemon1.ataques = [" "] // novo array dentro do objeto


console.log("Objeto original com array ataques vazio")



pokemon1.ataques.push({nome: "Investida",dano:40,tipo: "Normal",Precisao: 100})

console.log(pokemon1)

//c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;
console.log("Copia do pokemon original por espelhamento com array ataque vazio ")
Copiapokemon.copiaataques = {...pokemon1.ataques} 
Copiapokemon.copiaataques=[]
console.log(Copiapokemon.copiaataques)

// d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;

pokemon1.ataques.push({nome:"Folha Navalha",dano:45,tipo:"Gama",Precisao:100})
console.log("Objeto original com outros ataques")
console.log(pokemon1)

// e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;
console.log("Copia pokemon com outro ataques")
Copiapokemon.copiaataques.push({nome: "Jato De Água ",dano:40,Precisao:100,tipo:"Água"})
console.log(Copiapokemon)

// f) Imprima os dois objetos no console.
console.log('Pokemon original \n', pokemon1)
console.log('Copiapokemon  \n', Copiapokemon)