import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './Form'

let options = ["Pizza", "Cheesesteak", "Burgers", "Wings", "Hot Dog"]

//Select Amount
let numberMin = 0
let numberMax = 1000000
let numberValue = 1
let numberChange = 1

storiesOf('Forms', module)

    //Emails
    .add('Email Small', () => <Form type="email" placeholder="Email" />)
    .add('Email Medium', () => <Form type="email" medium placeholder="Email" />)
    .add('Email Large', () => <Form type="email" large placeholder="Email" />)

    //Selects
    .add('Select Small', () => <Form type="select" options={options} />)
    .add('Select Medium', () => <Form type="select" medium options={options} />)
    .add('Select Large', () => <Form type="select" large options={options} />)

    .add('Select Filled Small', () => <Form type="select" filled options={options} />)
    .add('Select Filled Medium', () => <Form type="select" filled medium options={options} />)
    .add('Select Filled Large', () => <Form type="select" filled large options={options} />)

    //Select Amount
    .add('Select Amount', () => <Form type="selectAmountForm" filled min={numberMin} max={numberMax} value={numberValue} step={numberChange} />)
