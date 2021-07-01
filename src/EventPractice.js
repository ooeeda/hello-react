import React, {Component}  from 'react'

class EventPractice extends Component{

    state = {
        message : ''
    }

    constructor(props){
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
    }

    render(){
        return (
            <div>
                <h1>연습 : {this.state.message}</h1>
                <input type="text" name="message" placeholder="아무거나입력" value={this.state.message}
                       onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>연습확인</button>
            </div>
        );
    }
}


export default EventPractice;
