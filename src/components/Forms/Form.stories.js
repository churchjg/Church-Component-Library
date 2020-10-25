import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from "./Checkbox.js";

import Form from './Form'

let options = ["Pizza", "Cheesesteak", "Cheeseburger", "Fried Chicken", "Hot Dog", "Mac & Cheese", "Diet Coke", "Water"]

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

    .add('Select-Box Small', () => <Form type="select" selectBox options={options} />)
    .add('Select-Box Medium', () => <Form type="select" selectBox medium options={options} />)
    .add('Select-Box Large', () => <Form type="select" selectBox large options={options} />)

    //Select Amount
    .add('Select Amount', () => <Form type="selectAmountForm" select-box min={numberMin} max={numberMax} value={numberValue} step={numberChange} />)

    //Voucher
    .add('Voucher', () => <Form type="voucherForm" placeholder="Voucher code" buttonText="Redeem" medium />)
    .add('Voucher Large', () => <Form type="voucherForm" placeholder="Voucher code" buttonText="Redeem" voucherFormLarge />)

    //Checkboxes
    // .add("Checkbox Black", () => <Checkbox />)
    .add("Checkbox Blue", () => <Checkbox blue label='' />)
    .add("Checkbox Black", () => <Checkbox label="Don't show this popup again" />)
    
