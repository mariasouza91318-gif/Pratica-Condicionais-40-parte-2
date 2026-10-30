const prompt = require("prompt-sync")();
const x = Number(prompt("Peso em kg: "));
// As condicoes sao testadas em ordem.
if (x < 3) {
 console.log("Leve");
} else if (x <= 6) {
 console.log("Atencao");
} else {
 console.log("Muito pesada");
}
