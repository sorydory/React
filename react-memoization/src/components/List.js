import React,{useEffect,useState} from 'react';

const List = ({getItems}) => {
    const [items,setItems] = useState([]);
    useEffect(()=>{
        setItems(getItems())    //[1,2,3]
        console.log("숫자가 변동되었습니다.")
    },[getItems])
    const divArray=[<div>A</div>,<div>B</div>,<div>C</div>]
    return (
        <div>
            {items.map((item,index)=><div key={index}>{item}</div>)}
            {divArray}
        </div>
    );
};

export default List;