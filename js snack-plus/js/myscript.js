/**
 * 
 * Generare una lista usando una funzione:
 * nell'html ci dovrà essere esclusivamente un elemento ul parent,
 * attraverso una funzione creiamo un singolo elemento html di tipo li
 * poi ne aggiungiamo una decina all'ul, sempre via js.
 * 
 * BONUS:
 * Se clicchiamo sul li il suo testo verrà sbarrato.
 */

const ulElement = document.querySelector("ul");

for (let index = 0; index < 10; index++) {
    ulElement.appendChild(getNewLiElement());
}

function getNewLiElement(){
    const newLiElement = document.createElement("li");
    newLiElement.classList.add("list-item");
    newLiElement.innetHTML = "Elemento della spesa";

    return newLiElement;
}










