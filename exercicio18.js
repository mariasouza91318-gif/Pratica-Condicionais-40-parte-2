const prompt = require("prompt-sync")();
const x = Number(prompt("Turbidez em NTU: "));
// As condicoes sao testadas em ordem.
if (x < 1) {
 console.log("Boa");
} else if (x < 5) {
 console.log("Regular");
} else if (x < 10) {
 console.log("Ruim");
} else {
 console.log("Muito ruim");
}
