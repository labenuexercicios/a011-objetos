//# Exercício 1

//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

const sacolao = []

//a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as 
//seguintes propriedades: 

const fruta01 = {
nome: "Goiaba",
preco: 2.0,
disponibilidade: true 
}
const fruta02 = {
nome: "Ameixa",
preco: 3.0,
disponibilidade: false 
}
const fruta03 = {
nome: "Abacaxi",
preco: 3.0,
disponibilidade: true 
}
    
//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(fruta01);
sacolao.push(fruta02);
sacolao.push(fruta03);

//c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

console.log("O objeto sacolão com três Arreys é:" ,sacolao);