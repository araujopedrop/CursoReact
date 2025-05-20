// ******************** Uso de Fragments para devolver mas de un objeto html ********************


//Esto no funciona
/*
export const FirstApp = () => {
  return (
    <h1>FirstApp</h1>
    <h1>FirstApp1</h1>
  )
}
*/

// Esto funciona usando un div 
/*
export const FirstApp = () => {
  return (
    <div>
      <h1>FirstApp</h1>
      <h1>FirstApp1</h1>
    </div>
  )
}
*/


// Esto funciona con Fragments con un import
/*
import { Fragment } from 'react'
export const FirstApp = () => {
  return (
    <Fragment>
      <h1>FirstApp</h1>
      <h1>FirstApp1</h1>
    </Fragment>
  )
}
*/

// Esto funciona con Fragments sin import
/*
export const FirstApp = () => {
  return (
    <>
      <h1>FirstApp</h1>
      <h1>FirstApp1</h1>
    </>
  )
}
*/



// ******************** Impresion de variables en el HTML ********************

/*

// si no se cambia el valor, ni tiene relacion con algun Hook, conviene sacar las variables fuera del functional component
// Una ventaja es que REACT no reprocesa todo lo que este fuera de FC

// String
const newMessage = 'Pedro';

// Number
const newMessage2 = 123;

// List
// Cada elemento de la lista va a ser un elemento html por separado
const newMessage3 = [0,1,2,3,4,5,6,7,8,9];

// Dict/Objeto
const newMessage4 = {
  message: 'Hola Mundo',
  title: 'Pedro'
};

// Functions
const func1 = () => {
  return 'Funcion1';
}


export const FirstApp = () => {

  // Functions
  const func2 = () => {
    return 'Funcion2';
  }

  return (
    <>
      <h1>FirstApp1</h1>
      <h1>{newMessage}</h1>
      <h1>{newMessage2}</h1>
      <h1>{newMessage3}</h1>
      <h1>{JSON.stringify(newMessage4)}</h1>
      <code>{JSON.stringify(newMessage4)}</code>
      <h1>{func1()}</h1>
      <h1>{func2()}</h1>
    </>
  )
}

*/




// ******************** Comunicacion entre componentes - Props ********************
// Comunicacion entre componente padre e hijo. En este caso, entre <React.StrictMode> y FirstApp.
// Props es info que fluye desde el padre al hijo
/*
export const FirstApp = ( {title = 'Hola, soy Goku', subtitle, subtitle2} ) => {

  return (
    <>
      <h1>{ title }</h1>
      <h1>{ subtitle }</h1>
      <h1>{ subtitle2 + 1}</h1>
    </>
  )
} 

*/


// ******************** PropTypes y DefaultProps ********************
// Se utilizan para definir el tipo a las properties

import propTypes from 'prop-types'

export const FirstApp = ( {title = 'Hola, soy Goku', subtitle, subtitle2} ) => {

  return (
    <>
      <h1 data-testid="test-title">{ title }</h1>
      <h2>{ subtitle }</h2>
      <h2>{ subtitle }</h2>
    </>
  )
}


// title: PropTypes.string            , pide que sea String, y NO es obligatorio enviar esa prop
// title: PropTypes.string.isRequired , pide que sea String, y es obligatorio enviar esa prop

FirstApp.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
}

FirstApp.defaultProps = {
  //name: 'Pedro Araujo',
  title: 'No hay titulo',
  subtitle: 'No hay subtitulo'
}
