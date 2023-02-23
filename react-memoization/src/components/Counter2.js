import React,{useReducer} from 'react';
function reducer(state,action){
    //action에 따라 상태를 업데이트
    switch(action.type){
        case 'increase':
            return state+1;
        case 'decrease':
            return state-1;
        default:
            return state;
    }
}
const Counter2 = () => {
    const [number,dispatch] = useReducer(reducer,0);
    const onIncrease = ()=> {
        dispatch({
            type: 'increase'
        })
    }
    const onDecrease = ()=> {
        dispatch({
            type: 'decrease'
        })
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease}>+1</button>
            <button onClick={disCrease}>-1</button>
        </div>
    );
};

export default Counter2;