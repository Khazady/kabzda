import React, {useState, useMemo, useEffect} from "react"

export default {
    title: "Clock demo"
}

export const Clock = () => {
    const [counter, setCounter] = useState(new Date());

    useEffect( () => {

        setInterval( () => {
            setCounter(new Date());
        }, 1000)
    }, [])

    let hours = counter.getHours();
    let minutes = counter.getMinutes();
    let seconds = counter.getSSeconds();

    return <>
        {hours} : {minutes} : {seconds}
    </>
}