// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter 
// as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```
// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três
//  objetos**

const sacolao = []

const fruta1 = {
    nome: "maça",
    preco: "2", 
    disponibilidade: true
}

const fruta2 = {
    nome: "abacate", 
    preco: "5", 
    disponibilidade: true
}
const fruta3 ={
    nome: "banana", 
    preco: "3", 
    disponibilidade: false
}

sacolao.push (fruta1,fruta2,fruta3)  /// push vai adicionar valores na array
console.log (sacolao)

