// FETCH API

const apiKey = 'LtMShG7CjAec1FLjTSHqMP8X0AeHT4EO';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/*
peticion.then( resp => {
    resp.json().then( data => {
        console.log(data)
    })
})
*/

// Promesa encadenada. La promesa que me da el primer 'then', la paso al segundo 'then'
// El catch(console.warn) atrapa a todas las promesas, pero se podria hacer un catch para cada uno de los then
peticion.then(resp => resp.json())
        .then(({data}) => {
            //console.log(data.images.original.url)
            const {url} = data.images.original;
            const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
        })
.catch (console.warn);