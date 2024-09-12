//# Exercício 1

//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
//a) Fora do array, crie **três objetos** que vão representar frutas do sacolão. 
//Os objetos devem ter as seguintes propriedades: 
//```jsx
//nome: string;
//preco: number;
//disponibilidade: boolean;
//```b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**.
//c) Imprima o array `sacolao`, e certifique-se de que agora ele seja um array **com três objetos**.

const sacolao = []

const frutasSacolao={
    nome: "mamao",
    preco: 1.50,
    disponibilidade: "true",
    nome: "limao",
    preco: 1.00,
    disponibilidade: "true",
    nome: "banana",
    preco: 2.00,
    disponibilidade: "true"
}

sacolao.push(frutasSacolao)
console.log(sacolao)