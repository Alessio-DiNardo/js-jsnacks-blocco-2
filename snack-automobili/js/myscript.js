/**

Crea un array composto da 15 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: 

nel primo array solo le auto a benzina,  // ciclo for 
nel secondo solo le auto a diesel,  // ciclo foreach
nel terzo il resto delle auto.  //array.filter

Infine stampa separatamente i 3 array.

 */




const automobili = [
    {
        marca: "fiat",
        modello: "grande punto",
        alimentazione: "benzina"
    },
    {
        marca: "audi",
        modello: "a3",
        alimentazione: "benzina"
    },
    {
        marca: "bmw",
        modello: "berlina",
        alimentazione: "benzina"
    },
    {
        marca: "fiat",
        modello: "panda",
        alimentazione: "benzina"
    },
    {
        marca: "volvo",
        modello: "vorm",
        alimentazione: "metano"
    },
    {
        marca: "volkswagen",
        modello: "golf",
        alimentazione: "diesel"
    },
    {
        marca: "renault",
        modello: "clio",
        alimentazione: "metano"
    },
    {
        marca: "citroen",
        modello: "c3",
        alimentazione: "benzina"
    },
    {
        marca: "jeep",
        modello: "renegade 2.0",
        alimentazione: "diesel"
    },
    {
        marca: "ferrari",
        modello: "f120",
        alimentazione: "benzina"
    },
    {
        marca: "lamborghini",
        modello: "sesto elemento",
        alimentazione: "benzina"
    },
    {
        marca: "porche",
        modello: "cabriò",
        alimentazione: "benzina"
    },
    {
        marca: "audi",
        modello: "a1",
        alimentazione: "diesel"
    },
    {
        marca: "jeep",
        modello: "renagade",
        alimentazione: "elettrico"
    },
    {
        marca: "cupra",
        modello: "formentor",
        alimentazione: "benzina"
    },
]


const gasolineCars = [];

for (let index = 0; index < automobili.length; index++) {
    const car = automobili[index];
    if (car.alimentazione === "benzina"){
        gasolineCars.push(car);
    }
    }

const dieselCars = [];

automobili.forEach((element) => {
    if (element.fuelType === "diesel"){
        dieselCars.push(element);

    }
});


const otherCars =

    automobili.filter(car => car.alimentazione !== "diesel" && car.alimentazione !== "benzina" );