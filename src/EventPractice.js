import React, {Component}  from 'react'

class EventPractice extends Component{

    state = {
        username : '',
        message : ''
    }


/*    constructor(props){
        super(props)

        this.handleChange  = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({
            message : e.target.value
        });
    }

    handleClick(){
        alert(this.state.message);
        this.setState({
            message : ''
        });
    }*/


    /**
     * transform-class-propertices 표기법
     * 이렇게 안할경우 constructor에서 해당 메서드를 해당 컴포너느로 바인딩하기 위해서 this, bind해줘야 한다.
    */
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleClick = (e) => {
        alert(this.state.username+' : '+this.state.message);
        this.setState({
            username : '',
            message : ''
        })
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }


    render(){
        return (
            <div>
                <h1>연습 : {this.state.message}</h1>
                <input type="text" name="username" placeholder="사용자명" value={this.state.username} onChange={this.handleChange}/>
                <input type="text" name="message" placeholder="아무거나입력" value={this.state.message} onKeyPress={this.handleKeyPress}
                       onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>연습확인</button>
            </div>
        );
    }
}


export default EventPractice;
