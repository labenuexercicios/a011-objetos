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
//REPOSTA A
console.log(filme.elenco[0])

//reposta B
// const lista= filme.elenco
console.log(filme.elenco[filme.elenco.length -1])
// console.log(staultimoDaLista)

//respota C
console.log(filme.transmissoesHoje)

//reposta d
console.log(filme.transmissoesHoje[1].horario)
