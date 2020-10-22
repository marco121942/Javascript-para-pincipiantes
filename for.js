//for

var juegos = ['san andres', 'call of duty', 'god of war']

for (var i = 0; i < juegos.length; i++) {
    console.log(juegos[i]);

}


let heroe = [{
        nombre: 'superman',
        edad: 150,
        poder: 'super velocidad'
    },
    {
        nombre: 'batman',
        edad: 20,
        poder: 'super fuerza'
    }

]


for (var i = 0; i <= heroe.length; i++) {
    console.log(heroe[i]);
}
for (let i in heroe) {
    console.log(heroe[i]);

}


let personas = [

    {
        nombre: 'Marco',
        apellido: 'ventura',
        colores: ['osado', 'verde']

    },
    {
        nombre: 'Marco',
        apellido: 'lopez',
        colores: ['rojo', 'azul']

    },
    {
        nombre: 'Marco',
        apellido: 'claudio',
        colores: ['amarrillo', 'gris']

    }
];

for (let persona of personas) {
    console.log(persona);

}

personas.forEach(personaje => console.log(personaje))