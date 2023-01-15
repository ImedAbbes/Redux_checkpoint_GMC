import {ADD_TODO,DELETE_TODO,TOGGLE,EDIT} from './Types'
import { v4 as uuidv4 } from 'uuid';

export const addTodo = (newTodo) => {
    return {
        type : ADD_TODO,
        payload : {...newTodo, id:uuidv4() , isDone:false}
    }
}
export const deleteTodo =(id)=>{
    return{
        type : DELETE_TODO,
        payload : id
    }
}
export const toggleTodo =(id)=>{
    return{
        type : TOGGLE,
        payload : id
    }
}
export const editTodo =(todo) =>{
    return{
        type: EDIT,
        payload: todo
    }
}
