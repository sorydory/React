import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Todolists from './components/Todolists';
function App() {
  const [ todoState, setTodoState ] = useState({
      todoLists: [],
      inputText : ""
    });
  const [ id, setId ] = useState(3);
  const onChange = (e) => {
      setTodoState({
        ...todoState,
        inputText: e.target.value
      });
  }
  const onAddTodo = () => {
    const newTodoLists = [
        ...todoState.todoLists,
        { id: id, text: todoState.inputText}
    ]
    setTodoState({
      todoLists:newTodoLists,
      inputText: ""
    })
    setId(id+1);
    console.log(todoState.todoLists);
}
const delTodoLists = (id) => {
  const newTodoLists = todoState.todoLists.filter(todo=> todo.id !== id);
  setTodoState({
    ...todoState,
    todoLists: newTodoLists
  });
 }
 const onIsDoneToggle=(id) =>{
  const newTodoLists = todoState.todoLists.map(todo=>
    todo.id===id ? {...todo, isDone:!todo.isDone} : todo);
  setTodoState({
    ...todoState,
    todoLists: newTodoLists
  });
 }
  return (
    <div className="App todo">
      <Header
      inputText={todoState.inputText} 
      onChange={onChange} 
      onAddTodo={onAddTodo}/>
      <Todolists todoLists={todoState.todoLists} 
      delTodoLists={delTodoLists} onIsDoneToggle={onIsDoneToggle} />
    </div>
  );
}

export default App;