const prompt = require("prompt-sync")();
const x = Number(prompt("Umidade em %: "));
// As condicoes sao testadas em ordem.
if (x < 30) {
 console.log("Muito seco");
} else if (x < 60) {
 console.log("Adequado");
} else if (x <= 80) {
 console.log("Umido");
} else {
 console.log("Muito umido");
}
