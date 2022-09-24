const jokeUrl = "https://api.chucknorris.io/jokes/random#"

const obtenerChiste = async ()=>{

    try{
        const resp = await fetch (jokeUrl)
        if(!resp.ok) return alert('No se pudo realizar la peticion');
        
        const {icon_url, id, value} = await resp.json();

        return {icon_url, id, value};

    }catch(err){
        return{
            id: 'No se encontro',
        }
    }
}

export{
    obtenerChiste
}