const objeto1 = {
    nome: "Farinha",
    preco: 7.5,
    disponibilidade: true
}
const objeto2 = {
    nome: "Tomate",
    preco: 11.50,
    disponibilidade: false
}
const objeto3 = {
    nome: "Alface",
    preco: 3.25,
    disponibilidade: true
}

const sacolao = []

sacolao.push(objeto1, objeto2,objeto3)
console.table(sacolao)