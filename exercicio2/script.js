// EXERCICIO 02 - acessando atributos dentro de objetos

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

// respostas aqui ⬇️

console.log(filme.elenco[0])

console.log(filme.elenco[filme.elenco.length - 1])

console.log(filme.transmissoesHoje)

console.log(filme.transmissoesHoje[1].horario)