import React, {useMemo, useState, useCallback} from "react";
import {Select} from "../components/Select/Select";

export default {
    title: "useMemo"
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random()
            }
            //operations upside imitate load
            tempResultA = tempResultA * i;
        }
        return tempResultA
    }, [a]) //если a не поменялось, то не нужно перезапускать коллбек c циклами

    for (let i = 1; i <= a; i++) {
        resultB = resultB * i;
    }
    //Number и + тоже самое
    return <>
        <input value={a} onChange={event => setA(Number(event.currentTarget.value))}/>
        <input value={b} onChange={event => setB(+event.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b : {resultB}
        </div>
    </>
}


//type UsersType = {users: Array<string>} тоже самое, что в тип пропсов поставить юзерстайп
const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Users secret drew")
    return <div>{
        props.users.map((user, index) => <div key={index}>{user}</div>)}</div>
}

const Users = React.memo(UsersSecret);
//Users контейнерная компонента, которая не будет вызывать UsersSecret, если их пропсы не изменились

export const HelpsReactMemo = () => {
    const [counter, setCounter] = useState(3);
    const [users, setUsers] = useState(["Mikhail", "Mikhas", "Michael"])

    const addUser = () => {
        const newUsers = [...users, "Michel " + new Date().getTime()] //иммутабельное изменение
        // users.push("Michel " + new Date().getTime()); мутабельное изменение массива
        setUsers(newUsers)
    }

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("c") > -1)
    }, [users]);

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
    //Если Users не меняется, то компонента не перерисовывается при каждом нажатии на кнопку, как и весь пример
}

export const SelectUseMemoFilter = () => {
    const [value, setValue] = useState(null);
    const items = [
        {value: "1", title: "Mensk"},
        {value: "1", title: "Polatsk"},
        {value: "1", title: "Hlybokae"},
        {value: "2", title: "Moscow"},
        {value: "2", title: "Bryansk"},
        {value: "2", title: "Smolensk"},
        {value: "3", title: "Kiyv"},
        {value: "4", title: "Warsaw"},
        {value: "5", title: "Vilnius"},
        {value: "6", title: "Riga"},
    ]

    const newArrayFilterM = useMemo(() => {
        return [...items.filter(cities => cities.title.toLowerCase().indexOf("m") < -1)]
    }, [items]);

    const newArrayFilterValue1 = useMemo(() => {
        return [...items.filter(cities => cities.value === "1")]
    }, [items]);

    const newArrayFilterValue2 = useMemo(() => {
        return [...items.filter(cities => cities.value === "2")]
    }, [items]);

    return (
      <>
          <Select value={value} onChange={setValue} items={newArrayFilterM}/>
          <Select value={value} onChange={setValue} items={newArrayFilterValue1}/>
          <Select value={value} onChange={setValue} items={newArrayFilterValue2}/>
      </>
    )
}

export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(3);
    const [books, setBooks] = useState(["React", "JS", "HTML", "CSS"])


    //закешировали результат функции при первой отрисовки
    const memoizedAddBook = useMemo(() => {
        return () => {
            const newBooks = [...books, "Angular " + new Date().getTime()] //иммутабельное изменение
            setBooks(newBooks)
        }
    }, [books])

    //аналог с useCallback
    const memoizedAddBook2 = useCallback(() => {
        const newBooks = [...books, "Angular " + new Date().getTime()] //иммутабельное изменение
        setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
        <Books addBook={memoizedAddBook}/>
    </>
    //Если Users не меняется, то компонента не перерисовывается при каждом нажатии на кнопку, как и весь пример
}


type BookSecretPropsType = {
    addBook: () => void
}
const BooksSecret = (props: BookSecretPropsType) => {
    console.log("Books secret drew")
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Books = React.memo(BooksSecret);