let saludo = "Hola un gusto";

let nombre, edad;
nombre = (prompt("Ingrese su nombre por favor"));
edad = parseInt((prompt("Ingrese su edad por favor")));

let pagina = `
<p>${saludo}</p>
<label>${nombre}</label>
<label>${edad}</label>
`;
document.write(pagina);