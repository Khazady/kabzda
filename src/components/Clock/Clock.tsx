import React, {useEffect, useState} from "react";
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";


export const Clock: React.FC<ClockPropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    //after component rendered, func dying, but side eff continue to live
    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log("TICK")
            setDate(new Date())
        }, 1000)
        //after comp died, do that
        return () => clearInterval(intervalID)
    }, [])

    let view;
    switch (props.mode) {
        case "digital":
            view = <DigitalClockView date={date}/>
            break;
        case "analog":
        default:
            view = <AnalogClockView date={date}/>
    }
    return <>
        {view}
    </>
}


// types

type ClockPropsType = {
    mode?: "digital" | "analog"
}

export type ClockViewPropsType = {
    date: Date
}
