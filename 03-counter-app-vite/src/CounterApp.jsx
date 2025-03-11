import { useState } from 'react'
import PropTypes from 'prop-types'

// 1 Manera
/*
export const CounterApp = ( {value} ) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ value }</h2>

      <button onClick={function(event) {console.log(event) }}>
        +1
      </button>
    </>
  )
}
*/


// 2 Manera, limpiado el return
/*
export const CounterApp = ( {value} ) => {

  function handleAdd(event) {console.log(event) }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ value }</h2>

      <button onClick={ (event) => handleAdd(event)}>
        +1
      </button>
    </>
  )
}
*/

// 3 Manera. Cuando tenemos una funcion que recibe un evento, y ese evento se pasa a otra funcion
//  podemos solo enviar la referencia de la segunda funcion
/*
export const CounterApp = ( {value} ) => {

  function handleAdd(event) {console.log(event) }
  function handleAdd2(event, newValue) {console.log(newValue) }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ value }</h2>

      <button onClick={ handleAdd }>
        +1
      </button>

      <button onClick={ (event) => handleAdd2(event, 'Hola') }>
        +1
      </button>

    </>
  )
}
*/

// 4 Manera. Usando funcion flecha
/*
export const CounterApp = ( {value} ) => {

  function handleAdd(event) {console.log(event) }
  const handleAdd2 = (event, newValue) => {console.log(newValue) }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ value }</h2>

      <button onClick={ handleAdd }>
        +1
      </button>

      <button onClick={ (event) => handleAdd2(event, 'Hola') }>
        +1
      </button>

    </>
  )
}
*/


// 5 Manera. Toda funcion que no tenga interaccion con los props se recomienda que se encuentre fuera del componente
// Cuando el CounterApp se volviera a renderizar, no se reasignara espacio en memoria para handleAdd
/*

function handleAdd(event) {console.log(event) }

export const CounterApp = ( {value} ) => {

  const handleAdd2 = (event, newValue) => {console.log(newValue) }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ value }</h2>

      <button onClick={ handleAdd }>
        +1
      </button>

      <button onClick={ (event) => handleAdd2(event, 'Hola') }>
        +1
      </button>

    </>
  )
}
*/


// Uso de Hooks
/*
export const CounterApp = ( {value} ) => {

  //const [ counter, setCounter ] = useState( 0 );
  const [ counter, setCounter ] = useState( value );
  
  // Cuando se llama a setCounter, se le dice a React que el estado cambio
  // Se debe volver a ejecutar la renderizacion del componente

  const handleAdd = () => {
    //setCounter( counter + 1 )
    //setCounter( 1000 )  
    setCounter ( (c) => c + 1 ) // c recibe el valor de 'counter'
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>

      <button onClick={ handleAdd }>
        +1
      </button>


    </>
  )
}

*/


// Ejercicio
export const CounterApp = ( {value} ) => {

  const [ counter, setCounter ] = useState( value );
  

  const handleAdd = () => {
    setCounter ( (c) => c + 1 )
  }

  const handleSub = () => {
    setCounter ( (c) => c - 1 )
  }

  const reset = () => {
    setCounter ( value )
  }


  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>

      <button onClick={ handleAdd }> +1 </button>
      <button onClick={ handleSub }> -1 </button>
      <button aria-label="btn-reset" onClick={ reset }> Reset </button>

    </>
  )
}






// title: PropTypes.string            , pide que sea String, y NO es obligatorio enviar esa prop
// title: PropTypes.string.isRequired , pide que sea String, y es obligatorio enviar esa prop

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}


// Eventos
// https://es.react.dev/reference/react-dom/components/common#react-event-object