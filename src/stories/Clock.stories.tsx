import React, {useState, useEffect} from "react"

export default {
    title: "My clock demo"
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
    let seconds = counter.getSeconds();

    return <>
        {hours} : {minutes} : {seconds}
    </>
}