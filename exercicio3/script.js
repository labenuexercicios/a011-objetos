const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5,
    ataques: []
};

pokemon1.ataques.push(ataque1={nome: "Investida",dano: 40,tipo: "Normal",precisao: 490})

const pokemon1copy = {
    nome: "Squirtle",
    tipo: "Agua",
    nivel: 5,
    ataquesCopia: [...pokemon1.ataques]
};

pokemon1.ataques.push(ataque2={nome:"Folha Navalha",dano: 45,tipo:"Grama",precisao: 100})
pokemon1copy.ataquesCopia.push(ataque1={nome:"Jato de Agua",dano: 40,tipo:"Agua",precisao: 100})

console.log(pokemon1)
console.log(pokemon1copy)