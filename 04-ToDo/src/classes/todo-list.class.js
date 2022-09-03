export class TodoList{

    /**
     * Constructor
     */
    constructor(){ this.todos = []; }

    /**
     * Crea una nueva Tarea
     * @param {*} todo Tarea a crear
     */
    nuevoTodo( todo ){ this.todos.push(todo); }

    /**
     * Elimina una tarea
     * @param {*} id Id de la tarea a eliminar
     * @returns 
     */
    eliminarTodo( id ){ return this.todos.filter( todo => todo.id != id); }

    /**
     * Marca como completada una tarea.
     * @param {*} id Id de la tarea a marcar como completada
     */
    marcarCompletado ( id ){
        for(const todo of this.todos){
            if(todo.id == id){
                todo.completado =!todo.completado;
                break;
            }
        }
    } 

    /**
     * Elimina todas las tareas que ha sido completadas.
     */
    eliminarCompletado() {
        this.todos = this.todos.filter( todo => !todo.completado);
    }
}