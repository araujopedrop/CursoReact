import { render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp'

describe('Pruebas en <CounterApp />', () => { 

    const valorInicial = 100;

    test('Debe de hacer match con el snapshot', () => { 

        const { container } = render(<CounterApp value={ valorInicial }/>);
        expect(container).toMatchSnapshot();

     });



    // valorInicial que pase por las props
    test('debe de mostrar el subtitulo enviado por props ', () => { 
        render( <CounterApp value={ valorInicial } />);  
        expect (screen.getByText(100)).toBeThuthy;
    })

}); 