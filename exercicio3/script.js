const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

// Letra A: 

const copiaPokemon1 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água" 
}
// console.log(pokemon1)
// console.log(copiaPokemon1)

//letra B: 

pokemon1.ataques = []
pokemon1.ataques.push({
    nome: "Investida", 
    dano: 40, 
    tipo: "Normal", 
    precisao: 100})

// console.log("Ataques adicionados: ", pokemon1)

// Letra C: 

copiaPokemon1.ataques = [...pokemon1.ataques]
// console.log(copiaPokemon1.ataques)

// Letra D: 
pokemon1.ataques.push({
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
})

// Letra E: 

copiaPokemon1.ataques.push({
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100
})

// Letra F:


console.log("Ataques Pokemon 1: ", pokemon1)
console.log("Ataques Pokemon Cópia: ", copiaPokemon1)









