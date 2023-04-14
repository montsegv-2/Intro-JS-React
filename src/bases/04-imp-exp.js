import heroes, { owners } from '../data/heroes';

export const getHeroeById = (id) => {
    return heroes.find( (heroes) => heroes.id === id);
}

export const getHeroeByOwner = ( owner ) => heroes.filter( (heroes) => heroes.owner === owner);


