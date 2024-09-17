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

//a)
console.log(filme.elenco[0])

//b)
console.log(filme.elenco[3])

//c
console.log(filme.transmissoesHoje)

//d
console.log("Horário no canal brasil:",filme.transmissoesHoje[1].horario)
