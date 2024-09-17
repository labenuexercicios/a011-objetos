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
// A)
const primeiroNome = filme.elenco[0]
console.log(primeiroNome)

// B)
const ultimoNome = filme.elenco[3]
console.log(ultimoNome)

// C)
const todosHorarios = filme.transmissoesHoje
console.log(todosHorarios)

// D)
const horarioCanalBrasil = filme.transmissoesHoje[1]
console.log(horarioCanalBrasil)
