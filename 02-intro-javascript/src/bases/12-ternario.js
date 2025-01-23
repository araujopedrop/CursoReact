const activo = true;


//let mensaje = '';

// Manera clasica de un if
/*
if (activo) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
}
*/

// Operador ternario
// const mensaje = (activo) ? 'Activo' : 'Inactivo';
// const mensaje = (activo) ? 'Activo' : null;  // Aqui SI se evalua la parte del 'else' y devuelve un null
const mensaje = activo && 'Activo'


console.log(mensaje);