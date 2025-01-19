// Variables y Constantes


const nombre = 'Pedro';
const apellido = 'Araujo';

let valorDado = 5;
valorDado = 4;

console.log( nombre, apellido, valorDado);

if (true)
{
    // este valorDado y nombre son variables de scope
    let valorDado = 5;
    const nombre = 'Pedro';
    valorDado = 6;
    console.log( valorDado, nombre);
}

console.log( valorDado);