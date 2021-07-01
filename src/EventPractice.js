import React, {Component}  from 'react'

class EventPractice extends Component{

    state = {
        message : ''
    }

    render(){
        return (
            <div>
                <h1>연습 : {this.state.message}</h1>
                <input type="text" name="message" placeholder="아무거나입력" value={this.state.message}
                       onChange={ (e) => {
                           this.setState({
                               message : e.target.value
                           })
                       }}
                />
                <button onClick={()=>{
                   alert(this.state.message);
                   this.setState({
                       message : ''
                   });
                }}
                >연습확인</button>
            </div>
        );
    }
}


export default EventPractice;
