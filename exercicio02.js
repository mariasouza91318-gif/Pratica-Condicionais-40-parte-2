const prompt = require("prompt-sync")();
const x = Number(prompt("Altura em cm: "));
if (x < 100) {
 console.log("Nao permitido");
} else if (x < 140) {
 console.log("Somente acompanhado");
} else {
 console.log("Liberado");
}