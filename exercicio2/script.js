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
console.log(`Primeiro Ator: ${filme.elenco[0]}
Ultimo ator: ${filme.elenco[3]}
Trasmissões de hoje: ${filme.transmissoesHoje}
Horario de transmissão Canal Brasil: ${filme.transmissoesHoje[1].horario}
`
)

