import { TodoItem } from '../../../models/todo-item.interface';
import { ToDoItem, ToDoItemControl, ToDoItemControls, ToDoItemTitle } from './ToDoListItem.styled';
import checkIcon from '../../../assets/images/check.png'
import uncheckIcon from '../../../assets/images/uncheck.png'
import trashIcon from '../../../assets/images/trash.png'

export const ToDoListItem = (props: {
	todoItem: TodoItem;
	updateTodo: Function;
	deleteTodo: Function;
}) => {
	return (
		<ToDoItem>
			<ToDoItemTitle>{props.todoItem.title}</ToDoItemTitle>
			<ToDoItemControls>
				<ToDoItemControl					
					icon={trashIcon}
					onClick={() => props.deleteTodo(props.todoItem)}
				></ToDoItemControl>
				<ToDoItemControl					
					icon={
						props.todoItem.completed ? checkIcon : uncheckIcon
					}
					onClick={() => props.updateTodo(props.todoItem)}
				></ToDoItemControl>
			</ToDoItemControls>
		</ToDoItem>
	);
};