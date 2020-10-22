//una clase en css puede repetirse mediante un id no
let elemento = document.getElementById("Iron-man");

let nombre = "";

function cambiarElemento(nombre) {
    nombre = prompt("Introduce el nombre");

    elemento.innerHTML = nombre;
    //elemento.style.background = nombre;

}


cambiarElemento();