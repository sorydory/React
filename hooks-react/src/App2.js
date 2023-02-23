import {useState} from "react";
import Timer from "./components/Timer";
function App2(){
    const [ showTimer,setShowTimer ] = useState(false);
    return(
        <div>
            {showTimer && <Timer/>}
            <button onClick={()=>setShowTimer(!showTimer)}>타이머보이기/안보이기</button>
            {/* <p>State : {stateNum}</p>
            <p>Ref : {refNum.current}</p>
            <p>let : {varNum}</p>
            <button onClick={addState}>State+1</button>
            <button onClick={addRef}>Ref+1</button>
            <button onClick={addLet}>let+1</button> */}
        </div>
    )
}
export default App2;