
import './App.css';
import TodoContext from './context/TodoContext';
import TodoHeader from './components/TodoHeader';
import TodoCreate from './components/TodoCreate';
import TodoLists from './components/TodoLists';
import TodoTemplate from './components/TodoTemplate';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}`
function App() {
  return (
    <TodoContext>
    <GlobalStyle/>
    <TodoTemplate>
      <TodoHeader/>
      <TodoLists/>
      <TodoCreate/>
      </TodoTemplate>
    </TodoContext>
  );
}

export default App;