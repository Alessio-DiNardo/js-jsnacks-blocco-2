//Generare numero casuale tra 1 e 100 COMPRESI. Continuare a chiedere all'utente di indovinare il numero fino a quando non lo indovina.
//Ogni volta che sbaglia stampiamo in console un messaggio che gli/le dice se il numero da indovinare è maggiore o minore.
//Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.



//genero un numero casuale

let casualNumber = Math.round(Math.random() * 100);

const userNumber = parseInt(prompt("Insert your number"));

while (userNumber != casualNumber && userNumber === casualNumber ){

        if (userNumber != casualNumber && userNumber < casualNumber){
            console.log("your number is wrong and - than..");
            userNumber = parseInt(prompt("Insert your number"));
        } if (userNumber != casualNumber && userNumber < casualNumber){
            console.log("your numer is wrong and + than..");
            userNumber = parseInt(prompt("Insert your number"));
        } else if (userNumber === casualNumber){
            console.log("congratulation you number is true");
        }

}