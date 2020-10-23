import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import favorite from '/home/churchjg/SEI/projects/my-first-component-library/src/components/Icons/favorite.svg'
import cart from '/home/churchjg/SEI/projects/my-first-component-library/src/components/Icons/cart.svg'

storiesOf('Button', module)

    //Defaults
    .add('Default', () => <Button label="Jon's Button" />)
    .add('Default Large', () => <Button large label="Jon's Button" />)

    .add('Default Empty', () => <Button empty label="Jon's Button" />)
    .add('Default Empty Large', () => <Button empty large label="Jon's Button" />)

    .add('Default Blank', () => <Button blank label="Jon's Button" />)
    .add('Default Blank Large', () => <Button blank large label="Jon's Button" />)


    //Primary Buttons
    .add('Primary', () => <Button type="primary" label="Jon's Button" />)
    .add('Primary Large', () => <Button type="primary" large label="Jon's Button" />)

    .add('Primary Empty', () => <Button type="primary" empty label="Jon's Button" />)
    .add('Primary Empty Large', () => <Button type="primary" empty large label="Jon's Button" />)

    .add('Primary Blank', () => <Button type="primary" blank label="Jon's Button" />)
    .add('Primary Blank Large', () => <Button type="primary" blank large label="Jon's Button" />)

    //Danger Buttons
    .add('Danger', () => <Button type="danger" label="Jon's Button" />)
    .add('Danger Large', () => <Button type="danger" large label="Jon's Button" />)

    .add('Danger Empty', () => <Button type="danger" empty label="Jon's Button" />)
    .add('Danger Empty Large', () => <Button type="danger" empty large label="Jon's Button" />)

    .add('Danger Blank', () => <Button type="danger" blank label="Jon's Button" />)
    .add('Danger Blank Large', () => <Button type="danger" blank large label="Jon's Button" />)

    //Success Buttons
    .add('Success', () => <Button type="success" label="Jon's Button" />)
    .add('Success Large', () => <Button type="success" large label="Jon's Button" />)

    .add('Success Empty', () => <Button type="success" empty label="Jon's Button" />)
    .add('Success Empty Large', () => <Button type="success" empty large label="Jon's Button" />)

    .add('Success Blank', () => <Button type="success" blank label="Jon's Button" />)
    .add('Success Blank Large', () => <Button type="success" blank large label="Jon's Button" />)

    //Warning Buttons
    .add('Warning', () => <Button type="warning" label="Jon's Button" />)
    .add('Warning Large', () => <Button type="warning" large label="Jon's Button" />)

    .add('Warning Empty', () => <Button type="warning" empty label="Jon's Button" />)
    .add('Warning Empty Large', () => <Button type="warning" empty large label="Jon's Button" />)

    .add('Warning Blank', () => <Button type="warning" blank label="Jon's Button" />)
    .add('Warning Blank Large', () => <Button type="warning" blank large label="Jon's Button" />)

    //Cart
    .add('Cart', () => <Button type="primary" blank icon={cart} />)
    .add('Cart Text', () => <Button type="primary" blank icon={cart} label="Add To Cart" />)

    //Favorite
    .add('Favorite', () => <Button type="primary" blank icon={favorite} />)
    .add('Favorite Text', () => <Button type="primary" blank icon={favorite} label="  Add To Favorites" />)