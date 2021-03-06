import React, {Component, Fragment} from "react";
import logo from './logo.svg';
import './App.css';
import MyComponent from "./MyComponent";
import Count from "./Count"
import Say from "./Say"
import EventPractice from "./EventPractice"
import EventPracticeFnc from "./EventPracticeFnc";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import InteraionSample from "./InteraionSample"
import LifeCycleSample from "./LifeCycleSample";
class App extends Component{
  render(){
    const name = "react";

    //return <div className={name}>{name}</div>;
    return(
    <Fragment>
      {/*<MyComponent name="dddd"/>*/}
     {/* <MyComponent name={"ddasfsd"} favortieNumber={1}>텍스트</MyComponent>*/}
      <Count/>
      <Say/>
      <EventPractice/>
      <EventPracticeFnc/>
      <h1>--------------------------------</h1>
      <ValidationSample/>
      <div>
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>아래론</button>
      </div>
      <h1>-----------맵-------------</h1>
      <InteraionSample/>
      <h1>---------라이프사이클 메서드--------------</h1>
      <LifeCycleSample/>
    </Fragment>
    );
  }

}

/*function App() {
  return (
      <Fragment>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      <div>

      </div>
      </Fragment>
  );
}*/



export default App;
