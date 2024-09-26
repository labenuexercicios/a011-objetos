//CRIANDO ARRAY "sacolao"
const sacolao = []

/*a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
nome: string;
preco: number;
disponibilidade: boolean;
*/

const item1 = {
    nome: "Maçã",
    preco: 8.79,
    disponibilidade: true
}
const item2 = {
    nome: "Banana",
    preco: 2.67,
    disponibilidade: true
}
const item3 = {
    nome: "Pera",
    preco: 11.35,
    disponibilidade: false
}

//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(item1,item2,item3)

//
// sacolao.push(item1)
// sacolao.push(item2)
// sacolao.push(item3)

//c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

console.log(sacolao) //constam os 3 objetos no array sacolao
