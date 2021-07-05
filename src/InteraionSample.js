import React from 'react';

const InteraionSample = () =>{

    const names = ['1','2','3','4','5'];
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);

    return(

        <ul>{nameList}</ul>

    );
}


export default InteraionSample;
