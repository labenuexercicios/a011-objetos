//EXERCÍCIO 3

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
console.log(pokemon1)

const pokemon2 = {
    ...pokemon1,
    nome: 'Squirtle',
    tipo: 'Água'
};
console.log(pokemon2)

pokemon1.ataques = []

const ataque = {
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100
}
pokemon1.ataques.push(ataque)
console.log(pokemon1.ataques)

pokemon2.ataques = []
pokemon2.ataques.push(ataque)
console.log(pokemon2.ataques)

pokemon1.ataque = {
    nome: 'Folha Navalha',
    danos: 45,
    tipo: 'Grama',
    precisao: 100
}
console.log(pokemon1)

pokemon2.ataque = {
    nome: 'Jato de Água',
    danos: 40,
    tipo: 'Água',
    precisao: 100
}
console.log(pokemon2)


