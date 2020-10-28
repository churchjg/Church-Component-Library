  
import React from 'react'
import '../AppleAdvertise/Advertise.css'
import Button from '../Button/Button'
import Rating from '../AppleAdvertise/Rating'
import Icon from '../Icons/Icons'
import favorite from '../Images/favoritewithcircle.png'
import cart from '../Images/cartwithcircle.png'
import cart2 from '../Images/bluecart.png'
import favorite2 from '../Images/bluefavorite.png'
import hot from '../Images/hot.svg'


export default function Advertise(props) {

    let classes = ["advertise-container"]
    let contentClasses = ["advertise-content"]
    let hoverClasses = ["advertise-hover-icon-container"]

    let favoriteIcon = <Icon src={favorite} />
    let cartIcon = <Icon src={cart} />


    if(props.horizontal){
        classes.push("advertise-horizontal")
    }
    if(props.vertical){
        classes.push("advertise-vertical")
        contentClasses.push("advertise-content-vertical")
    }
    if(props.blank){
        classes.push("advertise-blank")
        contentClasses.push("advertise-content-vertical-blank")
        hoverClasses.push("advertise-hover-icon-container-blank")
        favoriteIcon = <Icon src={favorite2} />
        cartIcon = <Icon src={cart2} />
    }
    if(props.borderless){
        classes.push("advertise-container-borderless")
        contentClasses.push("advertise-content-borderless")
    }

    let blockAdvertise = props => {
        return <div className={classes.join(" ")}>
                {<img className="advertise-image" src={props.imgSrc} />}
                <div className={contentClasses.join(" ")}>
                    <p>{props.itemName}</p>
                    <Rating yellowStar="4" grayStar="1" vertical={props.vertical} />
                    <div className="advertise-prices">
                        <p className="advertise-current-price">$499</p>
                        <p className="advertise-previous-price">$599</p>
                    </div>
                </div>
                <div className="advertise-hover-icons">
                    <div className={hoverClasses.join(" ")}>
                        {favoriteIcon}
                    </div>
                    <div className={hoverClasses.join(" ")}>
                        {cartIcon}
                    </div>
                </div>
            </div>

    }

    let inlineAdvertise = props => {
        return <div className="advertise-container-inline">
                <div className="advertise-image-inline" >
                    <Icon src={hot} />
                    <img  src={props.imgSrc} />
                </div>
                <div className="advertise-content-inline">
                    <p className="advertise-inline-title" >{props.itemName}</p>
                    <div className="advertise-rating-inline-container">
                        <div className="advertise-rating-inline">
                            <Rating yellowStar="4" grayStar="1" inline={props.type} />
                            <p className="advertise-inline-total-reviews">{props.totalReviews} reviews</p>
                            <a className="advertise-inline-a" href="#">Submit a review</a>
                        </div>
                    </div>
                    <div className="advertise-prices-inline">
                        <p className="advertise-current-price">$499</p>
                        <p className="advertise-previous-price">$599</p>
                    </div>
                    <div className="advertise-inline-description">
                    Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...
                    </div>
                    <div className="advertise-inline-buttons">
                        <Button type="primary" blank icon={cart} label="Add To Cart" />
                        <Button type="primary" blank icon={favorite} />
                    </div>
                </div>
            </div>
    }
    return (
        <div>
            {props.type=="block" ? blockAdvertise(props) :null}
            {props.type=="inline" ? inlineAdvertise(props) :null}
        </div>
        
    )
}