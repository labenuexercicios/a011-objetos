const sacolao = [];

const fruta1 = {
    nome: 'Abacaxi',
    preco: 4.99,
    disponibilidade: true
}

const fruta2 = {
    nome: 'Manga',
    preco: 6.80,
    disponibilidade: true
}
const fruta3 = {
    nome: 'Kiwi',
    preco: 13.99,
    disponibilidade: false
}

sacolao.push(fruta1, fruta2, fruta3);

console.log (sacolao);
console.log ('Quantidades de itens: ', sacolao.length);