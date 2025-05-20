import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp'

describe('Pruebas en <CounterApp />', () => { 

    const valorInicial = 10;

    test('Debe de hacer match con el snapshot', () => { 

        const { container } = render(<CounterApp value={ valorInicial }/>);
        expect(container).toMatchSnapshot();

     });



    // valorInicial que pase por las props 
    test('debe de mostrar el subtitulo enviado por props ', () => { 
        render( <CounterApp value={ valorInicial } />);  
        expect(screen.getByText('10')).toBeTruthy();
    });

    test('Debe de incrementar con el boton +1', () => { 
        render( <CounterApp value={ valorInicial } />);  
        // Disparar evento del elemento que tiene un texto de '+1'
        fireEvent.click( screen.getByText('+1'));
        // Espero que haya algun elemento con un valor de "valorInicial + 1"
        expect(screen.getByText('11')).toBeTruthy();
    });

    test('Debe de decrementar con el boton -1', () => { 
        render( <CounterApp value={ valorInicial } />);  
        // Disparar evento del elemento que tiene un texto de '+1'
        fireEvent.click( screen.getByText('-1'));
        // Ver estado del DOM
        screen.debug();
        // Espero que haya algun elemento con un valor de "valorInicial + 1"
        expect(screen.getByText('9')).toBeTruthy(); 
    });

    test('Debe de funcionar el botn de reset', () => { 
        render( <CounterApp value={ valorInicial } />);  
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));

        // Ver estado del DOM
        screen.debug();

        // Disparar evento del elemento que tiene un texto de 'Reset'
        // fireEvent.click( screen.getByText('Reset'));

        // Disparar evento del elemento que tiene un atributo llamado aria-label
        fireEvent.click( screen.getByRole('button', {name: 'btn-reset'}));

        //expect(screen.getByText(valorInicial)).toBeTruthy();
     })

}); 