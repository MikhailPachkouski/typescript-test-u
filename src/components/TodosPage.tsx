import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ITodo } from '../types/types'
import List from './List'
import TodoItem from './TodoItem'
import { useNavigate } from 'react-router-dom';

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchTodos()
  }, [])
  

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=50')
      setTodos(response.data)
      console.log(response);
      
      
    } catch (error) {
      alert(error)
    }
  }
	return (
		<List items={todos} renderItem={(todo: ITodo) => <TodoItem onClick={(todo) => navigate('/todos/' + todo.id) } todo={todo} key={todo.id}/>}/>
	)
}

export default TodosPage