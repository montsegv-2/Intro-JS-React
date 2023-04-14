
const personajes = ['Goku', 'Vegeta', 'Goku'];

const [ , , p3 ] = personajes

console.log( p3 );


const retornaArreglo = () => {
    return ['ABC',123];
}

const [letters, numbers] = retornaArreglo();

console.log(letters, numbers);

//HW
//1.- Nombre
//2.- setNombre

const usoState = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo')}];
}

const [nombre, setNombre] = usoState ( 'Goku ');
console.log(nombre);
setNombre();