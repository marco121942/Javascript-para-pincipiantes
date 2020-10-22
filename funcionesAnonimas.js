/* function saludo(decir, nombre, con) {

    this.nombre = nombre;

    nombre = prompt("Digite su nombre");

    let saludos = decir + nombre;
    con(saludos);

}


saludo('hola', dato => {

    console.log(dato);
}, dato => {

    console.log(dato);
});
 */

//promesa


function procesoAsincrono() {

    let promesa = new Promise((resolve, reject) => {
        setTimeout(function() {

            console.log("El proceso asincrono ha comenzado");
            resolve();
        }, 2000);

    })

    return promesa;
}

procesoAsincrono().then(function() {
    console.log("El resolve ha sido ejecutado");


}, function() {
    console.log("El proceso se cancelo");
});