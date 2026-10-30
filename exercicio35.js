const prompt = require("prompt-sync")();
// Leia dois valores que serao trocados.
let a = Number(prompt("itens setor A: "));
let b = Number(prompt("itens setor B: "));
console.log("Antes:", a, b);
const auxiliar = a; // Guarda o valor original de A.
a = b; // A recebe o valor original de B.
b = auxiliar; // B recebe o valor original de A.
console.log("Depois:", a, b);
// Primeiro if: compare os valores apos a troca.
if (a > b) {
  console.log("A maior");
} else if (a < b) {
  console.log("B maior");
} else {
  console.log("Valores iguais");
}
// Segundo if independente: verifica uma outra regra.
if (a >= 50 && b >= 50) {
  console.log("Ambos pelo menos 50");
} else if (a >= 50 || b >= 50) {
  console.log("Apenas um pelo menos 50");
} else {
  console.log("Ambos abaixo de 50");
}
