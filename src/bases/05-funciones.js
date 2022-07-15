//Funciones
// Las funciones normalmente es mejor hacerlas cómo una constante.
// const saludar = function(nombre) {
//     return `hola, ${nombre} `;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`
}

//Función mucho más ligera para hacer en JS.
const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;



// console.log(saludar)
console.log(saludar2("Santiago"))
console.log(saludar3("Santiago"))
console.log(saludar4())

//otra forma de hacer la función pero sin el return, los parentesis de por si ya nos devuelve un valor, si lo imprimimos en consola.
const getUser = () => 
    ({
        uid: 'ABC123',
        username: 'El_man1503'
    });

const user = getUser();
console.log(user)

//Tarea.
const getUsuarioActivo = (nombre) => 
    ({
        uid: "ABC567",
        username: nombre
    });
const usuarioActivo = getUsuarioActivo('Santiago');
console.log(usuarioActivo); 