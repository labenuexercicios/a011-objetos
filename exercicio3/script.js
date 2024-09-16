// EXERCICIO 03 - ficha do pokèmon

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

// a)
const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"   
}

// b)
pokemon1.ataques = []

// c)
const ataque = {
    nome: "Investida", 
    dano: 40, tipo: "Normal", 
    precisao: 100
}

pokemon1.ataques.push(ataque)

// d)
pokemon2.ataques = [...pokemon1.ataques]

// e)
pokemon1.ataques.push({nome: "Folha Navalha", dano: 45, tipo: "Grama", precisao: 100}) 

// f) 
pokemon2.ataques.push({
    ...pokemon2.ataques[0],
    nome: "Jato de Água",
    tipo: "Água"
})

//pokemon2.ataques.push({nome: "Jato de Água", dano: 40, tipo: "Água", precisao: 100})

// g)
console.log(pokemon1)
console.log(pokemon2)