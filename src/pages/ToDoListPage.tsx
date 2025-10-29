import { Form } from '../components/Form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { TodoItem } from '../models/todo-item.interface';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import {
	createAction,
	deleteAction,
	updateAction,
} from '../feature/todoList';

export const ToDoListPage = () => {
	const todoList = useSelector(
		(state: RootState) => state.todoList.todos
	);
	const dispatch = useDispatch();

	const createNewToDo = (text: string) => {
		dispatch(createAction(text));
	};

	const updateTodo = (todoItem: TodoItem) => {
		dispatch(updateAction(todoItem));
	};
	const deleteTodo = (todoItem: TodoItem) => {
		dispatch(deleteAction(todoItem));
	};

	return (
		<>
			<Form createNewToDo={createNewToDo} />
			<ToDoList
				todoList={todoList}
				updateTodo={updateTodo}
				deleteTodo={deleteTodo}
			/>
		</>
	);
};