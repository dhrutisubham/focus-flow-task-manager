import React from 'react'
import { Todo } from '../model'

type Props={
    todo: Todo, 
    todoList:Todo[],
    setTodoList:React.Dispatch<React.SetStateAction<Todo[]>>,
}

const SingleTodo = ({todo, todoList, setTodoList}: Props) => {
  return (
    <form action="" className="w-full flex gap-4 p-4 bg-white drop-shadow rounded-md">
      <span className="single__todo_text">{todo.todo}</span>
    </form>
  )
}

export default SingleTodo