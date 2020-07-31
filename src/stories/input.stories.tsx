import React, {useState, useRef} from 'react';
import { action } from '@storybook/addon-actions';
import {OnOff} from "../components/OnOff/OnOff";


export default {
  title: 'input',
  component: OnOff
};

//сетаем в локал стейт каррент таргет вэлуе и отображаем велуе локал стейта
export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("")
  return <><input value={value} onChange={ e => setValue(e.currentTarget.value) }/> - {value}</>
}

export const GetValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("");
  //ссылка для привязки к инпуту, так как мы не можем залесть из онклика баттона в валуе инпута
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }

  return <><input ref={inputRef}/><button onClick={save}>save</button>- actual value: {value}</>
}

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState("")
  return <input value={parentValue} onChange={(e)=>{setParentValue(e.currentTarget.value)}}/>
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(false)
  return <input type="checkbox" checked={parentValue} onChange={(e)=> {setParentValue(e.currentTarget.checked)}}/>
}

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>("0")
  return <select value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)}>
    <option value={"0"}>none</option>
    <option value={"1"}>Minsk</option>
    <option value={"2"}>Kyiv</option>
    <option value={"3"}>Moscow</option>
  </select>
}



