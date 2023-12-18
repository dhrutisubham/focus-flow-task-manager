import React from 'react'
import './InputField.css'

interface Props{
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e:React.FormEvent)=>void
}

const InputField = ({todo, setTodo, handleAdd}:Props) => {
  return (
    <>
        <form className='inputForm' onSubmit={handleAdd}>
            <input type='input' 
            placeholder="What's on your to-do list?"
            value={todo}
            onChange={
                (e)=>setTodo(e.target.value)
            }
            className='inputField'></input>
            <button type='submit'
            className='dark_btn'
            >
                {/* <span className='submitIcon'></span> */}
                Add
            </button>
        </form>
    </>
  )
}

export default InputField