import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from '../Forms/Form'

let options = ["Pizza", "Cheesesteak", "Burgers", "Wings", "Hot Dog"]

storiesOf('Form', module)

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
