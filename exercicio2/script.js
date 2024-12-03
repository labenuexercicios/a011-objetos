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

//a) Qual o código para imprimir o nome do **primeiro** ator/atriz?

const qualAtor = filme.elenco.slice(0,1)
console.log (qualAtor)

// b) Qual o código para imprimir o nome do **último** ator/atriz?

const ultimoAtor = filme.elenco.slice(length-1)
console.log (ultimoAtor)

//c) Qual o código para exibir o array com **todas** as transmissões de hoje?

console.log (filme.transmissoesHoje)

//d) Qual o código para exibir o **horário** de transmissão do filme no `Canal Brasil`?

const horarioCanalbrasil = filme.transmissoesHoje[1].horario
console.log (` O horário de transmissão do filme no Canal Brasil é ${horarioCanalbrasil}`)

