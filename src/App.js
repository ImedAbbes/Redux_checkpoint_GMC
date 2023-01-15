import './App.css';
import { useSelector } from 'react-redux';
import ToDoList from './components/ToDoList'
import AddTodo from './components/AddTodo';

function App(props) {

  const alltodos = useSelector(state => state.ToDoReducer.todos)
  
  console.log(alltodos)

  return (
    <div className="App">
      <AddTodo></AddTodo>
      <ToDoList alltodos={alltodos}></ToDoList>
    </div>
  );
}

export default App;
