//Calcola la somma e la media dei primi 10 numeri

let numberList = [2, 4, 6 ,8 ,10 , 12, 14, 16, 18, 20];
console.log(numberList);
let sum = 0;

for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i];
}
console.log(sum, sum / 10);
