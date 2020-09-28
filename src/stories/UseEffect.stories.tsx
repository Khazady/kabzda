import React, {useState, useMemo, useEffect} from "react"

export default {
    title: "UseEffect demo"
}


export const SimpleExample = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    console.log("Simple Example rendered");

    useEffect( () => {
        console.log("useEffect every time")
        //грязные вещи, которые запрещены в компонентах и редьюсерах, создают мусор во время своей жизнедеятельности, поэтому нужен useEffect
        //axios.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementById
        //document.title = "User"
      })

    useEffect( () => {
        console.log("useEffect only 1 time after render page(componentDidMount)")
      }, [])

    useEffect( () => {
        console.log("useEffect 1st render and after counter changes")
      }, [counter])

    return <>
        <button onClick={ ()=>{setCounter(state => state + 1)} }>+</button>
        <button onClick={ ()=>{setFake(state => state + 1)} }>+</button>
        {fake}
        Hello, {counter}
    </>
}

export const SetTimeOutExample = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    console.log("SetTimeOut rendered");

    useEffect( () => {

        setTimeout( () => {
            console.log("setTimeout");
            document.title = counter.toString()
        }, 1000)
      }, [counter])

    return <>
        <button onClick={ ()=>{setCounter(state => state + 1)} }>+</button>
        <button onClick={ ()=>{setFake(state => state + 1)} }>+</button>
        {fake}
        Hello, {counter}
    </>
}

export const SetInterval = () => {
    const [counter, setCounter] = useState(1);

    console.log("SetInterval rendered");

    useEffect( () => {

        setInterval( () => {
            console.log("tick" + 1)
            setCounter( (state) => state + 1)
        }, 1000)
    }, [])

    return <>
        Hello,counter: {counter}
    </>
}