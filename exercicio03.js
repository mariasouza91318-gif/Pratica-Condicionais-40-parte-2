const prompt = require("prompt-sync")();
const x = Number(prompt("Pontos: "));
if (x >= 90) {
 console.log("Ouro");
} else if (x >= 70) {
 console.log("Prata");
} else if (x >= 50) {
 console.log("Bronze");
} else {
 console.log("Participacao");
}
