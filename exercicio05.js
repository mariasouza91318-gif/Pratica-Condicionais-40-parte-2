const prompt = require("prompt-sync")();
const x = Number(prompt("Consumo em litros: "));
if (x < 50) {
 console.log("Baixo");
} else if (x <= 100) {
 console.log("Moderado");
} else {
 console.log("Alto");
}
