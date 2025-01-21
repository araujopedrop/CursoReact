// Promesas
import {getHeroeById} from './bases/08-imp-exp'

const promesa = new Promise( (resolve, reject) => {

    setTimeout( () => {
        //console.log('2 segundos');
        const heroe = getHeroeById(2);
        resolve(heroe);
    }, 2000)

});


promesa.then( (heroe) => { console.log('Heroe:', heroe)})