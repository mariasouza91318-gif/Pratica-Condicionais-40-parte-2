const prompt = require("prompt-sync")();
const x = Number(prompt("Camisetas prontas: "));
if (x < 0) {
 console.log("Valor invalido");
} else if (x < 20) {
 console.log("Inicio");
} else if (x < 50) {
 console.log("Em andamento");
} else if (x < 100) {
 console.log("Quase la");
} else {
 console.log("Meta concluida");
}
