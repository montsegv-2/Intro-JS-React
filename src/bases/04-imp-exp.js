//import { heroes } from './data/heroes';
//import {heroes} from './data/heroes';
import heroes, { owners } from '../data/heroes';


const getHeroeById = (id) => {
    return heroes.find( (heroes) => heroes.id === id);
}

console.log(getHeroeById(2));

const getHeroeByOwner = ( owner ) => heroes.filter( (heroes) => heroes.owner === owner);

console.log(getHeroeByOwner('Marvel'));



