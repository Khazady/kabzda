import React from "react";
import { ClockViewPropsType } from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    const get2DigitsString = (num: number) => num < 10 ? "0" + num : num
    return <>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>
    </>
}