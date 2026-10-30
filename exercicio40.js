const prompt = require("prompt-sync")();
let a = Number(prompt("saldo A: "));
let b = Number(prompt("saldo B: "));
console.log("Antes:", a, b);
const auxiliar = a;
a = b;
b = auxiliar;
console.log("Depois:", a, b);
if (a > b) {
  console.log("A maior");
} else if (a < b) {
  console.log("B maior");
} else {
  console.log("Valores iguais");
}
if (a >= 50 && b >= 50) {
  console.log("Ambos pelo menos 50");
} else if (a >= 50 || b >= 50) {
  console.log("Apenas um pelo menos 50");
} else {
  console.log("Ambos abaixo de 50");
}
