import React from 'react'
import { Todo } from '../model';
import SingleTodo from './SingleTodo/SingleTodo';

interface Props{
    todoList: Todo[];
    setTodoList:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TaskList = ({todoList, setTodoList}:Props) => {
  return (
    <section className='mt-10 flex flex-col gap-4'>
      <section className="flex justify-between items-center  text-blue font-bold p-1 text-lg">
        <h2 className='flex items-end gap-2' >Tasks   <span className="p-1 px-2 bg-slate-300 rounded-lg text-base">{todoList.length}</span></h2>
        <h2 className=' flex items-end gap-2' >Completed  <span className="p-1 px-2 bg-green2 text-white rounded-lg text-base">{todoList.length}</span></h2>
      </section>
    <ul className='flex flex-col gap-2'>
        {
            todoList.map(todo=>(
                <SingleTodo todo={todo} key={todo.id} todoList={todoList} setTodoList={setTodoList}/>
            ))
        }
    </ul>
    </section>
  )
}

export default TaskList