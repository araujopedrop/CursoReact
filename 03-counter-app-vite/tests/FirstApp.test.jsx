import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en <FirstApp />', () => { 
    test('Debe de hace match con el snapshot', () => { 

        const title = 'Hola, soy Goku';
        // Renderizar el componente en memoria
        render( <FirstApp title={ title } />);
    })
}); 