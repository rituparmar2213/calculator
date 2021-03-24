import React, { Component } from 'react'

class Keypad extends Component {
    keys(tmp){
        this.props.Click(tmp.target.value)
    }
    render() {
        return (
        <div>
            <div>
                <button value="(" onClick = {this.keys}>(</button>
                <button value="backspace" onClick = {this.keys}>CE</button>
                <button value=")" onClick = {this.keys}>)</button>
                <button value="Reset" onClick = {this.keys}>C</button><br />
            </div>
            <div>
                <button value="7" onClick = {this.keys}>7</button>
                <button value="8" onClick = {this.keys}>8</button>
                <button value="9" onClick = {this.keys}>9</button>
                <button value="+" onClick = {this.keys}>+</button><br />
            </div>
            <div>
                <button value="4" onClick = {this.keys}>4</button>
                <button value="5" onClick = {this.keys}>5</button>
                <button value="6" onClick = {this.keys}>6</button>
                <button value="-" onClick = {this.keys}>-</button><br />
            </div>
            <div>
                <button value="1" onClick = {this.keys}>1</button>
                <button value="2" onClick = {this.keys}>2</button>
                <button value="3" onClick = {this.keys}>3</button>
                <button value="*" onClick = {this.keys}>*</button><br />
            </div>
            <div>
                <button value="." onClick = {this.keys}>.</button>
                <button value="0" onClick = {this.keys}>0</button>
                <button value="=" onClick = {this.keys}>=</button>
                <button value="/" onClick = {this.keys}>/</button><br />
            </div>
        </div>
        )
    }
}

export default Keypad
