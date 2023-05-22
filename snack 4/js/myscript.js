//Dare la possibilità di inserire due parole.
//Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
//Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const wordOne = prompt("insert one word");
const wordTwo = prompt("insert one word");

if (wordLegth(wordOne, wordTwo)){
    console.log("sono lunghe uguali");
} else if (wordOne.length > wordTwo.length){
    console.log("la prima parola è più lunga");  
} else (wordOne.length < wordTwo.length){
    console.log("la seconda parola è più lunga");
}





function wordLegth(wordOne, wordTwo) {
    
    if (wordOne.legth === wordTwo.legth) {
        return true;
    }

    return false;
    }






