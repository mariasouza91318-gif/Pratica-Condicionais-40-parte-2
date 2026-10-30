const prompt = require("prompt-sync")();
const x = Number(prompt("Volume em %: "));
if (x < 0 || x > 100) {
 console.log("Valor invalido");
} else if (x < 20) {
 console.log("Critico");
} else if (x < 50) {
 console.log("Baixo");
} else if (x < 80) {
 console.log("Medio");
} else {
 console.log("Alto");
}
