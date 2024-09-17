const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

//a)
const copiaPokemon1 = {...pokemon1,
nome: "Squirtle",
tipo: "Água"}

//b)
pokemon1.ataques = []

pokemon1.ataques.push({nome: "Investida",dano: 40,tipo:"normal",precisao: 100})

//c)
copiaPokemon1.ataques = [...pokemon1.ataques]

//d)
pokemon1.ataques.push({nome:"Folha Navalha",dano:45,precisao:100,tipo:"grama"})

//e
copiaPokemon1.ataques.push({nome:"Jato de Água",dano:40,precisao:100,tipo:"Água"})

//f)
console.log(pokemon1,copiaPokemon1)