//Spread
const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
};

//A)
// copiaPokemon = {
//     ...pokemon1
// }
const pokemon2 = { ...pokemon1, nome: 'Squirtle', tipo: 'agua' }

//B)
pokemon1.ataques = []
pokemon1.ataques.push({
    ataques: 'investida',
    dano: 40,
    tipo: 'normal',
    precisao: 100
})



//C
pokemon2.ataques = [...pokemon1.ataques]

//D
pokemon1.ataques.push({
    nome: 'Folha navalha',
    dano: 45,
    tipo: 'grama',
    precisao: 100

})
//E
pokemon2.ataques.push({
    nome: 'Jato de Agua',
    dano: 40,
    tipo: 'agua',
    precisao: 100

})



console.log(pokemon1, pokemon2);