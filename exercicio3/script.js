const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5,
	

}
pokemon1.ataques1 = []
pokemon1.ataques1.push({ Atq:"2",nome:"Investida",dano:40,precisão:100,tipo:"agua"})



const pokemon2 ={...pokemon1}
pokemon2.nome = "Squirtle"
pokemon2.tipo = "agua"




pokemon1.ataques2 = []
pokemon1.ataques2.push({nome: "Folha Navalha",dano:45,precisão:100,tipo:"agua"}) 

pokemon2.ataques = []
pokemon2.ataques.push({nome: "Jato de Água",dano:40,precisão:100,tipo:"agua"})



console.log(pokemon1)
console.log(pokemon2)