const prompt = require("prompt-sync")();
const x = Number(prompt("Tamanho em cm: "));
// As condicoes sao testadas em ordem.
if (x < 10) {
 console.log("Muito pequeno");
} else if (x < 20) {
 console.log("Pequeno");
} else if (x < 40) {
 console.log("Medio");
} else {
 console.log("Grande");
}
