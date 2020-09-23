import React, {useState, useMemo} from "react"

export default {
    title: "UseState demo"
}

function generateData() {
    //difficult counting
    console.log("generate Data")
    return 713567163
}

export const Example1 = () => {
    console.log("Example 1 rendered");

    //const initValue = useMemo(generateData, []);
    const [counter, setCounter] = useState( generateData );
    //когда в useState передают функцию, он фиксирует результат функции как стартовой значение и больше трогать не будет (вместо useMemo выше)

    return <>
        <button onClick={ ()=>{setCounter(state => state + 1)} }>+</button>
        {counter}
    </>
}