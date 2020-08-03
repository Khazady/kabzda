import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onClick: (collapsed: boolean) => void
    items: Array<ItemType>
    onDoubleClick: (value: any) => void
}

export function AccordionSecret(props: AccordionPropsType) {
    return (
      <div>
          <AccordionTitle title={props.titleValue} collapsed={props.collapsed} onClick={() => props.onClick(!props.collapsed)}/>
          {!props.collapsed && <AccordionBody items={props.items} onDoubleClick={props.onDoubleClick}/>}
      </div>
    )
}

export const Accordion = React.memo(AccordionSecret);


type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (<div>
        <h3 onClick={ () => {props.onClick(props.collapsed)}}>{props.title}</h3>
    </div>)
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onDoubleClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
      <ul>
          {props.items.map((item, index) => <li key={index} onDoubleClick={()=>{props.onDoubleClick(item.value)}}>{item.title}</li>)}
      </ul>
    )
}