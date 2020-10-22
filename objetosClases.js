//objetos


let carro = {

    marco: 'nissan',
    modelo: 'skyline',
    puertas: 4
}

//console.log(carro);
console.log(carro.puertas);


//arreglos de objetos

let canserbero = {

    nombre: 'Marco',
    genero: 'rap',
    album: 'muerte',
    tema: 'jeremias',
    img: 'can.png'
}
let mach = {

    nombre: 'Marco1',
    genero: 'rap1',
    album: 'muerte1',
    tema: 'jeremias1',
    img: 'nach.png'
}

let tupac = {

    nombre: 'Marco2',
    genero: 'rap2',
    album: 'muerte2',
    tema: 'jeremias2',
    img: 'pac.png'
}

let raperos = [canserbero, mach, tupac]

console.log(raperos);


for (var i = 0; i < raperos.length; i++) {

    let rapero = raperos[i];

    let tabla = `
<div class="card" style="width: 18rem;">
  <img src="imagenes/${rapero.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> ${rapero.nombre}</h5>
    <h5 class="card-title"> ${rapero.genero}</h5>
    <h5 class="card-title"> ${rapero.album}</h5>
    <h5 class="card-title"> ${rapero.tema}</h5>
 
  </div>
</div>`;
    document.write(tabla);

}

//clases

let heroes = {

    nombre: 'dead pool',
    poder: 'regeneracion',
    grupo: 'xforce'

}

class Heroes {


    constructor(nombreh, poderh, grupoh) {

        this.nombre = nombreh;
        this.poder = poderh;
        this.grupo = grupoh;
    }
}

let villano = new Heroes('bromas', 'inmortal', 'band');

console.log(villano);


//metodos casa inteligente


let habitaciones = {

    dueno: 'nombre',
    numero: 1
}

class Habitaciones {

    constructor(duenop, numeroh) {
        this.dueno = duenop;
        this.numero = numeroh;
        this.bomdillo = false;
        this.bomdillo2;


    }

    encenderBombillo() {
        //console.log('El bombillo esta prendido')

        if (this.bomdillo) {
            //console.log(this.bomdillo);
            console.error(`Ya dañaste el bombillo de nuevo ${this.dueno} la habitación es la numero ${this.numero}`);


        } else {
            this.bomdillo = true;
            console.log("el bombillo esta prendido");
        }
    }
}

let dueño2 = new Habitaciones('deap pool', 2);