import React,{useState} from 'react';

const Counter = () => {
    const numberArray = useState(0);
    const number = numberArray[0];
    const setNumber = numberArray[1];
    // const [number, setNumber] = useState(0); 
    // 위 세 줄을 이렇게 한 줄로 쓸 수 있다.
    
    
    const onIncrease = () => {
        console.log('+1');
        setNumber(number+1);
        console.log(number);
    }
    const onDecrease = () => {
        console.log('-1');
        setNumber(number-1);
        console.log(number);
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};

export default Counter;