
//EXERCÍCIO 2
//Leia o código abaixo, responda:

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
//1)QUAL O CÓDIGO PARA IMPRIMIR O NOME DO PRIMEIRO AOTR/ATRIZ?
const primeiroAtorOuAtriz = filme.elenco[0];
console.table("O nome do primeiro ator/atriz é",primeiroAtorOuAtriz);

//2)QUAL O CÓDIGO PARA IMPRIMIR O NOME DO ÚLTIMO AOTR/ATRIZ?
const ultimoAtorOuAtriz = filme.elenco[filme.elenco.length -1]
console.table("O nome do último ator/atriz é",ultimoAtorOuAtriz);

//TAMBÉM FIZ DESSA FORMA:
/* 
const elencos = filme.elenco.length;
console.table(filme.elenco[elencos-1]);
*/

//3) QUAL O CÓDIGO PARA EXIBIR O ARRAY COM TODAS AS TRANMISSÕES DE HOJE?
const todasAsTransmissoes = filme.transmissoesHoje;
console.table(todasAsTransmissoes);

//4)QUAL O CÓDIGO PARA EXIBIR O HORÁRIO DE TRANSMISSÃO DO FILME NO CANAL BRASIL?
const canalBrasil = filme.transmissoesHoje[1].horario;
console.table("O horário de transmissão do Canal Brasil é ás",canalBrasil,"hrs");


////////////////////////////////////////////////////////////////////////////////


















