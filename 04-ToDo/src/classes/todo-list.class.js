export class TodoList{

    /**
     * Constructor
     */
    constructor(){ this.cargarLocalStorage(); }

    /**
     * Crea una nueva Tarea
     * @param {*} todo Tarea a crear
     */
    nuevoTodo( todo ){ 
        this.todos.push(todo);
        this.guardarLocalStorage(); 
    }

    /**
     * Elimina una tarea
     * @param {*} id Id de la tarea a eliminar
     * @returns 
     */
    eliminarTodo( id ){ 
        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage(); 
    }

    /**
     * Marca como completada una tarea.
     * @param {*} id Id de la tarea a marcar como completada
     */
    marcarCompletado ( id ){
        for(const todo of this.todos){
            if(todo.id == id){
                this.guardarLocalStorage();
                todo.completado =!todo.completado;
                break;
            }
        }
    } 

    /**
     * Elimina todas las tareas que han sido completadas.
     */
    eliminarCompletado() { 
        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage(); 
    }


    guardarLocalStorage(){ localStorage.setItem('todo', JSON.stringify(this.todos)); }


    cargarLocalStorage(){
        this.todos = (localStorage.getItem('todo' )) 
            ? JSON.parse(localStorage.getItem('todo')) 
            :  this.todos = [];
    }
}