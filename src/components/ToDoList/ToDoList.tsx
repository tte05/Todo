import { TodoListItem } from "./ToDoListItem/ToDoListItem";
import './ToDoList.scss';

export const ToDoList = () =>{
    return (
        <div className="todo-container">
        <ul className="todo-list failed">
            <TodoListItem/>
        </ul>
        <ul className="todo-list completed">
            <TodoListItem/>
        </ul>
    </div>
    )
}