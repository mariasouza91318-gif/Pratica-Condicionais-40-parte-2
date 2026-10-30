const prompt = require("prompt-sync")();
const x = Number(prompt("Nivel de bateria %: "));
if (x < 20) {
 console.log("Critico");
} else if (x <= 60) {
 console.log("Moderado");
} else {
 console.log("Cheia");
}
