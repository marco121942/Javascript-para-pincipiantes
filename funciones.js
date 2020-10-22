function saludo() {

    console.log("Hola Mundos");


}


saludo();

function saludar(saludarte, nombre) {

    return saludarte + nombre;


}


let salud = saludar('hola', 'daniel');

console.log(salud);


function vegetariana() {
    let com = `
    
<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Ensalada</h5>
    <p class="card-text">Brtote de lechuga, 6 almendras</p>
   
  </div>
  <div class="card-footer text-muted">
   precio : 100$
  </div>
</div>
    `;
    document.write(com);
}
vegetariana();


function carnes() {
    let com = `
    
<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Pollo</h5>
    <p class="card-text">pechuga,y pico</p>
   
  </div>
  <div class="card-footer text-muted">
   precio : 10$
  </div>
</div>
    `;
    document.write(com);
}
carnes();


let com = parseInt(prompt(`Ingrese un número para el menú
1 -vegetariana
2-carnes`));
switch (com) {
    case 1:
        vegetariana();
        break;
    case 2:
        carnes();
        break;


}