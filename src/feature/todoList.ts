import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoItem } from '../models/todo-item.interface'
import { v4 as uuid} from 'uuid'

export interface TodoState {
  todos: TodoItem[]
}

const initialState: TodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {      
      const newTodo: TodoItem = {
			id: uuid(),
			title: action.payload,
			completed: false,
		};
		state.todos = [...state.todos, newTodo];
    },
    updateAction: (state, action: PayloadAction<TodoItem>) => {
     const newTodos = state.todos.map((todo) => {
			if (todo.id === action.payload.id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		state.todos = newTodos;
    },
    deleteAction: (state, action: PayloadAction<TodoItem>) => {
      const newTodos = state.todos.filter(
			(todo) => todo.id !== action.payload.id
		);
		state.todos = newTodos;
    },
  },
})

// Action creators are generated for each case reducer function
export const { createAction, updateAction, deleteAction} = todoSlice.actions

export default todoSlice.reducer