/*
const sacolao =[ {
    nome: "banana",
    preco: 9.99,
    disponibilidade: true
},
{
    nome: "maçã",
    preco: 11.99,
    disponibilidade: true
},
{
    nome: "tomate",
    preco: 7.99,
    disponibilidade: false
}]
*/



//CRIE UM ARRAY VAZIO, CHAMADO SACOLÃO
const sacolao = [];

//CRIE TRÊS OBJETOS QUE VÃO REPRESENTAR FRUTAS DO SACOLÃO. 
//OS OBJETOS DEVEM TER AS SEGUINTES PROPRIEDADES:
// nome: string;
//preco: number;
//disponibilidade: boolean;
const frutas = 
[
    {nome: "banana", preco: 11.99, disponibilidade: true},
    {nome: "maçã", preco: 11.99, disponibilidade: true},
    {nome: "tomate", preco: 7.99, disponibilidade: false}
];

//ADICIONE OS OBJETOS AO ARRAY SACOLAO UTILIZANDO O MÉTODO PUSH()
sacolao.push(frutas);

//IMPRIMA O ARRAY SACOLAO, E CERTIFIQUE-SE DE QUE AGORA ELA SEJA UM ARRAY COM TRÊS OBJETOS
console.table(sacolao)























