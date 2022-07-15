//Template String

const nombre = "Santiago"
const apellido = "Rivera"

const fullName = ` ${nombre} ${apellido} `;
const nombreCompleto = nombre + " " + apellido;


console.log(fullName);
console.log(nombreCompleto);

function getSaludo() {
    return "Hola mundo" + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)


