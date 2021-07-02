import React, {useState} from 'react';

const EventPracticeFnc = () => {

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const onChangeUserName = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);

    const onClick =()=>{
        alert(username+ ' : '+message);
        setUsername('');
        setMessage('');
    };

    const onKeyPress = e =>{
        if(e.key ==='Enter'){
            onClick();
        }
    };


    return (
        <div>
            <h1>function 방식으로 이벤트 호출</h1>
            <input type='text' name="username" placeholder="사용자명" value={username}
                   onChange={onChangeUserName} onKeyPress={onKeyPress}
            />
            <input type='text' name='message' placeholder="내용" value={message}
                   onChange={onChangeMessage} onKeyPress={onKeyPress}

            />
            <button onClick={onClick}>확인</button>
        </div>
    );
}

export default EventPracticeFnc;
