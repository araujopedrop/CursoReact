import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        //expect( testUser ).toBe( user ); Falla. No se usa el expect-toBe con objetos
        expect( testUser ).toEqual( user ); 
      
    });

    test('getUsuarioActivo debe de retornar un objeto ', () => {
        const name = 'Pedro';
        
        const userName = getUsuarioActivo( name );

        expect( userName ).toEqual( {
            uid: 'ABC567',
            username: name
        } ); 
    })
    

})
