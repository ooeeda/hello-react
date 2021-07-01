import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*
const MyComponent = props => { // == function MyComponent(props){
    const {name, children} = props;
    return(
        <div>
            테스트 {name}
            Children : {children}
        </div>
    );
};
*/

class MyComponent extends Component {
    render() {
        const {name, children, favortieNumber} = this.props;
        return <div>
            테스트 {name}
            Children : {children}
            숫자 : {favortieNumber}
        </div>;
    }



}

/*
const MyComponent = ({name, children, favortieNumber}) => { // == function MyComponent(props){
        return(
        <div>
            테스트 {name}
            Children : {children}
            숫자 :{favortieNumber}
        </div>
    );
};
*/


/*function MyComponent(props){

    return (
        <div>테스트 {props.name}</div>
    );
}*/

MyComponent.defaultProps = {
    name : '기본값'
};
MyComponent.propTypes = {
    name : PropTypes.string,
    favortieNumber : PropTypes.number.isRequired
};


export default MyComponent;
