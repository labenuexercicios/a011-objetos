const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5

};

const pokemon2 = {...pokemon1,
    nome: "Squirtle",
    tipo: "Agua"
}

pokemon1.ataques = []
pokemon1.ataques.push({nome:"Investida",
dano: 40,
tipo: "Normal",
precisao: 100})

pokemon2.ataques = []
pokemon2.ataques= [...pokemon1.ataques];

pokemon1.ataques.push({nome:"folha Navalha",
dano:45,
tipo:"grama",
precisao:100
})

pokemon2.ataques.push({nome:"Jato de Agua",
dano: 40,
tipo: "Agua",
precisao:100 })

console.log(pokemon2)
console.log(pokemon1)


