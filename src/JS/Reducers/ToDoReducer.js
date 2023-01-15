import {ADD_TODO,DELETE_TODO,TOGGLE,EDIT} from '../Actions/Types'

const initState = {
    todos : [
        {id: "01", description:"first todo", isDone : false},
        {id: "02", description:"second todo", isDone : false}
    ]
}

const ToDoReducer = (state = initState,{type,payload}) => {
    switch (type){
        case ADD_TODO :
            return{
                ...state,
                todos : [...state.todos,payload]
            }

        case DELETE_TODO :
            return {
                ...state,
                todos : [...state.todos.filter(el => el.id !== payload)]
            }

        case TOGGLE:
            return{
                ...state,
                todos : state.todos.map(el=>el.id === payload?{...el,isDone: !el.isDone}:el)
            }

        case EDIT:
            return{
                ...state,
                todos : state.todos.map(el => el.id === payload.id? payload : el)
            }

        default:
            return state ;
    }
}

export default ToDoReducer