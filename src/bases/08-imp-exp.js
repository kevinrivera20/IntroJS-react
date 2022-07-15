// import { heroes } from './data/heroes';
// import {heroes} from './data/heroes'

//La exportación por defecto es heroes y las exportaciones individuales son las que están dentro de corchetes en este caso owners. 
import heroes from '../data/heroes'


// const getHeroeById = (id) => {
//     return heroes.find( ( heroe ) => {
//         if (heroe.id === id) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }


export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id )

// console.log(getHeroeById(2))

//Forma de coger de a un elemento con el filter.

export const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log(getHeroesByOwner('Marvel'))

// console.log(owners)

