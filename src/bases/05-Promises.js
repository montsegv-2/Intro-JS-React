import { getHeroeById } from "./bases/04-imp-exp";

/*export const promesa = new Promise( (resolve , reject) => {
    setTimeout(() => {
        //resolve();
        //HW - import getHeroeById()
        const p1 = getHeroeById(2);
        resolve(p1);  
    }, 2000);  
});

//then: cuando la promesa se hizo corretamenste
//catch: cuando se dio un error o cuando se llamo al reject
promesa.then((heroe) => {  
    console.log('Heroe', heroe);
 })
    .catch( err => console.warn(err)); */

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            //HW - import getHeroeById()
            const p1 = getHeroeById(id);

            if( p1 ){
                resolve(p1);
            } else {
                reject('No se pudo encontrar el heroe');
            }
        }, 2000);  
    }); 
}

getHeroeByIdAsync()
    .then( console.log )
    .catch( console.warn )
 