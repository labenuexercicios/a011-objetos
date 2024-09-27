/* Fiz com a ajuda da karol da minha turma
não entendi nada dessa aula
vi que saiu um vídeo da Mariana mostrando como fazer o exercidio da aula de ontem
vou dar uma olhada nele */

const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5,
  };
  
  console.log("Objeto Original: ", pokemon1);
  console.log("----------------------------------");
  
  // a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando *`nome`* por “Squirtle”
  // e *`tipo`* por “Água”
  
  const copiaPokemon1 = { ...pokemon1 };
  copiaPokemon1.nome = "Squirtle";
  copiaPokemon1.tipo = "Água";
  
  console.log(
    "Cópia do Original com Modificações de nome e tipo: ",
    copiaPokemon1
  );
  console.log("----------------------------------");
  
  // b) No objeto original, adicione mais uma propriedade, chamada `ataques`.Esta propriedade deve guardar
  // um *array* de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o
  // objeto abaixo utilizando `*push()*`
  
  pokemon1.ataques = [];
  
  const ataques = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,
  };
  
  pokemon1.ataques.push(ataques);
  console.log("Adicionado propriedade ataques ao array original: ", pokemon1);
  console.log("----------------------------------");
  
  // c) Na cópia do objeto original, adicione a propriedade *`ataques`* a partir do *espalhamento*
  // da propriedade criada para o objeto original;
  
  copiaPokemon1.novosAtaques = [];
  
  const novosAtaques = { ...ataques };
  copiaPokemon1.novosAtaques.push(novosAtaques);
  
  console.log(
    "Adicionada a propriedade novosAtaques à copiaPokemon1: ",
    copiaPokemon1
  );
  console.log("----------------------------------");
  
  // d) para o objeto original, adicione o ataque *“Folha Navalha”,* com *45 de dano*,
  // *100 de precisão, e de tipo *“Grama”**;
  
  const ataqueFolhaNavalha = {
    nome: "Folha Navalha",
    dano: 45,
    precisão: 100,
  };
  
  pokemon1.ataques.push(ataqueFolhaNavalha);
  console.log("Adicionado Ataque Folha Navalha ao array original: ", pokemon1);
  console.log("----------------------------------");
  
  // e) para a cópia, crie o ataque *“Jato de Água”, com **40 de dano, **100 de precisão*,
  // e do tipo *“Água”*;
  
  const jatoDeAgua = {
    nome: "Jato de Água",
    dano: 40,
    precisão: 100,
  };
  
  copiaPokemon1.novosAtaques.push(jatoDeAgua);
  console.log("Adicionado Ataque Jato de Água à cópia do array: ", copiaPokemon1);
  console.log("----------------------------------");
  
  // f) Imprima os dois objetos no console.
  
  console.log("Impressão Final Array Original: ", pokemon1);
  console.log("Impressão Final Array Cópia ", copiaPokemon1);