import React from "react";

function Nav({lists}){
    // const{lists}= props;
    // const lis = lists.map(list=><li key={list.id}>{list.title}</li>)
    return(
      <ul>
        {lists.map(list=><li key={list.id}>{list.title}</li>)} 
        {/* [ //위에 줄이랑 같은 거
          <li key="1">menu1</li>,
          <li key="1">menu1</li>,
          <li key="1">menu1</li>,
          <li key="1">menu1</li>,
        ] */}
      </ul>
    )
  }

export default Nav;