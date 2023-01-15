import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import './ToDo.css'
import {deleteTodo, toggleTodo, editTodo} from '../JS/Actions/TodoAction'

const ToDo = ({el}) => {

  const [todoUpd, setTodoUpd]=useState(el)

  const dispatch = useDispatch()

  const removeTodo =()=>{
    dispatch(deleteTodo(el.id))
  }

  const handletoggle =()=>{
    dispatch(toggleTodo(el.id))
  }

  const handleedit =()=>{
    dispatch(editTodo(todoUpd))
  }


  return (
    <div className='todo'>
        <br />
        <h1 style={{textDecoration : el.isDone? "line-through" : "none",opacity: el.isDone? "0.2" : "1"}}>{el.description}</h1>
        <hr />
        <input type="text" value={todoUpd.description} onChange={(e)=>setTodoUpd({...todoUpd,description : e.target.value})}/>
        <button onClick={handleedit}>UPDATE</button>
        <hr />
        <input type="checkbox" onClick={handletoggle}/>
        <button onClick={removeTodo}>Delete</button>
        <br />
    </div>
  )
}

export default ToDo
