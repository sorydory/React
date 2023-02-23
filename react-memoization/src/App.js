
import './App.css';
import Counter2 from './components/Counter2';
// import { useState } from 'react';
// import ShowState from './components/ShowState';


function App() {
  // const [number,setNumber] = useState(0);
  // const [text, setText] = useState("");
  // const increaseNumber = () => {
  //   setNumber(number+1);
  // }
  // const decreaseNumber = () =>{
  //   setNumber(number-1);
  // }
  // const onChange = (e)=> {
  //   setText(e.target.value);
  // }
  return (
    <div className="App">
      <Counter/>
      {/* <div>
        <button onClick={increaseNumber}>+1</button>
        <button onClick={decreaseNumber}>-1</button>
        <input
        type="text" placeholder='lastname'
        onChange={onChange}/>
      </div>
      <ShowState number={number} text={text}/> */}
      <MemoComponent></MemoComponent>
    </div>
  );
}

export default App;
