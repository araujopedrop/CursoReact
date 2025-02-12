import PropTypes from 'prop-types'

export const CounterApp = ( {value} ) => {

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{ value }</h2>
    </>
  )
}


// title: PropTypes.string            , pide que sea String, y NO es obligatorio enviar esa prop
// title: PropTypes.string.isRequired , pide que sea String, y es obligatorio enviar esa prop

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
