import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
};

export const WithValue = () => {
    const [value, setValue] = useState("2")
    return (
      <Select value={value} onChange={setValue} items={

          [
              {value: "1", title: "Minsk"},
              {value: "2", title: "Moscow"},
              {value: "3", title: "Kyiv"},
          ]}/>
    )
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return (
      <Select value={value} onChange={setValue} items={

          [
              {value: "1", title: "Minsk"},
              {value: "2", title: "Moscow"},
              {value: "3", title: "Kiyv"},
          ]}/>
    )
}

