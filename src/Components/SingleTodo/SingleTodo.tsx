import React, { useEffect, useRef, useState, MouseEvent } from 'react'
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

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone=(id:number)=>{
    setTodoList(
      todoList.map((todo)=>
      todo.id===id?{
        ...todo, isDone:!todo.isDone
    }:todo)
    );
  };

  const handleDelete=(id:number)=>{
    setTodoList(
      todoList.filter((todo)=> todo.id!==id)
    );
  };


  const handleEdit=(e:React.FormEvent, id:number)=>{
    e.preventDefault();
    setTodoList(todoList.map((todo)=>(
      todo.id===id?{...todo, todo:editTodo}:todo
    )));
    setEdit(false);
  };

  useEffect(() => {
    if (edit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [edit]);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (edit && inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setEdit(false);
        setTodoList(todoList.map((t) => (t.id === todo.id ? { ...t, todo: editTodo} : t)));
      }
    };
  
    if (edit) {
      document.addEventListener('mousedown', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [edit, inputRef, editTodo, setEdit, setTodoList, todo, todoList]);

  return (
    <form action="" onSubmit={(e)=>handleEdit(e, todo.id)} className={`w-full transition-all ease-in flex items-center justify-between  gap-4 p-4 px-6 ${edit?"bg-slate-100 scale-x-[1.015]":"bg-white"} drop-shadow rounded-md `}>
      <input type='text' readOnly={todo.isDone || (!edit)} value={edit ? editTodo : todo.todo} onChange={(e) => setEditTodo(e.target.value)} className={`single__todo_text ${todo.isDone ? 'done' : ''}${edit ? 'focus:border-b-2' : ''}`} ref={inputRef} spellCheck={false}></input>

      <section className='flex gap-1'>
        <IconContext.Provider value={{ color: '#2B3752', size: '1.5em', className: 'react-icons' }}>
          <span className='icon' title="Delete Task" onClick={()=>handleDelete(todo.id)}><MdOutlineDelete /></span>
        </IconContext.Provider>

      
      {!todo.isDone?(
        <IconContext.Provider value={{ color: '#2B3752', size: '1.5em', className: 'react-icons' }}>
          <span className='icon' title="Edit Task" onClick={()=>{
            if(!todo.isDone){
              setEdit(!edit);
            }
            }
          }><MdOutlineModeEdit /></span>
        </IconContext.Provider>): null}
        

        <IconContext.Provider value={{ color: '#2B3752', size: '1.5em', className: 'react-icons' }}>
          <span className='icon' title="Mark as Done" onClick={() => handleDone(todo.id)}><MdOutlineDownloadDone /></span>
        </IconContext.Provider>
      </section>


    </form>
  )
}

export default SingleTodo