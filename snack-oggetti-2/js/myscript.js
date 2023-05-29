// Crea un array di 10 oggetti che rappresentano un peperone, indicando per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutti i peperoni.

// Bonus:
// crea un peperone con una funzione



const peperonsVariety = [
{
    Name : "peperoneDiPonteCorvo",
    Form : "cornetto",
    Color : "Red",
    weight: 2.5,
    length: 10,
},

{
    Name : "peperoneDiCarmagnola",
    Form : "corno di Bue",
    Color : "Red",
    weight: 5.5,
    length: 10,
},
{
    Name : "peppo",
    Form : "rotondo",
    Color : "yellow",
    weight: 1,
    length: 10,
},

{
    Name : "peperoneRosa",
    Form : "triangol",
    Color : "orange",
    weight: 0.2,
    length: 2,
},
{
    Name : "peppapig",
    Form : "circle",
    Color : "pink",
    weight: 2.5,
    length: 15,
},

{
    Name : "peperoneCrusco",
    Form : "small",
    Color : "Red",
    weight: 1.5,
    length: 5,
},
{
    Name : "peperoneCrusco",
    Form : "small",
    Color : "Red",
    weight: 1.5,
    length: 5,
},
{
    Name : "peperoneCrusco",
    Form : "small",
    Color : "Red",
    weight: 1.5,
    length: 5,
},
{
    Name : "peperoneCrusco",
    Form : "small",
    Color : "Red",
    weight: 1.5,
    length: 5,
},
{
    Name : "peperoneEtrusco",
    Form : "giant",
    Color : "green",
    weight: 20,
    length: 20,
},

]

console.log("peperonsVariety");

let sumOfWeights = 0;


for (let index = 0; index < peppers.length; index++) {
    sumOfWeights += peppers[index].weight;
}
