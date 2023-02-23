import styled, {css} from 'styled-components';
import React from 'react';

const CircleDiv= styled.div`
  width:50px;
  height:50px;
  background:${props =>props.color || 'black'};
  border-radius:50%;
  ${props=> props.big &&
  css`
    width:150px;
    height:150px;
    `
  }
`;

const Circle =() => {
    return(
        <div>
            <CircleDiv color='blue'/>
            <CircleDiv color='pink'/>
            <CircleDiv color='yellow' big/>
        </div>
    )
}
export default Circle;