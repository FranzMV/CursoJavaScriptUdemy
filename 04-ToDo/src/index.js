
import { Todo } from './classes/todo.class';
import { TodoList } from './classes/todo-list.class';
import { creatTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript');
todoList.nuevoTodo(tarea);

creatTodoHtml( tarea );
