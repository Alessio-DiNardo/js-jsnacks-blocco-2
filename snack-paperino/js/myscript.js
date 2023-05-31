/**
 *
 *
 *
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'PapERino'] => ['Pippo', 'Pluto', 'Paperino']

 */


const array = ['pippo', 'PLUTO', 'PapERino', "ciccIo", "Bau", "flauto", "stoP", "Elettrico" ]
const convertedArray = [];


array.forEach((word) => {
    const newArray = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    convertedArray.push(newArray);
})







