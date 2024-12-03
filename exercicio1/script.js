//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

/*a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades:*/

const sacolao =[]

const fruta1 = {
    nome: "Morango",
    preco: 10,
    disponibilidade: true,    
}

const fruta2 = {
    nome: "Uva",
    preco: 15,
    disponibilidade: true,
}

const fruta3 = {
    nome: "fruta do céu",
    preco: 1000,
    disponibilidade: false,
}

//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(fruta1, fruta2, fruta3);

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

console.log(sacolao);