
//funcion
function saludar (nombre) {
     return `Hola soy ${nombre}`;
}

//funcion asignada a una constante
const saludar2 = function ( nombre ){
    return `Hola que tal, mi nombre es: ${nombre}`;
}

//funcion flecha o arrow function
const saludar3 = ( nombre ) => {
    return `Hola, yo soy ${nombre} y esta es una funcion flecha`;
}

console.log(saludar('Montse'));
console.log(saludar3('Montserrat'));


const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'papi02'
    }
}

console.log(getUser()); 

//Activity

/*function getUsuarioActivo ( nombre ) {
    return {
        uid: 'ABC1543',
        username: nombre
    }
}; */

const getUsuarioActivo = ( nombre ) => ({
        uid: 'ABC1543',
        username: nombre
})

const usuarioActivo = getUsuarioActivo('Montse');
console.log(usuarioActivo);