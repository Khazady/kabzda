import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {UncontrolledOnOff} from './UncontrolledOnOff';


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};

export const OnMode = () => <UncontrolledOnOff onChange={x=>x}/>;

