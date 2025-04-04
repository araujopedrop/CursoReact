import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {


    const [categories, setCategories] = useState([ 'One Punch Man', 'Dragon Ball' ]); 

    const onAddCategory = (newCategory) => {
        console.log(newCategory);
        // No uso el push porque mutar objetos, no se quiere mutar el estado, se quiere crear un nuevo estado
        
        // Manera 1: Hago una copia de categories y agrego el nuevo elemento usando spreed
        // setCategories([...categories, 'Valorant']);

        // Manera 2: 
        // setCategories( cat => [...cat, 'Valorant']);

        // Insertando al inicio
        //setCategories([ 'Valorant', ...categories]);

        
        setCategories([ newCategory, ...categories]);

    }

    console.log(categories);

    return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        {/* AddCategory  - propertie que se llama setCategories - referecencia a la funcion 'setCategories', que viene del hook*/}
        {/* <AddCategory setCategories={ setCategories }/> */}


        <AddCategory onNewCategory={ event => onAddCategory(event)}/> 
        {/*<AddCategory onNewCategory={onAddCategory}/>*/}





        {/* Listado de Gifs */} 

        {/* <button aria-label="btn-AddCategory" onClick={onAddCategory}>Agregar</button> */}

        <ol>
            { categories.map(category => {
                return <li key={category}> {category} </li>
            }) }
        </ol>
        
        {/* Gif Item */}

    </>
    )
}