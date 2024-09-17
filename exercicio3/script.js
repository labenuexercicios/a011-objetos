// A)
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

const copiaPokemon = {
    ...pokemon1,
    nome: `Squirtle`,
    tipo: `Água`,
    nivel: 5
}
console.log(pokemon1)
console.log(copiaPokemon)

// B)
pokemon1.ataques = []

// C)
const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}
const adicionarAtaques = pokemon1.ataques.push(ataque)
console.log(pokemon1)

// D)
copiaPokemon.ataques = []

// E)
const ataqueFolha = {
    nome: `Folha Navalha`,
    dano: 45,
    precisao: 100,
    tipo: `Grama`
}
const adicionarAtaqueFolha = pokemon1.ataques.push(ataqueFolha)

// F)
const ataqueJato = {
    nome: `Jato de Água`,
    dano: 40,
    precisao: 100,
    tipo: `Água`
}
const adicionarAtaqueJato = copiaPokemon.ataques.push(ataqueJato)