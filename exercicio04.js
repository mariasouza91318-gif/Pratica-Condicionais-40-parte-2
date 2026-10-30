const prompt = require("prompt-sync")();
const x = Number(prompt("Minutos de atraso: "));
if (x <= 0) {
 console.log("No prazo");
} else if (x <= 15) {
 console.log("Atraso pequeno");
} else if (x <= 40) {
 console.log("Atraso moderado");
} else {
 console.log("Atraso grande");
}
