import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
export type RatingPropsType = {
    ratingValue: RatingValueType
    setRatingValue: (ratingValue: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.ratingValue>0} setRatingValue={props.setRatingValue} ratingValue={1}/>
            <Star selected={props.ratingValue>1} setRatingValue={props.setRatingValue} ratingValue={2}/>
            <Star selected={props.ratingValue>2} setRatingValue={props.setRatingValue} ratingValue={3}/>
            <Star selected={props.ratingValue>3} setRatingValue={props.setRatingValue} ratingValue={4}/>
            <Star selected={props.ratingValue>4} setRatingValue={props.setRatingValue} ratingValue={5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setRatingValue: (ratingValue: RatingValueType) => void
    ratingValue: RatingValueType
}

function Star(props: StarPropsType) {
    return (
        <span onClick={() => props.setRatingValue(props.ratingValue)}>{props.selected ? <b>star</b> : "star"} </span>
    )
}