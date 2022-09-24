const jokeUrl = "https://api.chucknorris.io/jokes/random#"

// fetch(jokeUrl).then(resp =>{
//     resp.json().then(data =>{
//         console.log('ID: ',data.id);
//         console.log('Chiste: ',data.value);
//     });
// });

fetch(jokeUrl )
    .then( resp => resp.json())
    .then(({id, value}) => {
        console.log(id, value);
    });