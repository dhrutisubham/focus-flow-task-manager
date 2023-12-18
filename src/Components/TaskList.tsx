import React from 'react'
import { Todo } from '../model';
import SingleTodo from './SingleTodo/SingleTodo';

interface Props{
    todoList: Todo[];
    setTodoList:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TaskList = ({todoList, setTodoList}:Props) => {
  const completedTodos = todoList.filter((todo) => todo.isDone);
  const activeTodos = todoList.filter((todo) => !todo.isDone);
  return (
    
    // Active Tasks 
    <section className='mt-10 flex items-stretch justify-center gap-4 h-fit flex-wrap w-full grow overflow-clip'>
      <section className="tasks_section">
        <h2 className='flex items-end gap-2 font-bold text-lg w-full sticky' >Tasks   <span className="p-1 px-2 bg-slate-300 rounded-lg text-base">{activeTodos.length}</span></h2>
        <ul className='task_lists'>
        {
            activeTodos.map(todo=>(
                <SingleTodo todo={todo} key={todo.id} todoList={todoList} setTodoList={setTodoList}/>
            ))
        }
        </ul>
        
      </section>


    {/* Completed Tasks  */}
    
      
        <section className="tasks_section">
          <h2 className=' flex items-end gap-2 font-bold text-lg w-full sticky' >Completed  <span className="p-1 px-2 bg-green2 text-white rounded-lg text-base">{completedTodos.length}</span></h2>
          <ul className='task_lists'>
          {
              completedTodos.map(todo=>(
                  <SingleTodo todo={todo} key={todo.id} todoList={todoList} setTodoList={setTodoList}/>
              ))
          }
      </ul>
        </section>
    
    </section>
  )
}

export default TaskList