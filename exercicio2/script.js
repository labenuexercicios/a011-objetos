const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: ["Matheus Nachtergaele", "Selton Mello", "Denise Fraga", "Virginia Cavendish"], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log("Segue as informações sobre o filme Auto da compadecida: ",filme );

// respostas aqui ⬇️
//a) Qual o código para imprimir o nome do **primeiro** ator/atriz?

console.log("O nome do primeiro Ator ou Atriz é: ", filme.elenco[0] );

//b) Qual o código para imprimir o nome do **último** ator/atriz?

console.log("O nome do Ultimo Ator ou Atriz é: ", filme.elenco[filme.elenco.length -1] );

//c) Qual o código para exibir o array com **todas** as transmissões de hoje?

console.log("Todas as transissões hoje são: ", filme.transmissoesHoje );

//d) Qual o código para exibir o **horário** de transmissão do filme no `Canal Brasil`?*/

console.log("O horário de transmissão do filme no `Canal Brasil` será às: ", filme.transmissoesHoje[1] );