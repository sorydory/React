import React, { useEffect,useState } from 'react';

const Box = ({createBox}) => {
    const [style, setStyle] = useState ({});
    useEffect(()=>{
        console.log('박스키우기');
        setStyle(createBox())
    },[createBox])
    return (
        <div style={style}>
            
        </div>
    );
};

export default Box;