const prompt = require("prompt-sync")();
const x = Number(prompt("Paginas lidas: "));
// As condicoes sao testadas em ordem.
if (x < 10) {
 console.log("Inicio");
} else if (x < 30) {
 console.log("Em progresso");
} else if (x < 60) {
 console.log("Muito bem");
} else {
 console.log("Meta superada");
}
