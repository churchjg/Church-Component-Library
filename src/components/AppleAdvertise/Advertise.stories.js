import React from 'react';
import { storiesOf } from '@storybook/react';
import Advertise from '../AppleAdvertise/Advertise'
import computer from '../Images/linuxisbetter.png'
import headphones from '../Images/beatsheadphones.png'


storiesOf('Advertisments', module)

//HORIZONTAL
.add('Horizontal', () => <Advertise itemName="Apple MacBook Pro" imgSrc={computer} type="block" horizontal />)
.add('Horizontal Borderless', () => <Advertise itemName="Beats Solo 2 On Ear Headphones - Black" imgSrc={headphones} type="block" borderless />)

//VERTICAL
.add('Vertical', () => <Advertise itemName="Apple MacBook Pro" imgSrc={computer} type="block" vertical />)
.add('Vertical Blank', () => <Advertise itemName="Apple MacBook Pro" imgSrc={computer} type="block" vertical blank />)

//INLINE
.add('Inline', () => <Advertise itemName="Beats Solo 2 On Ear Headphones - Black" imgSrc={computer} type="inline" totalReviews="0" />)