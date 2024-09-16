/*# Exercício 1*/

//1)Crie um array vazio chamado `sacolao`:
const sacolao =[]

//2)Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
const frutaUm = {
    nome: "banana",
    preco: 2,
    disponibilidade: true
}
const frutaDois = {
    nome: "pera",
    preco: 3,
    disponibilidade: false
}
const frutaTres = {
    nome: "laranja",
    preco: 4,
    disponbilidade: true
}
//3)Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(frutaUm,frutaDois,frutaTres)

//4)Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**/
console.log("Sacolao:",sacolao)