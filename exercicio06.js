const prompt = require("prompt-sync")();
const x = Number(prompt("Ruido em dB: "));
if (x < 40) {
 console.log("Silencioso");
} else if (x <= 70) {
 console.log("Moderado");
} else {
 console.log("Barulhento");
}
