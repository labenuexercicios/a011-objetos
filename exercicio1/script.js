/*Ejercicio 1

Cree una matriz vacía llamada bolsa y siga los pasos a continuación:

a) Crea tres objetos que representarán frutas en la bolsa.
 Los objetos deben tener las siguientes propiedades:

nombre: cadena;
precio: número;
disponibilidad: booleano;

b) Agregue los objetos a la matriz de bolsas usando
 el método push()

c) Imprima la matriz de bolsas y asegúrese de que 
ahora sea una matriz con tres
 objetos
 */
const arrayVacio = []

//Crie três objetos  
const bolsa = [{
nome: 'frutilla',
precio: 84,   
disponibilidad:true
},
{
    nome: 'pera',
    precio: 84,   
    disponibilidad:true
    },
    
    {
        nome: 'manga',
        precio: 84,   
        disponibilidad:true
        },]
arrayVacio.push(bolsa)
console.log(arrayVacio)