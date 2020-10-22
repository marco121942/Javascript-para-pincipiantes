document.getElementById('boton').addEventListener('click', thanos);

document.getElementById('thano').style.display = "none";

function thanos() {
    document.getElementById('thanos').src = "imagenes/thanos.gif";
    document.getElementById('thano').style.display = "block";

}
//iron man

document.getElementById('boton-iroman').addEventListener('click', iroman);
document.getElementById('iroman').style.display = "none";

function iroman() {
    document.getElementById('iro-man').src = "imagenes/ironman.gif";

    //ocultando div y boton thanos
    document.getElementById('thano').style.display = "none";
    document.getElementById('boton').style.display = "none";

}


document.getElementById('boton-thanos2').addEventListener('dblclick', thanosMuerte);

document.getElementById('thano-kill').style.display = "none";

function thanosMuerte() {
    document.getElementById('thanos2').src = "imagenes/thanos2.gif";
    document.getElementById('thano-kill').style.display = "block";


    //ocultando div y boton iroman
    document.getElementById('iroman').style.display = "none";
    document.getElementById('boton-iroman').style.display = "none";

}