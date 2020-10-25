import React, { Component } from "react";
import "./Checkbox.css";

import emptyBlackBox from "../../components/Icons/emptybox.png"
import checkedBlack from "../Icons/checkedbox.png"
import emptyBlueBox from "../Icons/emptyboxblue.png"
import checkedBlue from "../Icons/checked-box-blue.png"

class Checkbox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleCheckedBox: false
		};
		this.handleCheckedBox = this.handleCheckedBox.bind(this);
	}
	handleCheckedBox = evt => {
        //reverses normal state
		this.setState({ toggleCheckedBox: !this.state.toggleCheckedBox });
	};
	render() {
		return (
			<div className='checkbox' onClick={this.handleCheckedBox}>
				{this.state.toggleCheckedBox ? (
					<div className='checked'>
						<img src={this.props.blue ? checkedBlue : checkedBlack} />
					</div>
				) : (
					<div className='empty'>
						<img src={this.props.blue ? emptyBlueBox : emptyBlackBox} />
					</div>
				)}
				<label>{this.props.label}</label>
			</div>
		);
	}
}
export default Checkbox;