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
// a)
const nomePrimeiroAtor = filme.elenco[0]
console.log(nomePrimeiroAtor)

// b)
const nomeUltimoAtor = (filme.elenco[3])
console.log(nomeUltimoAtor)

// c)

const transmissoesDeHoje = filme.transmissoesHoje
console.log(transmissoesDeHoje)

// d)

const transmissoesCanalBrasil = (filme.transmissoesHoje[1].horario)
console.log(transmissoesCanalBrasil)


