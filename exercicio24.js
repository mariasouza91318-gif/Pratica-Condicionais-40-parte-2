const prompt = require("prompt-sync")();
const x = Number(prompt("Horas estacionadas: "));
if (x <= 0) {
 console.log("Tempo invalido");
} else if (x <= 1) {
 console.log("R$ 5");
} else if (x <= 3) {
 console.log("R$ 10");
} else {
 console.log("R$ 20");
}
