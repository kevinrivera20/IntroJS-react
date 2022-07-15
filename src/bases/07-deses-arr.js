//desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , ,p3 ] = personajes;

console.log( p3 )

//Desestructuración de array simple, utilizando parametros, con cualquier nombre.
const retornaArreglo = () => {
    return['ABC', 123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros)  

//Tarea
//Forma de hacer una destructuración más fácil.
const userState = (valor) => {
    return [valor, () =>{ console.log("Hola Mundo") } ];
} 

const [nombre, setNombre] = userState('Goku'); 
console.log( nombre )
setNombre();

//Forma de hacer una destructuración más fácil 2

const usuario = (valor2) => {
    return [valor2, () => {console.log("Hola mundo")}];
}

const [ nombre1, setNombre1 ] = usuario("Santiago");
console.log(nombre1);
setNombre1();   
