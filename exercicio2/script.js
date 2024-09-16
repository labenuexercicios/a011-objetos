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

console.log("Ator 1:" , filme.elenco[0])
console.log("Ator 4:" , filme.elenco[filme.elenco.length-1]) //pegar o último item
console.log(filme.transmissoesHoje)
console.log(filme.transmissoesHoje[1].horario)
