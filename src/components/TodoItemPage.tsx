import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ITodo } from '../types/types'

interface TodoItemPageParams {
	id: string
}

const TodoItemPage: React.FC = () => {
	const [todo, setTodo] = useState<ITodo | null>(null)
  const navigate = useNavigate()

	const params = useParams()

  useEffect(() => {
    fetchTodo()
		console.log(todo?.completed);
		
  }, [])
  

  async function fetchTodo() {
    try {
      const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id)
      setTodo(response.data)
      
      
    } catch (error) {
      alert(error)
    }
  }
	return (
		<div>
			<button onClick={() => navigate('/todos')}>back</button>
			<h1>{todo?.id}</h1>
			<div>
				<h2>{todo?.title}</h2>
				<h3 style={{marginLeft: 50, fontWeight: 'bold', fontSize: 36, color: todo?.completed ? 'green' : 'red'}}>{String(todo?.completed)}</h3>
				{/* <h4>{String(todo?.completed)}</h4> */}
			</div>
		</div>
	)
}

export default TodoItemPage