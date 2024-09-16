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
//A- 
console.log(filme.elenco[0])
//B-
console.log(filme.elenco[3])
//C-
console.log(filme.transmissoesHoje)
//D-
console.log(filme.transmissoesHoje[1].horario)