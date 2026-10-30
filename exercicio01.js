const prompt = require("prompt-sync")();
const x = Number(prompt("Temperatura (C): "));
// As condicoes sao testadas em ordem.
if (x < 0) {
 console.log("Congelando");
} else if (x <= 5) {
 console.log("Temperatura ideal");
} else {
 console.log("Verificar refrigeracao");
}