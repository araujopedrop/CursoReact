import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en <FirstApp />', () => { 

    const title = 'Hola, soy Goku';
    const subtitle = 'Soy un subtitulo';

    test('Debe de hacer match con el snapshot', () => { 

        const { container } = render(<FirstApp title={ title }/>);
        expect(container).toMatchSnapshot();
     });

    test('Debe de mostrar el mensaje "Hola, Soy Goku"', () => { 
        render(<FirstApp title={ title }/>);
        // Podemos usar el objeto screen, en vez de tomar los metodos con la funcion render
        screen.debug();
        //expect( screen.getByText(title)).not.toBeTrusthy();
        expect( screen.getByText(title)).toBeTruthy();
    });

    test('Debe de mostrar el titulo en un h1', () => { 
        render(<FirstApp title={ title }/>);
        expect( screen.getByRole('heading', {level: 1}).innerHTML).toContain( title );  
    });

    // Subtitulo que pase por las props
    test('debe de mostrar el subtitulo enviado por props ', () => { 
        render( <FirstApp title={ title } subtitle={ subtitle }/>);  
        expect (screen.getAllByText(subtitle).length).toBe(2);
    })

}); 