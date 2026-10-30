const prompt = require("prompt-sync")();
const x = Number(prompt("Vento em km/h: "));
// As condicoes sao testadas em ordem.
if (x < 20) {
 console.log("Fraco");
} else if (x < 40) {
 console.log("Moderado");
} else if (x < 60) {
 console.log("Forte");
} else {
 console.log("Muito forte");
}
