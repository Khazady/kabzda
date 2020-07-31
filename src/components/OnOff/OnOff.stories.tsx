import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {OnOff} from './OnOff';


export default {
    title: 'OnOff',
    component: OnOff,
};

const callback = action("clicked")

export const OnMode = () => <OnOff value={true} onClick={callback} />;
export const OffMode = () => <OnOff value={false} onClick={callback} />;
export const ChangeMode = () => {
    const [mode, setMode] = useState<boolean>(false)
    return <OnOff value={mode} onClick={setMode} />
};
