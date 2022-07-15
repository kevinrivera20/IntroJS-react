//Promesas en js, las promesas en js funcionan igual que en la vida real, uno promete algo y lo cumple, así mismo funciona.

//Resolve, se ejecuta cuando la promesa es exitosa, es decir termina todo correctamente
//Reject, se ejecuta cuando la promesa falla, es decir cuando no se termina correctamente.
//setTimeout es una función propia de JS que permite ejecutar una tarea en cierto tiempo y recibe un callback
import { getHeroeById } from "./bases/08-imp-exp";

//  const promesa = new Promise( (resolve, reject) => {
//      setTimeout( () => {
//Tarea
//          const heroe = getHeroeById(2);
//          reject( "No se pudo encontrar el heroe" );
//      }, 2000 )
//  });

//Then significa que la promesa se cumplió correctamente
//Catch quiere decir que salió mal o que por alguna razón nosotros mismo llamamos el reject
//Finally es algo que se va a ejectutar después de el catch o el then, es decir es lo último que se ejecuta dependiendo de lo que hagamos.

//Forma de manejar un error con el then y catch
// promesa.then( (heroe) =>  {
//     console.log("Heroe", heroe)
// })
// .catch(err => console.error( err ))

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Tarea
      const p1 = getHeroeById(id);
      if ( p1) {
            resolve(p1);
      } else {
        reject("no se pudo encontrar el heroe.")
      }
      resolve( p1 );
    //   reject("No se pudo encontrar el heroe");
    }, 2000);
  });
};

getHeroeByIdAsync(9)
    .then( console.log )
    .catch( console.warn)
