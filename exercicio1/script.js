// Exercicio 01

// Criando um array vazio
let sacolao = [];

// Criando 03 objetos
let fruta01 = {
    nome: 'Banana',
    preco: 'R$ 4,99',
    disponibilidade: true,
}

let fruta02 = {
    nome: 'Morango',
    preco: 'R$ 6,00',
    disponibilidade: true,
}

let fruta03 = {
    nome: 'Maracuja',
    preco: 'R$ 4,00',
    disponibilidade: true,
}

// Adicionando as 'frutas' ao 'sacolao' com o .push()
sacolao.push(fruta01, fruta02, fruta03);

// Imprimindo no console o array 'sacolao'
console.log(sacolao);