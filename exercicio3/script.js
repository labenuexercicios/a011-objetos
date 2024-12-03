//3 a

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5,
};

const pokemon2 = {...pokemon1,

    nome: 'Squirtle',
	tipo: "agua",
}
//3b

pokemon1.ataques =[];
console.log(pokemon1.ataques)
const ataque1 = {nome:"investida",
    dano: 40,
    tipo: "normal",
    precisao:100,

}

pokemon1.ataques.push(ataque1)
console.log(pokemon1.ataques)

pokemon2.ataques=[]
console.log(pokemon2)

pokemon2.ataques=[...pokemon1.ataques]

pokemon1.ataques.push({
    nome:"Folha navalha",
    dano: 45,
    precisao:100,
})

pokemon2.ataques.push({

})


console.log(pokemon1)
console.log(pokemon2)