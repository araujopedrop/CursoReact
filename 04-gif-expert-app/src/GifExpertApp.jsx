import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState([ 'One Punch Man']); 

    const onAddCategory = (newCategory) => {
        console.log(newCategory);


        // Para no agregar repetidos
        if ( categories.includes(newCategory)) return;

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
        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory={ event => onAddCategory(event)}/>

        <ol>
            { 
                categories.map((category) => (
                    <GifGrid key={category} category={category}/>
                ))
            }
        </ol>
        
    </>
    )
}