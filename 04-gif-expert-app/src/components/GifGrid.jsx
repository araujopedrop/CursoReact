
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    console.log({ isLoading });

    // Usando operador spreed, para 'espacir' el image. 
    // Esto sirve para que cada una de las propiedades de image las reciba como properties en el componente GifItem
    return (
        <> 
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2>)
            }
     
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