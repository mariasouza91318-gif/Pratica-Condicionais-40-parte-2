const prompt = require("prompt-sync")();
const x = Number(prompt("Indice: "));
// As condicoes sao testadas em ordem.
if (x <= 50) {
 console.log("Bom");
} else if (x <= 100) {
 console.log("Regular");
} else if (x <= 150) {
 console.log("Ruim");
} else {
 console.log("Muito ruim");
}
