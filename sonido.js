window.addEventListener("load", () => {



    const sonidos = document.querySelectorAll('.sonidos');

    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector(".visual");
    const colores = [
        "lightcyan",
        " blue",
        "red",
        "yellow",
        "orange",
        " black"
    ];


    pads.forEach((pad, index) => {

        pad.addEventListener("click", function() {
            sonidos[index].currentTime = 0;
            sonidos[index].play();
            crearBolas(index);


        });


    });


    const crearBolas = indexx => {

        const bolas = document.createElement("div");
        visual.appendChild(bolas);
        bolas.style.background = colores[index];

        bolas.style.animation = `jump 1s ease`
    }



});