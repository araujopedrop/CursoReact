// Exportacion
//import { heroes } from './data/heroes'
// Exportacion por defecto
import heroes, {owners} from '../data/heroes'


export const getHeroeById = (id) => {
    return heroes.find(element => element.id === id);
}

export const getHeroeByOwner = (owner) => {
    return heroes.filter(element => element.owner === owner);
}
