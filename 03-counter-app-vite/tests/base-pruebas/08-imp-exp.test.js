import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe de retornar un heroe por ID', () => {
    const id = 1;

    const heroe = getHeroeById(id);

    expect(heroe).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
    });
  });

  test('getHeroeById debe de retornar undefined si no existe el ID', () => {
    const id = 100;

    const heroe = getHeroeById(id);

    expect(heroe).toBeFalsy();
  });

  test('getHeroesByOwner debe retornar 3 valores con DC', () => {

    const owner = 'DC';
    const LENGTH = 3;

    const heroes = getHeroesByOwner(owner);

    expect(LENGTH).toEqual(Object.keys(heroes).length)

  });
  
  test('getHeroesByOwner debe retornar 2 valores con MARVEL', () => {

    const owner = 'Marvel';
    const LENGTH = 2;

    const heroes = getHeroesByOwner(owner);

    expect(LENGTH).toEqual(Object.keys(heroes).length)

  });


})
