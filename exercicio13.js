const prompt = require("prompt-sync")();
const x = Number(prompt("Espera em minutos: "));
// As condicoes sao testadas em ordem.
if (x <= 5) {
 console.log("Rapido");
} else if (x <= 15) {
 console.log("Normal");
} else if (x <= 30) {
 console.log("Demorado");
} else {
 console.log("Muito demorado");
}
