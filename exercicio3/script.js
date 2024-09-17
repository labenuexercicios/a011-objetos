const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

// a-)
pokemon1Copy = {...pokemon1}
pokemon1Copy.nome = "Squirtle",
pokemon1Copy.tipo = "Água",
pokemon1Copy.nivel = 5

// b-)
pokemon1Copy.ataques =[]
pokemon1Copy.ataques.push({

nome:'Investida',
dano:40,
tipo:'Normal',
precisao: 100
})

console.log(pokemon1Copy)

// c-)
pokemon1.ataques = pokemon1Copy.ataques
console.log(pokemon1)

// d-)
pokemon1.ataques = "Folha Navalha"

// e-) 
pokemon1Copy.ataques.push({
nome:'Jato de Água',
dano:40,
precisao:100,
tipo:'Água'
})