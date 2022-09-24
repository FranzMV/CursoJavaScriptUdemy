import * as CRUD from './js/crud-provider';

CRUD.getUsuario( 2 ).then( console.log );

CRUD.crearUsuario({
    name: 'Fran',
    job: 'Carpintero'
}).then(console.log);


CRUD.actualizarUsuario(1, {
    name:'Melisa',
    job: 'Develover'
}).then(console.log);