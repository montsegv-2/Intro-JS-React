
//Desestructuracion

const persona = {
    nombre: 'Tony',
    edad: 27,
    clave: 'Ironman'
};   

//console.log(nombre);
//console.log(persona.edad);
//console.log(persona.clave);

/*const retornapersona = (usuario) => {
    
    const { nombre, edad, clave } = usuario;

    console.log(nombre, edad, clave);
}

retornapersona(persona); */

//DESESTRUCTURACION

const usoContext = ({nombre, edad, clave, rango = "capitan"}) => {
    
    return {
        nombreClave: clave,
        anios: edad,
        latlong: {
            lat: 14.356,
            lng: -12.4859
        }
    }
}   

const {nombreClave, anios, latlong: { lat, lng }} = usoContext( persona );
console.log(nombreClave, anios);
console.log(lat, lng);