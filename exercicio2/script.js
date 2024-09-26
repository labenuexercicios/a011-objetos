/**Exercício 2

Leia o código abaixo, e responda:

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

a) Qual o código para imprimir o nome do primeiro ator/atriz?

b) Qual o código para imprimir o nome do último ator/atriz?

c) Qual o código para exibir o array com todas as transmissões de hoje?

d) Qual o código para exibir o horário de transmissão do filme no Canal Brasil?
 */

//Lea el siguiente código y responda:

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
    };

// respostas aqui ⬇️


    //a) Qual o código para imprimir o nome do primeiro ator/atriz?
        console.log(filme.elenco[0])

    //b) Qual o código para imprimir o nome do último ator/atriz?
        console.log(filme.elenco[3])
    
    //c) Qual o código para exibir o array com todas as transmissões de hoje?
    const delHorario = transmissoesHoje.horario;    
    console.log(delHorario)
    const canales = transmissoesHoje.canal;
    console.log(canales)    

    //d) Qual o código para exibir o horário de transmissão do filme no Canal Brasil?
    const muestraTransmissao = transmissoesHoje[1].horario;
    console.log(muestraTransmissao)

     