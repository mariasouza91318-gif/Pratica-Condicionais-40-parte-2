const prompt = require("prompt-sync")();
const x = Number(prompt("Pecas produzidas: "));
// As condicoes sao testadas em ordem.
if (x < 10) {
 console.log("Abaixo da meta");
} else if (x < 20) {
 console.log("Meta parcial");
} else if (x < 30) {
 console.log("Meta atingida");
} else {
 console.log("Meta superada");
}
