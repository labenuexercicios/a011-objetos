//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

//a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

const sacolao = []
console.log (sacolao)

const fruta1Sacolao = {
    nome: "Manga",
    preço: 7.99,
    disponivel: true
}

const fruta2Sacolao = {
    nome: "Graviola",
    preço: 13.99,
    disponivel: false
}

const fruta3Sacolao = {
    nome: "Laranja",
    preço: 5.99,
    disponivel: true
}

//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(fruta1Sacolao,fruta2Sacolao,fruta3Sacolao)    

//c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

console.log (sacolao)


