const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

const pokemon2 = {
    ...pokemon1,
	nome: "Squirtle",
	tipo: "Agua",
};

pokemon1.ataques = [
    {nome: "invertida", dano: 40, tipo: "Normal", precisão: 100},
]
pokemon2.ataques = [{...pokemon1.ataques}];

pokemon1.ataques.push([
  {
    nome: "Folha navalha",
    dano: 45,
    precisão: 100,
    tipo: "grama", 

  },
])
pokemon2.ataques.push([
  {
    nome: "Jato de Água",
    dano: 45,
    precisão: 100,
    tipo: "Agua",
  },
])

console.log(pokemon1)
console.log(pokemon2)