/*Ejercicio 1: Saludo personalizado
Crea una función llamada saludar que acepte un nombre como argumento y devuelva un mensaje de saludo como: "¡Hola, [nombre]!".

Ejercicio 2: Suma de dos números
Crea una función llamada suma que acepte dos números y devuelva la suma de estos.

Ejercicio 3: Números pares Escribe una función llamada esPar que reciba un número y devuelva true si el número es par o false si es impar.

Ejercicio 4: Mayor de tres números Escribe una función llamada mayorDeTres que reciba tres números como argumentos y devuelva el número mayor.

Ejercicio 5: Conversión de grados Celsius a Fahrenheit
Crea una función llamada celsiusAFahrenheit que convierta una temperatura de grados Celsius a Fahrenheit usando la fórmula: F = (C * 9/5) + 32.*/

//ejercicio 1 escribir nommbre y retorne con un saludo "¡Hola [nombre]!"

function saludar (nombre) {
  if (nombre) {
  return "¡Hola! " + nombre
}
}
console.log(saludar ("jamile"))

//ejercicio 2 Suma de dos números
function sumar (a,b) {
return a + b;
}
console.log(sumar(5,7));

//ejercicio 3 espar, si "true" y sino "false"
function espar (i=numero) {
if (i %2==0) { //comprobamos si es par a través del módulo(%) numero 2 (par), y si es par, cumple la condicional.
   return "true" }
   else {
    return "False"
  } //comprobamos si es impar si no cumple la función
}
 console.log(5 %2==0);
