
import { Todo } from './classes/todo.class';
import { TodoList } from './classes/todo-list.class';
import { creatTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

todoList.todos.forEach(todo => creatTodoHtml(todo) );

todoList.todos[0].imprimirClase();