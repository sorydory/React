import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodoContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer/>
      <TodosContainer/>
    </div>
  );
}

export default App;
