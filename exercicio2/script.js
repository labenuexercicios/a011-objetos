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

console.log("Nome do primeiro ator:",filme.elenco[0],"\n","Nome do segundo ator:",filme.elenco[3])
console.table("Transmissões do dia:",filme.transmissoesHoje)
console.log("Transmissão do canal Brasil:", filme.transmissoesHoje[1])