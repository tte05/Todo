import { ToDoListItem } from './ToDoListItem/ToDoListItem';

import { TodoItem } from '../../models/todo-item.interface';
import {
	ToDoIListBlock,
	ToDoIListContainer,
} from './ToDoList.styled';

export const ToDoList = (props: {
	todoList: TodoItem[];
	updateTodo: Function;
	deleteTodo: Function;
}) => {
	const checkedItem = () => {
		return props.todoList
			.filter((item) => item.completed)
			.map((item) => {
				return (
					<ToDoListItem
						todoItem={item}
						key={item.id}
						updateTodo={props.updateTodo}
						deleteTodo={props.deleteTodo}
					/>
				);
			});
	};
	const unCheckedItem = () => {
		return props.todoList
			.filter((item) => !item.completed)
			.map((item) => {
				return (
					<ToDoListItem
						todoItem={item}
						key={item.id}
						updateTodo={props.updateTodo}
						deleteTodo={props.deleteTodo}
					/>
				);
			});
	};

	return (
		<ToDoIListContainer>
			<ToDoIListBlock $status='failed'>
				{unCheckedItem()}
			</ToDoIListBlock>
			<ToDoIListBlock $status='completed'>
				{checkedItem()}
			</ToDoIListBlock>
		</ToDoIListContainer>
	);
};