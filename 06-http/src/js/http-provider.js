const jokeUrl = "https://api.chucknorris.io/jokes/random#"
const urlUsuarios = 'https://reqres.in/api/users?page=2';


//Cloudinary
const cloudPreset ='dm0wog2v';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dioavcwig/upload';

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


const obtenerUsuarios = async() =>{

    const resp = await fetch ( urlUsuarios );
    const {data: usuarios} = await resp.json();

    return usuarios;
}

//ArchivoSubir = File
const subirImagen = async ( archivoSubir) =>{
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset );
    formData.append('file', archivoSubir);

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }
        
    } catch (error) {
        throw error;
    }
}


export{
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}