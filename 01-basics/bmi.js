// Ejercicio: calcular el índice de masa corporal (IMC) a partir
// del peso (kg) y la altura (m), e indicar la categoría.

function calcularIMC(peso, altura) {
  return peso / altura ** 2;
}

function categoriaIMC(imc) {
  if (imc < 18.5) return "Bajo peso";
  if (imc < 25) return "Peso normal";
  if (imc < 30) return "Sobrepeso";
  return "Obesidad";
}

const peso = 70;
const altura = 1.75;

const imc = calcularIMC(peso, altura);

console.log(`IMC: ${imc.toFixed(2)} (${categoriaIMC(imc)})`);