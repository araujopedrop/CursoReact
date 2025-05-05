import { useState } from "react";

export const AddCategory = ( {onNewCategory} ) => {


  const [inputValue, setInputValue] = useState('')

  // onChange={ onInputChange } es lo mismo que event => onInputChange(event)
  const onInputChange = ({target}) => {
      setInputValue( target.value) 
  }

  const onSubmit = (event) => {
      // Para ver los logs - evitar refresh del navegador
      event.preventDefault();

      // Validaciones: que no sea vacio
      if (inputValue.trim().length <= 1) return;

      // Aniado un nuevo valor a categories
      //setCategories(categories => [inputValue, ...categories]);

      // Emito el valor a agregar al onNewCategory (onAddCategory) perteneciente al padre (GifExpertApp)
      onNewCategory( inputValue.trim() );

      // Limpiamos el input value (la caja de texto donde ingresamos los datos)
      setInputValue('');
  }


  return (

    <form onSubmit={ (event) => onSubmit(event) }>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>

  )
}
