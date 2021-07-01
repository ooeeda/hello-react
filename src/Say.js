import React, {useState} from 'react';

const Say = () =>{
    const [message, setMessage] = useState('기본');

    const [color, setColor] = useState('black');

    const onClickEnter = () => setMessage('클릭');
    const onClickLeave = () => setMessage('클릭떠나기');
    return (
        <div>
           <button onClick={onClickEnter}>1</button>
           <button onClick={onClickLeave}>2</button>
            <h1 style={{color}}>{message}</h1>
            <button onClick={()=> {
                setColor('red')
            }}>레드</button>
            <button onClick={()=> setColor('green')}>그린</button>
            <button onClick={()=> setColor('black')}>블랙</button>
        </div>
    );
}


export default Say;
