const nombre = 'Pedro';
const apellido = 'Araujo';

// Concatenacion normal
//const nombreCompleto = nombre + ' ' + apellido;

// Concatenacion con template strings
const nombreCompleto = ` 
${nombre} 
${apellido}
${1 + 1}
`;

console.log(nombreCompleto);


function getSaludo(nombre)
{
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${getSaludo(nombre)} ` )