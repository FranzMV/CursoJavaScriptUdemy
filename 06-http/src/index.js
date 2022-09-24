import * as CRUD from './js/crud-provider';



CRUD.getUsuario( 2 ).then( console.log );

CRUD.crearUsuario({
    name: 'Fran',
    job: 'Carpintero'
}).then(console.log);