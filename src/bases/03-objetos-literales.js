const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    //no poner caracteres especiales.
    direccion: {
        ciudad: "New york",
        zip: 55321321,
        lat: 14.3232,
        lng: 34.2132432
    }
}

// console.table( persona );
console.log(persona); 


//Cuando se quiere hacer otra persona lo que podemos hacer es cambiar de contenido, la que ya habíamos creado.
const persona2 = {
    nombre: "Peter",
    apellido: "Vanegas",
    edad: 7,
    //no poner caracteres especiales.
    direccion: {
        ciudad: "Colombia",
        zip: 55321321,
        lat: 14.3232,
        lng: 34.2132432
    }
}

console.log(persona2)
