const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

const pokemon2 = {...pokemon1.ataques}
pokemon2.nome = "Squirtle"
pokemon2.tipo = "Água"
 


// B

pokemon1.ataques = [] 
pokemon1.ataques.push({
    nome:"investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
})



//  C

pokemon2.ataques = [...pokemon1.ataques]


//   D

pokemon1.ataques.push({
   nome:"Folha navalha",
   dano: 45,
   tipo:"grama",
   precisao: 100
}) 


// E
pokemon2.ataques.push({
    nome:"Jato de Agua",
    dano: 40,
    tipo: "Água",
    precisao: 100

})

console.log(pokemon1)
console.log(pokemon2)
