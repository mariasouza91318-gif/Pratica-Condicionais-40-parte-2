const prompt = require("prompt-sync")();
const x = Number(prompt("Pontuacao: "));
if (x < 0) {
 console.log("Valor invalido");
} else if (x < 25) {
 console.log("Iniciante");
} else if (x < 50) {
 console.log("Intermediario");
} else if (x < 75) {
 console.log("Avancado");
} else {
 console.log("Especialista");
}
