// Desestructuracion de objetos / Asignacion desestructurante

const persona = {
    nombre: 'Pedro',
    edad: 80,
    clave: 'Iron Man',
}

/* Manera larga */
//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(persona.clave);

// Extraigo y guardo el nombre
//const {nombre} = persona
//console.log(nombre);

// Extraigo y guardo el nombre en una variable llamada nombre2
const {nombre:nombre2} = persona
console.log(nombre2);

// Extraigo varios datos
const {nombre, edad, clave} = persona;
console.log(nombre);
console.log(edad);
console.log(clave);

// Manera normal
const retornaPersona = (usuario) => {
    console.log(usuario)
}

// Usando desestructuracion
const retornaPersona_ = (usuario) => {
    const {nombre, edad, clave} = usuario;
    console.log(nombre, edad, clave);
}

// Usando desestructuracion en el argumento
const retornaPersona__ = ({nombre, edad}) => {
    console.log(nombre, edad);
}

// Usando desestructuracion en el argumento, con valores por defecto
const retornaPersona___ = ({nombre, edad, rango = 'Capitan'}) => {
    console.log(nombre, edad, rango);
}

const useContext = ({nombre, edad, rango = 'Capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 123456,
            lng: 987645,
        }
    }
}



retornaPersona(persona);
retornaPersona_(persona);
retornaPersona__(persona);
retornaPersona___(persona);

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);