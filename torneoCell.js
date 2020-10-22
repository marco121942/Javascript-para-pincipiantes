//torneo


function Peleador(guerrero) {

    this.guerrero = guerrero;
    this.vida = 100;
    this.ki = 100;

    this.curar = function(querreroA) {

        if (this.ki >= 20) {
            this.ki -= 20;
            querreroA.vida += 20;

        } else {
            alert("tomate una pastilla del ermitano");
            console.error(`resiste ${this.guerrero} tomate esta pastilla del ermitaño`);
        }

        this.console(guerreroA);

    }

    this.console = function(guerreroA) {
        console.log(this);
        console.log(guerreroA);


    }


    this.kameha = function(querreroA) {

        if (this.ki >= 50) {
            this.ki -= 30;
            querreroA.vida -= 50;

        } else {
            querreroA.vida = 0;
            console.error(querreroA.guerrero + "Se murio");
        }
        this.console(guerreroA);

    }

    this.alluahuakbar = function(querreroA) {

        if (this.ki >= 50) {
            this.ki -= 30;
            querreroA.vida -= 100;

        } else {
            querreroA.vida = 0;
            console.error(querreroA.guerrero + "voice" + "gokuuuu");
        }
        this.console(guerreroA);

    }
}

let cell = new Peleador("Cell");
let goku = new Peleador("Goku");
let dende = new Peleador("Dene");
let vegueta = new Peleador("Vegueta");
let freezer = new Peleador("Freezer");
let krilyn = new Peleador("Krilyn");


//console.log(goku);
//console.log(cell);
//dende.curar(goku);