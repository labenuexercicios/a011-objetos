// Exrcicio 03

let pokemon01 = {
    nome: 'Bulbasaur',
    tipo: 'Grama',
    nivel: 5
}

// Criando um novo objeto com '...'
let pokemon02 = {...pokemon01};
pokemon02.nome = 'Squirtle';
pokemon02.tipo = 'Agua';

// adicionando uma nova propriedade
pokemon01.ataques = [];
pokemon01.ataques.push({nome: 'Investida', dano: 40, tipo: 'Normal', precisao: 100});

// adicionando ao 'pokemon02' uma nova propriedade com '...'
pokemon02.ataques = [...pokemon01.ataques];

// Adicionando mais uma nova propriedade ao 'pokemon01'
pokemon01.ataques.push({nome: 'Folha Navalha', dano: 45, tipo: 'Grama', precisao: 100});

// Adicionando mais uma nova propriedade ao 'pokemon02'
pokemon02.ataques.push({nome: 'Jato de Agua', dano: 40, tipo: 'Agua', precisao: 100});

// Comparando os 'pokemons'
console.log('Pokemon 01', pokemon01);
console.log('Pokemon 02', pokemon02);