import React, { useState } from 'react'

export const GifExpertApp = () => {


    const [categories, setCategories] = useState([ 'One Punch Man', 'Dragon Ball' ]); 
    console.log(categories);

    return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        {/* Listado de Gifs */}
        <ol>
            { categories.map(category => {
                return <li key={category}> {category} </li>
            }) }
            <li>ABC</li>
        </ol>
            {/* Gif Item */}

    </>
    )
}