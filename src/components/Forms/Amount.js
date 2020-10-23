import React, { Component } from 'react'
import './Amount.css'
import { render } from 'react-dom'

export class Amounts extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentNumber: this.props.props.value
        }
    }


        increaseNumber = currentNumber => {
            if (this.state.currentNumber < this.props.props.max){
                    this.setState({
                        currentNumber: this.state.currentNumber + this.props.props.step
                    })
            }
        }

        decreaseNumber = currentNumber => {
            if (this.state.currentNumber > this.props.props.min){
                this.setState({
                    currentNumber: this.state.currentNumber - this.props.props.step
                })
            }
        }

        render(){
            return <div className="container">
                    <p className="number-change" onClick={this.decreaseNumber}>–</p>
                    <p className="numbers">{this.state.currentNumber}</p>
                    <p className="number-change" onClick={this.increaseNumber}>+</p>
                </div>
        }
}

export default Amounts