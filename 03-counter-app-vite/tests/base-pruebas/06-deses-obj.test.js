import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
  test('usContext debe devolver un objeto ', () => {
    
    const clave = 123;
    const edad = 34;

    let obj = usContext({clave, edad});

    console.log(obj);

    expect( obj ).toEqual( {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    });


  })
  
})

