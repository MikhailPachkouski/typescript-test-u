import React from 'react'
import { ITodo } from '../types/types'

interface TodoItemProps {
	todo: ITodo
	onClick: (todo: ITodo) => void
}

const TodoItem: React.FC<TodoItemProps> = ({todo, onClick}) => {
	return (
		<div style={{display: 'flex'}}>
			<input type={'checkbox'} checked={todo.completed}/>
			<div onClick={() => onClick(todo)}>{todo.id}. {todo.title}</div>
		</div>
	)
}

export default TodoItem