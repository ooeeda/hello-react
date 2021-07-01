import react, {Component} from 'react';

//이건 클래스 컴포넌트 방식에서 state 사용하는 기본적인예제임

class Count extends Component {
    /*    constructor(props){
            super(props);
            //state의 초기값 설정
            this.state = {
                number : 0,
                fiexedNumber : 0
            };
        }*/
    state = {
        number: 0,
        fiexedNumber: 0
    };

    render() {
        const {number, fiexedNumber} = this.state; //state 조회할때는 this.state으로 조회

        return (
            <div>
                <h1>{number}</h1>
                <h1>바뀌지 않는값하래 : {fiexedNumber} </h1>
                <button onClick={() => {
                    /*          this.setState({number: number+1});
                              this.setState({number : this.state.number + 1});*/
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1
                        };
                    }, () => {
                        console.log("this.setSte")
                    });
                    this.setState(prevState => ({number: prevState.number + 1}), () => {
                        console.log("이것도 되나")
                    });
                }}>+1</button>
            </div>
                    );
                }
}

export default Count;
