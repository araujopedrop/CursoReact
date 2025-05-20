// Funciones en JS

// Evitar la creacion de funciones de esta manera
/*
function saludar(nombre){
    return `Hola, ${nombre}`;
}

Puede pasar esto
saludar = 30;
*/

const saludar = function saludar(nombre){
    return `Hola, ${nombre}`;
}


// Funcion flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

// Funcion flecha si solo tiene un return
const saludar3 = (nombre) => `Hola, ${nombre}`;

// Funcion flecha si solo tiene un return y no tiene argumentos de entrada
const saludar4 = () => `Hola Mundo`;

// Funcion flecha si solo tiene un return, pero el return son varias cosas
const getUser = () => ({
    uid: '123',
    username: 'pepe',
});

// Funcion flecha si solo tiene un return, con args de entrada, pero el return son varias cosas
const getUserActivo = (nombre) => ({
    uid: '123',
    username: nombre,
});




console.log(saludar('Pedro'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Juan'));
console.log(saludar4());
console.log(getUser);
console.log(getUserActivo('Pablo'));