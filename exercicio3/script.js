const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

// a)
const copiaPokemon1 = {
...pokemon1,
nome: `Squirtle`,
tipo: `Água`
}

// b)
pokemon1.ataques = []

//c)



const ataque = {
nome: "Investida",
dano: 40,
tipo: "Normal",
precisao: 100
}

pokemon1.ataques.push(ataque)
console.log(pokemon1)

// d)

copiaPokemon1.ataques = [...pokemon1.ataques]

// e

const ataque2 = {
nome: "Folha Navalha",
dano: 45,
tipo: "Grama",
precisao: 100
}

pokemon1.ataques.push(ataque2)
console.log(pokemon1)

// f)

const ataqueCopia = {
nome: "Jato de Água",
dano: 40,
tipo: "Água",
precisao: 100
}

copiaPokemon1.ataques.push(ataqueCopia)

// g)

console.log(pokemon1)
console.log(copiaPokemon1)






