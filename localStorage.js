//let nombre = localStorage.setItem('nombre', 'Marco');
//localStorage.removeItem('nombre');
//console.log(localStorage.getItem('nombre'));


//variables

const listaPelicula = document.getElementById('lista-peliculas');

eventos();

function eventos() {

    document.getElementById('formulario').addEventListener('submit', agregarp);

    listaPelicula.addEventListener('click', borrarp);


    document.addEventListener('DOMContentLoaded', cargarp);

}

function agregarp(p) {

    p.preventDefault();

    //console.log('formulario enviado');

    const peliculas = document.getElementById('Peliculas').value;

    //console.log(peliculas);
    const listado = document.createElement('li');

    listado.innerHTML = peliculas;

    listaPelicula.appendChild(listado);


    //crear botón borrar

    const borrar = document.createElement('a');
    borrar.classList = 'borrar-pelicula';
    borrar.innerText = 'X';
    listado.appendChild(borrar);

    agregandop(peliculas);
}

function borrarp(p) {

    p.preventDefault();
    // console.log('click en la lista de peliculas');

    if (p.target.className === 'borrar-pelicula') {

        //console.log(p.target.parentElement);
        console.log(p.target.parentElement.remove());

        alert('Pelicula borrada');

        borrarpl(p.target.parentElement.innerText);

        //console.log('click en la x');
    } //else {
    //console.log('click fuera de la x');

    //}


}

//agregando pelicula al LS


function agregandop(peliculas) {

    let pelicula;
    pelicula = obteniendop();
    pelicula.push(peliculas);


    localStorage.setItem('peliculas', JSON.stringify(pelicula));

}

function obteniendop() {

    let pelicula;

    if (localStorage.getItem('peliculas') === null) {

        pelicula = [];

    } else {

        pelicula = JSON.parse(localStorage.getItem('peliculas'));


    }

    return pelicula;

}

function cargarp() {

    let pelicula;
    pelicula = obteniendop();

    pelicula.forEach(function(peliculas) {


        const listado = document.createElement('li');

        listado.innerHTML = peliculas;

        listaPelicula.appendChild(listado);


        //crear botón borrar

        const borrar = document.createElement('a');
        borrar.classList = 'borrar-pelicula';
        borrar.innerText = 'X';
        listado.appendChild(borrar);

    });


}

function borrarpl(peliculas) {

    let pelicula, borrarpl;

    borrarpl = peliculas.substring(0, peliculas.length - 1);
    pelicula = obteniendop();

    pelicula.forEach((peliculas, index) => {

        if (borrarpl === peliculas) {
            pelicula.splice(index, 1);



        }

    });

    localStorage.setItem('peliculas', JSON.stringify(pelicula));

}