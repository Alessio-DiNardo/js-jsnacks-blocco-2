//Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.



let numberList = [];
let sum = 0:

while (sum < 50){
    const userNumber = parseInt(prompt("Type a new number"));
    sum = sum + userNumber;
    numberList.push(userNumber);
    console.log(userNumber)
}

console.log(sum);
console.log(numberList);



