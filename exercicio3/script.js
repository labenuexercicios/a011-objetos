const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

const pokemon2 = {...pokemon1, nome: "Squirtle", tipo: "Água",};

console.log(pokemon1)
console.log(pokemon2)

pokemon1.ataques = []
console.log(pokemon1.ataques)

const ataque1 = {nome: "Investida",
dano: 40,
tipo: "Normal",
precisao: 100}

pokemon1.ataques.push(ataque1)
console.log(pokemon1.ataques)

console.log(pokemon2)