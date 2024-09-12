const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
}

//pokemon1.ataques = []
pokemon1["ataques"] = []

console.table(pokemon1)

pokemon1.ataques.push({Nome: "Investida", dano: 40, tipo: "Normal", precisao: 100})
console.table(pokemon1.ataques)
pokemon2.ataques = [...pokemon1.ataques]
console.table(pokemon2.ataques)

pokemon1.ataques.push({Nome: "Folha Navalha", dano: 45, tipo: "Grama", precisao: 100})
pokemon2.ataques.push({Nome: "Jato de Água", dano: 40, tipo: "Água", precisao: 100})

console.table(pokemon1)
console.table(pokemon2)
