import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "../modules/todos";
import Todos from "../components/Todos";

const TodosContainer = () => {
    //useSelector로 상태에서 필요한 속성값 변환
    const todos = useSelector(state=>state.todos);
    const dispatch = useDispatch();

    const onCreate = text => dispatch(addTodo(text));
    const onToggle = id => dispatch(toggleTodo(id));
    return(
            <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
    )
}
export default TodosContainer;