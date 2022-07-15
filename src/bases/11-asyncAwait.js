//Async y Await


// const getImagenPromesa = () => 
//     new Promise( resolve  => resolve('https://jskajskdjadkjjajajksjakjska.com'))
// getImagenPromesa().then(console.log);

//promesas con el async y con el await

const getImagen = async() => {

    try {
        const apiKey = 'pZCMXpGPlOrO8W4fB2kXPuMFg4fElSAc'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await resp.json();


        const {url} = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        
    } catch (error) {
        //manejo de el error
        console.error(error)
    }

}

getImagen().then()
  



// peticion
//     .then( resp => resp.json())
//     .then(({data}) => {
//         const { url } = data.images.original;

//         //poner la imagen en el html.

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append( img )


//     })
//     .catch( console.warn );
