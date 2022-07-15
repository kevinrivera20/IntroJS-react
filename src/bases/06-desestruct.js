//Desestructuración de objetos.
//Asignación desestructurante.

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: 'Ironman'
};

// const {nombre, edad, clave} = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const userContext = ({clave, nombre, edad, rango = "Capitan"}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat:12.3454,
            lng: -12.3233
        }
    }
}

//Desustructuración de objetos, entrando a un solo elemento de un objeto.
const {nombreClave, anios, latlng:{lat, lng}} = userContext(persona);

console.log(nombreClave, anios)
console.log(lat, lng)


