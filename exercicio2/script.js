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
//Letra A
console.log (filme.elenco[0]);

//Letra B
console.log (filme.elenco.slice(-1));

//Letra C
console.log ('Transmissões de hoje',filme.transmissoesHoje);

//Letra D
console.log (filme.transmissoesHoje[1].horario);
