// Objetos literales / diccionarios
const persona = {
    nombre: 'Pedro',
    apellido: 'Araujo',
    edad: 80,
    direccion: {
        ciudad: 'New York',
        zip: 123456,
        lat: 987654,
        lng: 45691,
    }
}

//console.log({persona:persona});
//console.table({persona});
console.log({persona});

// Copio por referencia
//const persona2 = persona

// Copio por valor, usando spreed
const persona2 = {...persona}
persona.nombre = 'Pablo';

console.log({persona});
console.log({persona2});