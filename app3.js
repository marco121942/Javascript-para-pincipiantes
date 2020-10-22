window.addEventListener('load', function() {

    let respuesta = document.getElementById('res');

    respuesta.addEventListener('keydown', uppercase);

    //keypress
    //keydown
    function uppercase() {

        let valor = "TIPOS DE DATOS";

        respuesta.value = respuesta.value.toUpperCase();

        if (respuesta.value == valor) {
            alert("la respuesta es correcta");
            console.log(respuesta.value);
            respuesta = respuesta.style.backgroundColor = "green";

        } else {
            alert("la respuesta es incorrecta");
        }
    }


});