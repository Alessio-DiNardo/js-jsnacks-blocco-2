//Generare numero casuale tra 1 e 100 COMPRESI. Continuare a chiedere all'utente di indovinare il numero fino a quando non lo indovina.
//Ogni volta che sbaglia stampiamo in console un messaggio che gli/le dice se il numero da indovinare è maggiore o minore.
//Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.



//genero un numero casuale

const casualNumber = Math.floor((Math.random() * 100) + 1);

let userNumber = parseInt(prompt("Insert your number"));

while (userNumber != casualNumber ){

        if (userNumber < casualNumber){
            console.log("your number is wrong and - than..");
        } else ( userNumber > casualNumber){
            console.log("your numer is wrong and + than..");
        }
            userNumber = parseInt(prompt("Insert your number"));
        }

console.log("you gyessed it! the number was: ", casualNumber);