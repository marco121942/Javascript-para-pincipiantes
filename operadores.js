//operadores aritmeticos
//+
//-
//*
/// división
//++ aumento
//-- disminución
//%  módulo
//= asignación


//aumento
let manzana = 3;

manzana++;
console.log(manzana);

//disminución
let uva = 5;
if (uva == 15) {
    uva--;
    console.log(uva);
} else {
    uva++;
    console.log(uva);
}

//módulo
//var numero = parseInt(prompt("Ingrese un número"));

//function parImpar(numero) {
//  if (numero % 2 == 0) {
//    return "par";

//} else {
//  return "impar";
//}

//}

//var resultado = parImpar(numero);
//alert("El número: " + numero + " es " + resultado);

//operadores lógicos
//y=and=&&
//o=or=||

let a = 3;
let b = 5;
let c = 8;
let d = 9;


let variable = a <= b && c < d;
if (variable = true) {
    console.log("Somos diferentes");

} else {
    consoloe.log("No somos iguales");
}

let goku = "sayayin";
let vegueta = "sayayin";
let naruto = "ninja";
let sasuke = "ninja";


if (goku == sasuke || naruto != sasuke) {
    console.log(true);

} else {
    console.log(false);
}

//operadores de comparación
//<
var mujeres = 50,
    hombre = 20;

if (mujeres < hombre) {
    console.log("hay más mujeres que hombre");

} else {
    console.log("hay menos  hombre que mujeres");

}

//>
var mujeres = 50,
    hombre = 20;

if (mujeres > hombre) {
    console.log("hay más mujeres que hombre");

} else {
    console.log("hay menos  hombre que mujeres");

}
//3 menor o igual que <=

var pera = 3;
if (pera <= 3) {
    console.log("Hacer jugos");
} else {
    console.log("Dame agua");
}
//3 mayor o igual que >=

var pera = 3;
if (pera >= 3) {
    console.log("Hacer jugos");
} else {
    console.log("Dame agua");
}

//6 igual que ===

var perro = 6;
var gato = 6;

if (perro === gato) {
    console.log("Tenemos la misma cantidad de gatos y perros");

} else {
    console.log("No Tenemos la misma cantidad de gatos y perros");
}

//Diferente !=
// ==->igualdad entre valores
// ===->igualdad entre valores y tipo
var hombre = "masculino";
var mujer = "femenino";

if (hombre != mujer) {
    console.log("Somos fierentes");

} else {
    console.log("Somos iguales");
}