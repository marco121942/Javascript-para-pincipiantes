let numero = [15, 16, 85];
let meses = ['Enero', 'Febrero', 'Marzo'];
let comida = new Array('arroz con pollo', 'pollo frito');

console.log(comida);



var heroes = ['goku', 'batman', 'iroman'];

var compania = ['dragon ball', 'dc', 'marvel'];

//console.log(heroes[1]);

for (i = 0; i < heroes.length; i++) {
    console.log(heroes[i] + ' ' + compania[i]);

}

//array anidado
let actividades = [

    ['Entro alas', +9 + ':' + 30],
    ['Dormir', +8 + ':' + 20]
]

console.log(actividades[0, 0]);

//tarea array

var activities = [
    ['Entro a las 🏀 ' + 9 + ' : ' + 30],
    ['mi almuerzo es a las 💯 ' + 1 + ' : ' + 45],
    ['juego en el telefono a las 📍 ' + 3 + ' : ' + 50],
    ['Y duermo a las  🏉' + 10 + ' : ' + 30]
];

let nombre = prompt('Ingrese su nombre');

console.log(activities[0, 0]);

var tablet = `
<table class="table table-dark">
  <thead>
    <tr>
    <th scope="row">Bienvenido ${nombre} su calendario es:</th>
      <th scope="col">Hora de trabajar</th>
      <th scope="col">Hora de comida</th>
      <th scope="col">Hora de jugar</th>
      <th scope="col">Hora de dormir</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Hora</th>
      <td>${activities[0,0]}</td>
      <td>${activities[1,1]}</td>
      <td>${activities[2,2]}</td>
      <td>${activities[3,3]}</td>
    </tr>
    
  </tbody>
</table>
`;
document.write(tablet);