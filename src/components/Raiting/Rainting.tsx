import React from "react";

export  type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType
    setRatingValueParent: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    return (
      <div>
          <Star selected={props.value >= 1} setRatingValueChild={() => {props.setRatingValueParent(1)}}/>
          <Star selected={props.value >= 2} setRatingValueChild={() => {props.setRatingValueParent(2)}}/>
          <Star selected={props.value >= 3} setRatingValueChild={() => {props.setRatingValueParent(3)}}/>
          <Star selected={props.value >= 4} setRatingValueChild={() => {props.setRatingValueParent(4)}}/>
          <Star selected={props.value >= 5} setRatingValueChild={() => {props.setRatingValueParent(5)}}/>
      </div>
    )
}

type StarPropsType = {
    selected: boolean
    setRatingValueChild: () => void
}

function Star(props: StarPropsType) {
   return <span onClick={props.setRatingValueChild}> {props.selected ? <b>star </b> : <>star </>} </span>
    /*один из 5 детей(Star) вызывает родителя (UncontrolledRating) через переданную ему функцию(setValue), называя ей свои данные(value)
     Это КОЛЛБЕК*/
}