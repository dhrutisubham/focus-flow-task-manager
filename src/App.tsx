import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField/InputField';
import { Todo } from './model';
import TaskList from './Components/TaskList';

const App:React.FC=()=> {

  const [todo, setTodo]= useState<string>("");

  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleAdd =(e:React.FormEvent)=>{
    e.preventDefault();

    if(todo){
      setTodoList([...todoList, {id: Date.now(), todo, isDone:false }]);
      setTodo("");
    }
  };

  console.log(todo);

  return (
    <div className="App">
      <img 
        src='assets/title.svg'
        alt='Title Logo Image'
        className='w-50 p-4 self-center m-auto mb-8'
      />
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TaskList todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
