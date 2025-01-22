// Promesas
import {getHeroeById} from './bases/08-imp-exp'

// ****************** Promesa ******************

/*
const promesa = new Promise( (resolve, reject) => {

    setTimeout( () => {
        //console.log('2 segundos');
        const heroe = getHeroeById(2);
        resolve(heroe);
        reject('No se pudo encontrar el heroe');
    }, 2000)

});


promesa.then( (heroe) => { console.log('Heroe:', heroe)})
.catch(err => console.warn(err))
*/


// ****************** Promesa con argumento ******************

const getHeroeByIdAsync = (id) => {

    const promesa = new Promise( (resolve, reject) => {

        setTimeout( () => {
            //console.log('2 segundos');
            const heroe = getHeroeById(id);
            if (heroe)
            {resolve(heroe);}
            else
            {reject('No se pudo encontrar el heroe');}
            
        }, 2000)
    
    });

    return promesa;

}

/*
getHeroeByIdAsync(9)
    .then(heroe => console.log('Heroe', heroe))
    .catch(err => console.warn(err));
*/

// Pasando las funciones por referencia
getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);