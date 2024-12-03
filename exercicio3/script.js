const pokemon1 = {
    nome:"Bulbasaur",
    tipo:"grama",
    nivel: 5,
}

//a)
const pokemon2 = {...pokemon1,
    nome:"Squirtle",
    tipo:"água"
}
 
//b)
pokemon1.ataques = []

//c)
const pokemon1ataque1=[
    {nome:"investida"},
    {dano:40},
    {tipo: "Normal"},
    {precisao: 100},
]
pokemon1.ataques.push(pokemon1ataque1)

pokemon2.ataques=[]


//d)
const pokemon1ataque2=[
    {nome:"Folha navalha"},
    {dano:45},
    {tipo: "Grama"},
    {precisao: 100},
]
pokemon1.ataques.push(pokemon1ataque2)

//e)
const pokemon2ataque1=[
    {nome:"Jato de Água"},
    {dano:40},
    {tipo: "Água"},
    {precisao: 100},
]
pokemon2.ataques.push(pokemon2ataque1)

console.log(pokemon1)
console.log(pokemon2)
