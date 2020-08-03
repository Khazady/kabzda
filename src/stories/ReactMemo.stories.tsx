import React, {useState} from "react"

export default {
    title: "React.memo demo"
}

const NewMessagesCounter = (props: {count: number} ) => {
    return <div>{props.count}</div>
}

//type UsersType = {users: Array<string>} тоже самое, что в тип пропсов поставить юзерстайп
const UsersSecret = (props: { users: Array<string> }) => {
    console.log("Users drew")
    return <div>{
        props.users.map((user, index) => <div key={index}>{user}</div>)}</div>
}

const Users = React.memo(UsersSecret);
//Users контейнерная компонента, которая не будет вызывать UsersSecret, если их пропсы не изменились

export const Example1 = () => {
    const [counter, setCounter] = useState(3);
    const [users, setUsers] = useState(["Mikhail", "Mikhas", "Michael"])

    const addUser = () => {
        const newUsers = [...users, "Michel " + new Date().getTime() ] //иммутабельное изменение
        // users.push("Michel " + new Date().getTime()); мутабельное изменение массива
        setUsers(newUsers)
    }
    return <>
        <button onClick={ ()=>{setCounter(counter+1)} }>+</button>
        <button onClick={ addUser }>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
    //Users не меняется, но перерисовывается при каждом нажатии на кнопку, как и весь Example1
}