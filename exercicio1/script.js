//EXERCÍCIO 1 

const sacolao = []

const frutaUm = {
    nome: 'Uva',
    preco: 3.00,
    disponibilidade: true
}
const frutaDois = {
    nome: 'Laranja',
    preco: 3.50,
    disponibilidade: false
}
const frutaTres = {
    nome: 'Maçã',
    preco: 2.50,
    disponibilidade: true
}

sacolao.push(frutaUm, frutaDois, frutaTres)
console.log(sacolao)