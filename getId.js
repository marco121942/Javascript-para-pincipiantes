document.getElementsByClassName("verde cuadro")[0].style.background = "green";

document.getElementsByClassName("amarillo cuadro")[0].style.background = "yellow";

document.getElementsByClassName("uno cuadro")[0].style.background = "red";

let negro = document.getElementById('black');

negro = negro.addEventListener('click', black);


function black() {

    var cuadro = document.getElementsByClassName("cuadro");

    for (var i = 0; i < cuadro.length; i++) {
        cuadro[i].style.background = "black";

    }

}


let azul = document.getElementById('blue');

azul = azul.addEventListener('click', otro);


function otro() {

    var cuadros = document.getElementsByTagName('h4');

    for (var i = 0; i < cuadros.length; i++) {
        cuadros[i].style.background = "blue";

    }

}