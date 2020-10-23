import React from 'react'
import './Form.css'
// import dropDownArrow from '/home/churchjg/SEI/projects/my-first-component-library/src/components/Icons/drop down arrow.svg'
import Amounts from './Amount'

const Form = (props) => {

    let classes = ["form-input"]

    if (props.medium) {
        classes.push("medium")
    }
    if (props.large) {
        classes.push("large")
    }
    if (props.selectBox) {
        classes.push("selectBox")
    }
    if (props.type == "select") {
        classes.push("select")
    }
    if (props.type == "email") {
        classes.push("email")
    }
    let Change = (evt) => {
        this.setState({
            value: evt.target.value
        })
    }

    let Submit = (evt) => {
        this.setState({
            value: evt.target.value
        })
    }
    const emailForm = props => {
        return <email value={props.value} className={classes.join(" ")}>
            <option className="email">Email</option>
            <input onChange= {Change} onSubmit={Submit}></input>
        </email>
    }

    const selectForm = props => {

        let options = props.options.map(val => {
            return <option>{val}</option>
        })

        return <select value={props.value} className={classes.join(" ")}>
            <option className="select-default">Select</option>
            {options}
        </select>
    }

    const selectAmountForm = props => {
        return <div className={`Amounts ${classes.join(" ")}`}>
            <Amounts props={props} />
        </div>
    }
    return (
        <form className="form">
            {props.type == "selectAmountForm" ? selectAmountForm(props) : null}
            {props.type == "email" ? emailForm(props) : null}
            {props.type == "select" ? selectForm(props) : null}
        </form>
    )
}

export default Form