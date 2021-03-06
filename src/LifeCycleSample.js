import React, {Component} from 'react';

class LifeCycleSample extends Component{

    state ={
      number : 0,
      color : null
    };

    myRef = null;

    constructor(props){
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFormPros(nextProps, prevState){
        console.log('getDerivedStateFormPros');

        if(nextProps.color !== prevState.color){
            return { color : nextProps.color};
        }
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);
        //숫자의 마지막 자리가 4면 리렌더링 하지 않는다네
    }

    componentWillUnmount(){
        console.log('componentWillMount');
    }

    handleClick = () => {
        this.setState({
           number : this.state.number +1
        });
    }
    x
    getSnapshotBeforeUpdate(prevProps, PrevState){
        console.log('getSnapshotBeforeUpdate');

        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate',prevProps, prevState);
        if(snapshot){
            console.log('업데이트되기전 색상 ', snapshot);
        }
    }
    render(){
        console.log('render');
        const style = {
            color : this.props.color
        };
        return (
            <div>
                <h1 style={style} ref={ref=> this.myRef=ref}>{this.state.number}</h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        )
    }
}

export default LifeCycleSample;