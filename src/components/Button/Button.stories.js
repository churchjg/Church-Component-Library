import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import favorite from '/home/churchjg/SEI/projects/my-first-component-library/src/components/Icons/favorite.svg'
import cart from '/home/churchjg/SEI/projects/my-first-component-library/src/components/Icons/cart.svg'

storiesOf('Button', module)

    //Defaults
    .add('Default', () => <Button label="Jon's Button" />)
    .add('Default Large', () => <Button large label="Jon's Button" />)

    .add('Default Clean', () => <Button clean label="Jon's Button" />)
    .add('Default Clean Large', () => <Button clean large label="Jon's Button" />)

    .add('Default Flat', () => <Button flat label="Jon's Button" />)
    .add('Default Flat Large', () => <Button flat large label="Jon's Button" />)


    //Primary Buttons
    .add('Primary', () => <Button type="primary" label="Jon's Button" />)
    .add('Primary Large', () => <Button type="primary" large label="Jon's Button" />)

    .add('Primary Clean', () => <Button type="primary" clean label="Jon's Button" />)
    .add('Primary Clean Large', () => <Button type="primary" clean large label="Jon's Button" />)

    .add('Primary Flat', () => <Button type="primary" flat label="Jon's Button" />)
    .add('Primary Flat Large', () => <Button type="primary" flat large label="Jon's Button" />)

    //Danger Buttons
    .add('Danger', () => <Button type="danger" label="Jon's Button" />)
    .add('Danger Large', () => <Button type="danger" large label="Jon's Button" />)

    .add('Danger Clean', () => <Button type="danger" clean label="Jon's Button" />)
    .add('Danger Clean Large', () => <Button type="danger" clean large label="Jon's Button" />)

    .add('Danger Flat', () => <Button type="danger" flat label="Jon's Button" />)
    .add('Danger Flat Large', () => <Button type="danger" flat large label="Jon's Button" />)

    //Success Buttons
    .add('Success', () => <Button type="success" label="Jon's Button" />)
    .add('Success Large', () => <Button type="success" large label="Jon's Button" />)

    .add('Success Clean', () => <Button type="success" clean label="Jon's Button" />)
    .add('Success Clean Large', () => <Button type="success" clean large label="Jon's Button" />)

    .add('Success Flat', () => <Button type="success" flat label="Jon's Button" />)
    .add('Success Flat Large', () => <Button type="success" flat large label="Jon's Button" />)

    //Warning Buttons
    .add('Warning', () => <Button type="warning" label="Jon's Button" />)
    .add('Warning Large', () => <Button type="warning" large label="Jon's Button" />)

    .add('Warning Clean', () => <Button type="warning" clean label="Jon's Button" />)
    .add('Warning Clean Large', () => <Button type="warning" clean large label="Jon's Button" />)

    .add('Warning Flat', () => <Button type="warning" flat label="Jon's Button" />)
    .add('Warning Flat Large', () => <Button type="warning" flat large label="Jon's Button" />)

    //Cart
    .add('Cart', () => <Button type="primary" flat icon={cart} />)
    .add('Cart Text', () => <Button type="primary" flat icon={cart} label="Add To Cart" />)

    //Favorite
    .add('Favorite', () => <Button type="primary" flat icon={favorite} />)
    .add('Favorite Text', () => <Button type="primary" flat icon={favorite} label="  Add To Favorites" />)