import React from 'react';
import { TodoItem } from '../models/todo-item.interface';
import { ListItem } from '../components/ListItem/ListItem';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const ViewList = () => {
	
	const todoList = useSelector(
		(state: RootState) => state.todoList.todos
	);

	return (
		<div className='container'>
			{todoList.map((todo: TodoItem) => {
				return <ListItem todo={todo} key={todo.id} />;
			})}
		</div>
	);
};