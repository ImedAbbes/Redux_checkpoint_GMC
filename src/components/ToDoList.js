import React from 'react'
import ToDo from './ToDo'
import './ToDoList.css'

const ToDoList = ({alltodos}) => {
  return (
    <div className='todolist'>
      <h1>ToDo List</h1>
      <hr />
      {
        alltodos.map((el,i) => <ToDo el = {el} key={i}/>)
      }
    </div>
  )
}

export default ToDoList
