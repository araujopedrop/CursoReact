import { useState ,useEffect } from "react";


import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    //useEffect( () => {getGifs()}, [] ); // Si dejo vacio el array de dependencias, el useEffect solo se disparara la primera vez que se crea y se construye el componente

    // No puedo pasar al useEffect un promesa, tiene que se una funcion
    // Manera 1:
    // useEffect( () => {getGifs(category).then( newImages => setImages(newImages))} );
    // Manera 2: Crearme una funcion y esa pasarla al useEffect

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }
    useEffect( () => {getImages()}, [] );

    /*
    return (
        <> 
            <h3>{ category }</h3>
    
            <div className="card-grid">
            { 
                images.map((image) => (
                    <GifItem key={image.id} title={image.title} url={image.url}/>
                ))
            }
            </div>
        </>
        )
    */

    // Usando operador spreed, para 'espacir' el image. 
    // Esto sirve para que cada una de las propiedades de image las reciba como properties en el componente GifItem
    return (
        <> 
            <h3>{ category }</h3>
    
            <div className="card-grid">
            { 
                images.map((image) => (
                    <GifItem key={image.id} {...image}/>
                ))
            }
            </div>
        </>
        )



}


