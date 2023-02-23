import React,{useState} from 'react';

const DomRefSample = () => {
    const [name,setName] = useState("");
    const inputRef = useRef();
    const onReset =()=>{
        setName("");
        // document.querySelector('#inputname').focus();
        inputRef.current.focus();
    }
    return (
        <div>
            <imput name="name" value={name} id="inputname" ref={inputRef}
            onChange={(e)=>setName(e.target.value)}/>
            <button onClick={onReset}>초기화</button>
        </div>
    );
};

export default DomRefSample;