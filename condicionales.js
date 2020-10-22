let frutas = ['mangos', 'uvas', 'manzanas'];

if (frutas[0] == 'mangoss') {
    console.log('Haz un jugo de mango');

} else if (frutas[2] != 'uva') {
    console.log('Haz un jugo de manzana');
} else {
    console.log('Haz un jugo de uva');
}



//
let meses = 1;

switch (meses) {

    case 1:
        console.log("enero");
        break;

    case 2:
        console.log("febrero");
        break;
    case 3:
        console.log("marzo");
        break;

}

//while y do

let todo = ['comer', 'dormir', 'estudiar javascript'];

let i = 0;

//console.log(todo.length);

while (i < todo.length) {
    console.log(`
    tengo que: ${todo[i]}`

    );
    i++;
}

//
let tabla = parseInt(prompt("Digite el número para la tabla"));
let a = 0;
do {
    a++;
    var resultado = `
    <li>${tabla } * ${a} = ${tabla * a}</li>
    `;

    document.write(resultado);
} while (a < 10) {


}