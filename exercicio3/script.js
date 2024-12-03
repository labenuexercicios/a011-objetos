const pokemon1 = {
    nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5

}
//A
const pokemon1Copia = {
    ...pokemon1,
    nome: "Squirtle", 
    tipo: "Agua",
}

//B
pokemon1.ataques = []

//C
let ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}
pokemon1.ataques.push(ataque)

//D
pokemon1Copia.ataques = [...pokemon1.ataques]

//E
pokemon1.ataques.push('nome: "Folha Navalha"',
'dano: 45',
'tipo: "Grama"',
'precisao: 100')

//F
pokemon1Copia.ataques.push('nome: "Jato de Agua"',
'dano: 40',
'tipo: "Agua"',
'precisao: 100')

console.log(pokemon1);
console.log(pokemon1Copia);

