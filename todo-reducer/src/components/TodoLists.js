import React from 'react';

const TodoLists = ({todoLists,delTodoLists}) => {
    return (
        <div>
            <ul className='todoLists'>
                {todoLists.map(todo=><li key={todo.id} style={{color:todo}}>{todo.text}
                <button onClick={()=> delTodoLists(todo.id)}>X</button></li>)}
            </ul>
        </div>
    );
};

export default TodoLists;