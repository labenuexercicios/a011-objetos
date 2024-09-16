//# Exercício 1

//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:


const sacolão = []


//a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 


//nome: string;
//preco: number;
//disponibilidade: boolean;

const frutasDoSacolão1 = {
    nome: "Banana",
    preço: 5.00,
    disponibilidade: true
}

const frutasDoSacolão2 = {
    nome: "Morango",
    preço: 4.00,
    disponibilidade: false
}

const frutasDoSacolão3 = {
    nome: "Uva",
    preço: 7.00,
    disponibilidade: true
}


//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolão.push(frutasDoSacolão1, frutasDoSacolão2, frutasDoSacolão3)



//c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

console.log(sacolão)
