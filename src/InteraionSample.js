import React,{useState} from 'react';

const InteraionSample = () =>{

    /*const names = ['1','2','3','4','5'];
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);*/

    const [names, setNames] = useState([
        {id : 1 , text : '하나'},
        {id : 2 , text : '둘'},
        {id : 3 , text : '셋'},
        {id : 4 , text : '넷'},
        {id : 5 , text : '다섯'},
    ]);



    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(6);
    const onChange = e => setInputText(e.target.value);

    const onClick = () =>{
        const nextNames = names.concat({
           id : nextId,
           text : inputText
        });
        setNextId(nextId+1);
        setNames(nextNames);
        setInputText('');
    }

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const nameList = names.map((name) => (
        <li key={name.id} onDoubleClick={()=>{onRemove(name.id)}}>{name.text}</li>
    ));



    return( <>
        <input value={inputText} onChange={onChange} />
        <button onClick={onClick}>추가</button>
        <ul>{nameList}</ul>
        </>
    );
}


export default InteraionSample;
