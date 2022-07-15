//Arreglos, es una colección de información que se encuentra dentro de una misma variable.


//Esta es una forma de usarla, pero no es tan común
// const arreglo = new Array( 100 );
// arreglo.push(1)
//Nosotros  no vamos a utilizar push para insertar algo a un arreglo 
const arreglo = [1, 2, 3, 4 ];

//Los puntos se utilizan para copiar el array anterior y añadir un elemento también y estos son los que vamos a utilizar
let arreglo2 = [...arreglo, 5];

//El  método map crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
//Lafunción que está ahí, es una función que se va a ejecutar a través de el método que está ahí, en este caso map.
//En este caso número es cada uno de los elementos de el array
const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});

const arreglo4 = arreglo.map(function(number) {
    return number * 8
})



console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);