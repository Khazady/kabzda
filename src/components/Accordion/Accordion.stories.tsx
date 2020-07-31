import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Accordion} from './Accordion';



export default {
    title: 'Accordion',
    component: Accordion,
};

const usersState = [{title: "pupa", value: 1},
    {title: "dupa", value: 2},
    {title: "zhupa", value: 3}]

const callback = action("accordion mode change event fired");
const onDoubleClickCallback = action("some item was clicked")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onClick={callback} items={[]} onDoubleClick={onDoubleClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onClick={callback} items={usersState} onDoubleClick={onDoubleClickCallback}/>
export const ChangeMode = () => {
    const [mode, setMode] = useState<boolean>(false)
    return <Accordion titleValue={"Change"} collapsed={mode} onClick={setMode} items={usersState} onDoubleClick={onDoubleClickCallback}/>
};
