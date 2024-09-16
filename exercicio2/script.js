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

const nomeDoPrimeiroAtor = filme.elenco[0]
console.log("Nome do primeiro ator: ", nomeDoPrimeiroAtor)


//b) Qual o código para imprimir o nome do **último** ator/atriz?

const nomeDoÚltimoAtor = filme.elenco[3]
console.log("Nome do último ator: ", nomeDoÚltimoAtor)


//c) Qual o código para exibir o array com **todas** as transmissões de hoje?

const todasAsTransmissões = filme.transmissoesHoje
console.log("Todas as transmissões de hoje: ", todasAsTransmissões)


//d) Qual o código para exibir o **horário** de transmissão do filme no `Canal Brasil`?

const canalBrasil = filme.transmissoesHoje[1].horario
console.log("Horário de transmo filme no Canal Brasil: ", canalBrasil)