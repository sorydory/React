import React from 'react';
import { useTodoDispatch, useTodoState } from '../context/TodoContext';
import styled,{css} from 'styled-components';
import {MdDelete, MdDone} from "react-icons/md";


const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color:#dee2e6;
    cursor: pointer;
    font-size:24px;
    &:hover{
        color:#ff6b6b;
    }    
    display:none;
`;

const TodoListBlock = styled.div`
    padding:20px 32px;
    flex:1;
    &:hover{
        ${Remove}{
            display:inline-block;
        }
    }
`;

const TodoItemBlock = styled.div`
    display:flex;
    padding-top:12px;
    padding-bottom:12px;
    align-itmes:center;
    &:hover{
        ${Remove}{
            display:inline-block;
        }
    }
`;

const CheckCircle = styled.div`
    width:32px;
    height:32px;
    margin-right:12px;
    border-radius:50%;
    border:1px solid #ced4da;
    font-size:24px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    ${props=>
        props.done &&
    css`
        border:1px solid #38d9a9;
        color:#38d9a9;
        `
    }
`;

const Text = styled.div`
    flex:1;
    font-size:21px;
    color:#495057;
    ${props=>
        props.done &&
        css`
            color:#ced4da;
            `
        }
    `;

const TodoLists = () => {
    const todos=useTodoState();
    const dispatch = useTodoDispatch();
    const removeTodo =(id)=>{
        dispatch({
            type:'REMOVE',
            id:id
        })
    }
    const toggleTodo =(id)=>{
        dispatch({
            type:'TOGGLE',
            id:id
        })
    }
    return (
        <TodoListBlock>
                {todos.map(todo=><TodoItemBlock key={todo.id}>
                <CheckCircle done={todo.done} onClick={()=>{toggleTodo(todo.id)}}>{todo.done && <MdDone/>}</CheckCircle>
                <Text done={todo.done}>{todo.text}</Text>
                <Remove onClick={()=>{removeTodo(todo.id)}}><MdDelete/>
                </Remove></TodoItemBlock>)}
        </TodoListBlock>
        
    );
};
export default TodoLists;