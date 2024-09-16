//# Exercício 1

//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
const arraySacolao = []

/*a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
*/
const fruta = {
    nome: "Melancia",
    preco: 10,
    disponibilidade: true 
}
console.log(fruta)

const fruta1 = {
    nome: "Pêssego",
    preco: 0.99,
    disponibilidade: false
}
console.log(fruta1)

const fruta2 ={
    nome: "Bergamota",
    preco: 0.89,
    disponibilidade: true
}
console.log(fruta2)


/*b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
*/
arraySacolao.push(fruta, fruta1, fruta2)


/*c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
*/

console.log(arraySacolao)


//RESOLUCAO EXERCICIO1 MODULO(OBEJOTOS)




