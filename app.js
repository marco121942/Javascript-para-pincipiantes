//Primer ejercicio
var hola = "Hola mundo";
console.log(hola);

//Segundo ejercicio
var numero = 15;
var letra = "1";
var letra2 = 1;

console.log(letra2 + numero);

//Tercer ejercicio
var num = 16;
var doc = 14.5;

console.log(doc + num);

//Cuarto ejercicio
var verdad = true;
var fal = false

console.log(fal);

//Quinto ejercicio
var numero = 5;
if (numero == 20) {

    console.log(true);

} else {
    console.log(false);
}

//Sexto ejercicio  var y let
var numero = 15;
var numero = 14;

console.log(numero);

//Septimo ejercicio  var y let
//let numero = 15;
//let numero = 14;

console.log(numero);

//Octavo ejercicio  var y let
let numero2 = 15;
numero2 = 14;

console.log(numero2);

//Noveno ejercicio const
const saludos = "Bienvenido";
let nombre = "Daniel";
var apellido = "Patricio";

//saludos = "hola"

console.log(saludos + ' ' + nombre + ' ' + apellido);

//declarar variables juntas

let hola2 = "Hola mundo",
    lenguaje = "Javascript";
console.log(hola2 + ' ' + lenguaje);


//concat

//let hola3, lenguaje1;
//console.log(hola3 + ' ' + lenguaje1);

let hola3 = "Hola Mundo",
    lenguaje1 = "Javascript";
console.log(hola3.concat(' ', lenguaje1));

//toUpperCase ->convierte en mayuscula

console.log(hola3.toUpperCase());
//toLowerCase-> convierte en minuscula

console.log(hola3.toLowerCase());
//length ->el tamaño d ela cadena
console.log(hola3.length);

//indexOf->nos muestra en que posición esta lo que buscamos

console.log(hola3.indexOf('a'));

//split->almaecna en un array

console.log(hola3.split(' '));

//replace->reemplaca el valor de la cadena por otra

console.log(hola3.replace('Hola', 'segundo valor'));

//Convertir string a número14.3

var letra = "55";

console.log(Number(letra) + 5);

//Convertir string a número
//let cantidad = parseInt(prompt("dame un numero"));

//console.log(cantidad);

//Convertir string a número
//let cantidad = parseFloat(prompt("dame un numero"));

//console.log(cantidad);


//cambiar de número a string

let ns = 1546;
let n = 1546;

console.log(n);
ns = String(ns);

console.log(ns);

//otro método

let ns1 = 1546;
ns1 = ns1.toString();

console.log(ns1);

//incluir código HTML

let saluditos = "Hola";
let nombres = "Daniel";
let apellidos = "Soto";

let pagina = `

<h1>${saluditos}</h1>
<h4>${nombres}${apellidos}</h4>

`;
console.log(pagina);

document.write(pagina);