//Creare una funzione che restituisca un array di quattro numeri randomici diversi tra loro tra 1 e 5 inclusi

function getRandomUniqueNumber( minNum, maxNum, elements){
    const  numberList = [];
    if ( (maxNum - minNum) < elements) {
        return [];
    }
}

while (numberList.length < elements) {
    const newRandomNumber = getRandomInt(minNum, maxNum);
    
    if (!numberList.includes(newRandomNumber)){
        numberList.push(newRandomNumber);
    }

    return numberList;
}




function getRandomInt(minumNumber, maximumNumber){
    const randomNumber = Math.floor( Math.random() * ( maximumNumber - minumNumber +1) + minumNumber);
    console.log(getRandomInt)
    return randomNumber;
}