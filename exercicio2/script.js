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
   //Imprimir nome do primeiro ator/atriz: 

console.log(filme.elenco[0])

	//Imprimir último ator/atriz: 

console.log(filme.elenco[3])

	// Exibir o array com todas as transmissões de hoje:

console.log(filme.transmissoesHoje)

	// Horário de transmissão do filme no Canal Brasil:

console.log(filme.transmissoesHoje[1].horario)