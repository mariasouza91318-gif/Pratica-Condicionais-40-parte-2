const prompt = require("prompt-sync")();
const x = Number(prompt("Pacotes: "));
// As condicoes sao testadas em ordem.
if (x <= 0) {
 console.log("Sem estoque");
} else if (x < 5) {
 console.log("Estoque critico");
} else if (x < 15) {
 console.log("Estoque baixo");
} else {
 console.log("Estoque suficiente");
}
