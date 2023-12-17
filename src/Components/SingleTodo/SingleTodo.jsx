import React from 'react'
import { Todo } from '../../model'
import {MdOutlineDownloadDone, MdOutlineDelete, MdOutlineModeEdit} from 'react-icons/md'
import { IconContext } from 'react-icons'

import './SingleTodo.css'

type Props={
    todo: Todo, 
    todoList:Todo[],
    setTodoList:React.Dispatch<React.SetStateAction<Todo[]>>,
}

const SingleTodo = ({todo, todoList, setTodoList}: Props) => {

  const handleDone=(id:number)=>{
    setTodoList(
      todoList.map((todo)=>
      todo.id===id?{
        ...todo, isDone:!todo.isDone
    }:todo)
    );
  };

  return (
    <form action="" className={`w-full flex items-center justify-between  gap-4 p-4 px-6 bg-white drop-shadow rounded-md `}>
      <span className={`single__todo_text ${todo.isDone ? 'done' : ''}`}>{todo.todo}</span>

      <section className='flex gap-2'>
        <IconContext.Provider value={{ color: '#2B3752', size: '1.5em', className: 'react-icons' }}>
          <span className='icon' title="Delete Task"><MdOutlineDelete /></span>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: '#2B3752', size: '1.5em', className: 'react-icons' }}>
          <span className='icon' title="Edit Task"><MdOutlineModeEdit /></span>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: '#2B3752', size: '1.5em', className: 'react-icons' }}>
          <span className='icon' title="Mark as Done" onClick={() => handleDone(todo.id)}><MdOutlineDownloadDone /></span>
        </IconContext.Provider>
      </section>


    </form>
  )
}

export default SingleTodo