const getImagen = async() => {
    try{

        const apiKey = 'LtMShG7CjAec1FLjTSHqMP8X0AeHT4EO';
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await peticion.json();
    
        console.log(data);
    
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error){
        // Manejo de error
        console.error(error);
    }


}

getImagen();