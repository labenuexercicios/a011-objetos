// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
const sacolao =[]
// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```
const fruta1 ={
nome: "Maçã", preco: 4.79, emFalta: false}
const fruta2 ={
nome: "Pera", preco: 3.50, emFalta: true}
const fruta3 ={
nome: "Mamão", preco: 3, emFalta: false}

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(fruta1)
sacolao.push(fruta2)
sacolao.push(fruta3)

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.log(sacolao)