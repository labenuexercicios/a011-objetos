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

//Questão A - Qual o código para imprimir o nome do primeiro ator/atriz?

const primeiroAtor = filme.elenco[0]
console.log('Primeiro ator/atriz:' ,primeiroAtor)

//Questão B - Qual o código para imprimir o nome do último ator/atriz?

const ultimoAtor = filme.elenco[3]
console.log('Último ator/atriz:' ,ultimoAtor)

//Questâo C - Qual o código para exibir o array com todas as transmissões de hoje?

const gradeDeTransmissao = filme.transmissoesHoje
console.log('Transmissões de hoje:', gradeDeTransmissao)

//Questão D - Qual o código para exibir o horário de transmissão do filme no Canal Brasil?

const canalBrasil = filme.transmissoesHoje[1]
console.log('Horário de exibição no Canal Brasil:', canalBrasil)



