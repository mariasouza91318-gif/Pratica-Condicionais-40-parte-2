const prompt = require("prompt-sync")();
const x = Number(prompt("Temperatura do forno: "));
if (x < 100) {
 console.log("Muito baixo");
} else if (x < 180) {
 console.log("Aquecendo");
} else if (x <= 220) {
 console.log("Ideal");
} else {
 console.log("Muito quente");
}
