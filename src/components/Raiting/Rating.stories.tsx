import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Rating, RatingValueType} from "./Rainting";

export default {
    title: 'Rating',
    component: Rating,
};

export const EmptyRating = () => <Rating value={0} setRatingValueParent={x=>x}/>;
export const Rating1 = () => <Rating value={1} setRatingValueParent={x=>x}/>;
export const Rating2 = () => <Rating value={2} setRatingValueParent={x=>x}/>;
export const Rating3 = () => <Rating value={3} setRatingValueParent={x=>x}/>;
export const Rating4 = () => <Rating value={4} setRatingValueParent={x=>x}/>;
export const Rating5 = () => <Rating value={5} setRatingValueParent={x=>x}/>;
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} setRatingValueParent={setRating} />
};
