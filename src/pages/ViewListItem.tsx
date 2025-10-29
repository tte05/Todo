import { useEffect, useState } from 'react'
import { TodoItem } from '../models/todo-item.interface'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RootState } from '../store';



export const ViewListItem = () => {

  	const todoList = useSelector(
		(state: RootState) => state.todoList.todos
	);

  const {id} = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<TodoItem>()

  useEffect(() => {
    const searchTodo = todoList.find((todo) => String(todo.id) === id)
    if(searchTodo) {
      setTodo(searchTodo)
    } else {
      navigate('/NotFound')
    }
  }, [todoList, id, navigate])
  return (
    <div className='container'>
      <h1>{todo?.title} </h1>
      <Link to='/list'>Back to List</Link>
    </div>
  )
}