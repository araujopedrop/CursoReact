import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({ category }) => {

    useEffect( () => {getGifs()}, [] ); 

    return (
    <>
        <h3>{ category }</h3>

        <ol>
            <li>titulo</li>
            <li>titulo</li>
            <li>titulo</li>
            <li>titulo</li>
        </ol>
    </>
    )
}
