import React from 'react';
import Nav from './Nav';

function Header({lists}){
    //const {lists} = props;
    const number1=0;
    return (
      <header>
        <h1>Green {number1}</h1>
        <Nav lists={lists}/>
      </header>
    )
  }

export default Header;