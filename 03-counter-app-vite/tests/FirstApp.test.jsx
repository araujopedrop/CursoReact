import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en <FirstApp />', () => { 

    /*
    test('Debe de hace match con el snapshot', () => { 

        const title = 'Hola, soy Goku';
        // Renderizar el componente en memoria 
        // Actualiza el objeto Screen (Propio de react testing library)
        const { container } = render( <FirstApp title={ title } />);

        console.log(container);
        expect( container ).toMatchSnapshot();
    });
    */
    test('Debe de mostrar el titulo en un h1', () => { 

        const title = 'Hola, soy Goku';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } />);   

        // Espero que en el component renderizado es el texto que busco
        expect (getByText(title)).toBeTruthy();

        //const h1 = container.querySelector('h1');
        //console.log(h1.innerHTML);

        //expect(h1.innerHTML).toBe(title);

        // Que no sea estrictamente, sino que lo contenga
        //expect(h1.innerHTML).toContain(title);

        // Busco si hay un elemento con el data attribute 'test-title'
        expect (getByTestId('test-title')).toBeTruthy();

        // Busco si hay un elemento con el data attribute 'test-title'
        expect (getByTestId('test-title').innerHTML).toBe(title);

    });

    test('Debe de mostrar el subtitulo enviado por props', () => { 

        const title = 'Hola, soy Goku';
        const subtitle = 'Este es un subtitulo';

        // El getByText se asegura que solo haya un solo elemento con ese valor.
        // Devuelve error si hay mas de uno
        // const { getByText } = render( <FirstApp title={ title } subtitle={ subtitle }/>);   

        // Uso getAllByTexten caso de que estemos esperando mas de un elemento
        // Esto devolvera un arreglo de elementos HTML

        // expect (getByText(subtitle)).toBeTruthy();

        const { getAllByText } = render( <FirstApp title={ title } subtitle={ subtitle }/>);  
        expect (getAllByText(subtitle).length).toBe(2);
    })
}); 