const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
}
const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "agua"
}

pokemon1.ataques = [];

const ataques = {
    nome: "investida",
    dano: 40,
    tipo: "normal",
    precisao: 100
}

pokemon1.ataques.push(ataques)
pokemon2.ataques = [...pokemon1.ataques];

const ataques2 = {
    ...ataques,
    nome: "folha navalha",
    dano: 45,
    tipo: "grama"
}
pokemon1.ataques.push(ataques2)

const ataques3 = {
    ...ataques,
    nome: "jato de agua",
    dano: 40,
    tipo: "agua",
    precisao:100
}

pokemon2.ataques.push(ataques3)
console.log(pokemon1)
console.log(pokemon2)

