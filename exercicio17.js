const prompt = require("prompt-sync")();
const x = Number(prompt("Distancia em km: "));
// As condicoes sao testadas em ordem.
if (x < 2) {
 console.log("Curta");
} else if (x < 5) {
 console.log("Media");
} else if (x < 10) {
 console.log("Longa");
} else {
 console.log("Muito longa");
}
