import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseAsync, increaseAsync } from '../modules/Counter';
import Counter from '../components/Counter';




const CounterContainer = () => {
    //상태값 받아오기
    const number = useSelector(state=>state.counter);
    const dispatch = useDispatch();
    const onIncrease = () => {
        dispatch(increaseAsync())
    }
    const onDecrease = () => {
        dispatch(decreaseAsync())
    }
    return (
        <Counter number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        />
    );
};

export default CounterContainer;