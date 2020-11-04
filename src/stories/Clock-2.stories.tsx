import React from "react"
import {Clock} from "../components/Clock/Clock"

export default {
    title: "Clock lesson",
    component: Clock
}

export const DigitalExample = () => {
    return <Clock mode={"digital"}/>
}

export const AnalogExample = () => {
    return <Clock mode={"analog"}/>
}