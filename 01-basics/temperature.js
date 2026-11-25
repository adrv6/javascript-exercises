
// Ejercicio: convertir una temperatura de grados Fahrenheit a Celsius.

function fahrenheitACelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

const fahrenheit = 43;
const celsius = fahrenheitACelsius(fahrenheit);

console.log(`${fahrenheit} °F equivalen a ${celsius.toFixed(2)} °C`);