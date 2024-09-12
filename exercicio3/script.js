const pokemon1= {
    nome:'bulbasaur',
    tipo: 'grama',
    nivel: 5,
}

const pokemon2= {...pokemon1};
pokemon2.nome= 'Squirtle';
pokemon2.tipo= 'Agua';

pokemon1.ataques =[];
pokemon1.ataques.push({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,
    })
pokemon2.ataques= [...pokemon1.ataques]
pokemon1.ataques.push({
        nome: "Foha Navalha",
        dano: 45,
        tipo: 'grama',
        precisao: 100,
    })


console.log(pokemon2)
console.log(pokemon1)

pokemon2.ataques.push({
    nome: "Jato de Agua",
    dano: 40,
    tipo: "Agua",
    precisao:100,
})


const pokemon3= {...pokemon1} 

pokemon3.nome= "Charmander",
pokemon3.tipo="Fogo"

//criei ataques pro charmander
pokemon3.ataques=[]
//adcionei o ataque brasas pro charmander
pokemon3.ataques.push({
    nome:"Brasas",
    dano: 40,
    tipo:"Fogo",
    precisao: 100,
})

//depois adcionei o ataque investida

pokemon3.ataques.push({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,

})
console.log(pokemon3)