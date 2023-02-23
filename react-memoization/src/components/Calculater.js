import React, {useState} from 'react';
const hardCalulate=(number)=>{
    console.log('복잡한 계산');
    for(let i=0; i<100000000; i++){}
    return number+ 100000;
}
const easyCalulate=(number)=>{
    console.log('단순한 계산');
    return number+ 100000;
}
const Calculater = () => {
    return (
        <div>
            <h3>복잡한계산기</h3>
            <input type="number"/>
            <span> +100000</span>
        </div>
    );
};

export default Calculater;<h3>복잡한계산기</h3>
