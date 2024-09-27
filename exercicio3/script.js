const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

const copiaPokemon1 = {
    ...pokemon1,
    nome: "squirtle",
    tipo: "Água"
}

pokemon1.ataques = []
const ataque1 = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100   
}

pokemon1.ataques.push(ataque1)
 copiaPokemon1.ataques = [...pokemon1.ataques]
 pokemon1.ataque = "Folha Navalha"
 pokemon1.dano = 45
 pokemon1.precisao = 100
 pokemon1.ataques.push(
    {tipo: "grama"}
    )

copiaPokemon1.ataque = "Jato de Água"
copiaPokemon1.dano = 40
copiaPokemon1.precisao = 100
copiaPokemon1.tipo = "Água"

console.log(pokemon1)
console.log(copiaPokemon1)