const prompt = require("prompt-sync")();
const x = Number(prompt("Velocidade em km/h: "));
if (x < 10) {
 console.log("Lento");
} else if (x <= 20) {
 console.log("Moderado");
} else {
 console.log("Rapido");
}
