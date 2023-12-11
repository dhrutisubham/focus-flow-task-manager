import React from 'react'
import { Todo } from '../model';

interface Props{
    todoList: Todo[];
    setTodoList:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TaskList = ({todoList, setTodoList}:Props) => {
  return (
    <ul>
        {
            todoList.map(todo=>(
                <li>{todo.todo}</li>
            ))
        }
    </ul>
  )
}

export default TaskList