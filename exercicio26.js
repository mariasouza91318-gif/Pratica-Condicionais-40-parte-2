const prompt = require("prompt-sync")();
const x = Number(prompt("Idade da arvore: "));
if (x < 0) {
 console.log("Idade invalida");
} else if (x < 3) {
 console.log("Muda");
} else if (x < 10) {
 console.log("Jovem");
} else {
 console.log("Adulta");
}
