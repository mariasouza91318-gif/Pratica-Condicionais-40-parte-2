const prompt = require("prompt-sync")();
const x = Number(prompt("Peso em kg: "));
if (x <= 1) {
 console.log("Leve");
} else if (x <= 5) {
 console.log("Medio");
} else {
 console.log("Pesado");
}
