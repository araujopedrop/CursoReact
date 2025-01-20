// Desestructuracion de arreglos / Asignacion desestructurante de arreglos

const personajes = ['goku', 'vegeta', 'trunks'];

// Manera clasica
/*
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);
*/

// Desestructuracion
const [p1] = personajes
console.log(p1);

const [,p2] = personajes
console.log(p2);

const [ , , p3] = personajes
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', '123'];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const useState = (valor) => {
    return [valor, ()=> {console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState('Goku');
console.log(nombre)
setNombre()