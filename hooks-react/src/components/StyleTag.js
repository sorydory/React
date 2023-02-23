import React from "react";
function StyleTag(){
    const parStyle={
        fontSize:"24px",
        textDecoration:"underline",
        color:"blue",
        backgroundColor:"lightblue",
      }
      const newArr=[
        <p>안녕하세요1</p>,
        <p>안녕하세요2</p>,
        <p>안녕하세요3</p>
      ]
    return(
        <div>
            <h2 style={{color:"pink", fontSize:"32px"}}>즐거운 화요일</h2>
            <p style={parStyle}>안녕하세요 오늘은 리액트 스타일을 배워보겠습니다.</p>
            {newArr}
        </div>
    )
}
export default StyleTag;