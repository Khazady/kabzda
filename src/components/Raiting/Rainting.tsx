import React from "react";

export  type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    return (
      <div>
          <Star selected={props.value >= 1} value={1} onClick={() => {props.onClick(1)}}/>
          <Star selected={props.value >= 2} value={2} onClick={() => {props.onClick(2)}}/>
          <Star selected={props.value >= 3} value={3} onClick={() => {props.onClick(3)}}/>
          <Star selected={props.value >= 4} value={4} onClick={() => {props.onClick(4)}}/>
          <Star selected={props.value >= 5} value={5} onClick={() => {props.onClick(5)}}/>
      </div>
    )
}


type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
   return <span onClick={ () => props.onClick(props.value)}> {props.selected ? <b>star </b> : <>star </>} </span>
    /*один из 5 детей(Star) вызывает родителя (UncontrolledRating) через переданную ему функцию(setValue), называя ей свои данные(value)
     Это КОЛЛБЕК*/
}