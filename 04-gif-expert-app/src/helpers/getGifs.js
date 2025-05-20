export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=evMA9XB2l14Qn0Cjmzlo9wHnIdLoTSrn&q=${category}&limit=10`;
    const resp = await fetch( url );
    const { data = []  } = await resp.json();

    const gifs = data.map ( img => ({
            id: img.id,
            title: img.title,
            url: img.url
        })
    );

    console.log(gifs);
    return gifs;

}
 