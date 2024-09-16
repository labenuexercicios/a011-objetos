

const pokemon1 = { // a) Cire uma copia do objeto, acima mantendo a estrutura, mas trocando NOME por "Squirtle" e TIPO por "Agua".
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5,

    ataques: [], // b) No objeto original, adicione mais uma propriedade, chamada ATAQUES. Esta propriedade deve guardar um array que deve comecar vazio.


};

const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Agua",
};

const ataqueNormal = { // c-) Crie um objeto de ATAQUE com a estrutura abaixo e o adicione noa array ATAQUES utilizando .push().  
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,

};

pokemon1.ataques.push(ataqueNormal);

pokemon2.ataques = [];
pokemon2.ataques = [...pokemon1.ataques]; // C) Na copia do objeto original, adicione a propriedade ataques a apartir do espelhamento da propriedade de mesmo nome criada para o objeto original.

const folhaDeNavalha = {
    nome:  "Folha Navalha", //d) para o objeto original, adicione o ataque “Folha Navalha”, com 45 de dano, 100 de precisão, e de tipo “Grama”; no array de ataques
    dano: 45,
    tipo: "Grama",
    precisao: 100
};

pokemon1.ataques = [...pokemon1.ataques, folhaDeNavalha];

const JatoDeAgua = {  //e) para a cópia, crie o ataque “Jato de Água”, com 40 de dano, 100 de precisão, e do tipo “Água”; e adicione no array.
    nome: "Jato de Agua",
    dano: 40,
    tipo: "Agua",
    precisao: 100,
}

pokemon2.ataques.push(JatoDeAgua);


console.log(pokemon1, pokemon2); //f) Imprima os dois objetos  do tipo pokemon no console.