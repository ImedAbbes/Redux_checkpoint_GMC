import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../JS/Actions/TodoAction'

const AddTodo = () => {

  const dispatch = useDispatch()

  const [input,setInput] = useState({
    description : ''
  })

  const AddNewTodo = () => {
    dispatch(addTodo(input))
  }

  return (
    <div>
        <input type="text" placeholder='New task' onChange={(e)=>setInput({description: e.target.value})} />
        <button onClick={AddNewTodo}>Add Task to list</button>
      
    </div>
  )
}

export default AddTodo
