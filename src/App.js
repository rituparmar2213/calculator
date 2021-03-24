import React, { Component } from 'react';
import Keypad from './components/Keypad';
import Result from './components/Result';

class App extends Component {
  constructor() {
    super();
  

    this.state = {
       result: ""
    }
  }
  Click = button => {
    if(button === "="){
      this.calculate()
    }
    else if(button === "Reset"){
      this.reset()
    }
    else if(button === "backspace"){
      this.backspace()
    }
    else{
      this.setState({
        result: this.state.result + button
      })
    }
  }; 

  calculate = () => {
    // try {
           this.setState({
             result: (eval(this.state.result) || "") + ""
           })
    // }
    // catch(e) {
    //          this.setState({
    //            result:"Math Error"
    //          })
    // }
  };
  
  reset = () => {
    this.setState({
      result:""
    })
  };
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };
  render() {
    
    
    return (
      <div>
        <div className = "calc-body">
            <h1>Calculator</h1>
            <Result result={this.state.result} />
            <Keypad onClick={this.Click} />
        </div>
      </div>
    )
  }
}

export default App


