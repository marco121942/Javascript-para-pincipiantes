let nombre = prompt("Introduce tu nombre");

let valor = confirm("Desea mostrar su nombre (ok) de lo contrario cancelar ");

if (valor == true) {

    document.write(nombre);
    alert(`nombre agregado ${nombre}`);

} else {

    document.getElementById('cambiar').innerHTML = "presione ok para mostrar su nombre";
}