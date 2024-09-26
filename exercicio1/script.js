/* # Exercício 1

Crie um array vazio chamado `sacolao`, e siga os passos abaixo: */

const sacolao  = []

/* a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

```jsx
nome: string;
preco: number;
disponibilidade: boolean;
```
 */
const frutas = [{
    nome:"banana",
    preco: 5.4,
    disponibilidade: true
},
    {
    nome:"uva",
    preco: 5,
    disponibilidade: false
},
{
    nome:"maça",
    preco: 6,
    disponibilidade:true
}
]

//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(frutas)

//c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.log(sacolao)