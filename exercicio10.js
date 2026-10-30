const prompt = require("prompt-sync")();
const x = Number(prompt("Temperatura do forno: "));
if (x < 150) {
 console.log("Baixo");
} else if (x <= 200) {
 console.log("Medio");
} else {
 console.log("Alto");
}
