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

// a) Qual o código para imprimir o nome do *primeiro* ator/atriz?

console.log("Nome do primeiro ator/atriz: ", filme.elenco[0]);
console.log("----------------------------------");

// b) Qual o código para imprimir o nome do *último* ator/atriz?

console.log("Nome do último ator/atriz: ", filme.elenco[3]);
console.log("----------------------------------");

// c) Qual o código para exibir o array com *todas* as transmissões de hoje?

console.log(
  "Array com todas as transmissões de hoje: ",
  filme.transmissoesHoje
);
console.log("----------------------------------");

// d) Qual o código para exibir o *horário* de transmissão do filme no `Canal Brasil`?

console.log(
  "O horário de transmissão do filme no `Canal Brasil` : ",
  filme.transmissoesHoje[2].horario
);
console.log("----------------------------------");