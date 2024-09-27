const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

// A) Fazendo o espelhamento e trocando propriedades
const copiaPokemon1 = {...pokemon1}; //const copiaPokemon1 = {...pokemon1, nome: "Squirtle", tipo: "Água"}
copiaPokemon1.nome='Squirtle';
copiaPokemon1.tipo= 'Água';

console.log (pokemon1);
console.log (copiaPokemon1);

// B) Criando uma propriedade que contém um array
pokemon1.ataques = [];

/* pokemon1.ataques.push({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100}) */

const ataques = [
    {nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100

}]

pokemon1.ataques.push(ataques);
console.log (pokemon1);

// C) ???
copiaPokemon1.ataques = [...pokemon1.ataques];

// D) Modificando propriedades do ataque (array)

pokemon1.ataques= {nome: 'Folha navalha',dano:40,tipo:'Água'};

console.log (pokemon1);

// E) Criando propriedades para a cópia
copiaPokemon1.ataques = {nome:'Jato de água',dano: 40, tipo:'Água', precisao: 100}

// F) Imprimindo os dois obejetos
console.log (pokemon1);
console.log (copiaPokemon1);