import React from 'react'
import './Form.css'
import dropDownArrow from '/home/churchjg/SEI/projects/my-first-component-library/src/components/Icons/drop down arrow.svg'

const Form = (props) => {

    let classes = ["form-input"]

    if (props.medium) {
        classes.push("medium")
    }
    if (props.large) {
        classes.push("large")
    }
    if (props.filled) {
        classes.push("filled")
    }
    if (props.type == "select") {
        classes.push("select")
    }

    const emailForm = props => {
        return <div>
            <p>{props.placeholder}</p>
            <InputBlank props={props} className={classes.join(" ")} />
        </div>
    }

    const selectForm = props => {
        let arrow = dropDownArrow

        let options = props.options.map(val => {
            return <option>{val}</option>
        })

        return <select value={props.value} className={classes.join(" ")}>
            <option className="select-default">Select</option>
            {options}
        </select>
    }
    return (
        <form className="form">
            {props.type == "email" ? emailForm(props) : null}
            {props.type == "select" ? selectForm(props) : null}
        </form>
    )
}

export default Form