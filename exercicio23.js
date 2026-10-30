const prompt = require("prompt-sync")();
const x = Number(prompt("Energia em kWh: "));
if (x < 0) {
 console.log("Valor invalido");
} else if (x < 10) {
 console.log("Geracao baixa");
} else if (x < 30) {
 console.log("Geracao media");
} else {
 console.log("Geracao alta");
}
