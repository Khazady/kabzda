import React from "react";


type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    return (
      <div>
          <AccordionTitle title={props.titleValue}/>
          {!props.collapsed && <AccordionBody/>} {/*Если не коллапсед, то покажи аккбоди */}
      </div>
    )
}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (<div>
        <h3>{props.title}</h3>
    </div>)
}


function AccordionBody() {
    return (
      <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
      </ul>
    )
}


export default Accordion;