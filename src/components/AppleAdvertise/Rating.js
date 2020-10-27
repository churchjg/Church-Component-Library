import React from 'react'
import Icon from '../Icons/Icons'
import yellowStar from '../Images/yellow-star.svg'
import grayStar from '../Images/gray-star.svg'


export default function Rating(props) {
    let ratingClasses = ["rating-container"]
    let totalRating = []

    if(props.vertical){
        ratingClasses.push("rating-container-vertical")
    }
    if(props.inline){
        ratingClasses.push("rating-container-inline")
    }

    for (let i=0; i<props.yellowStar ; i++){
        totalRating.push(<Icon key={i} src={yellowStar} />)
    }
    for (let i=0; i<props.grayStar ; i++){
        let key = i + yellowStar
        totalRating.push(<Icon key={key} src={grayStar} />)
    }

    return (
        <div className={ratingClasses.join(" ")}>
            {totalRating}
        </div>
    )
}