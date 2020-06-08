import React, {useState} from "react";


type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true)

    return (
      <div>
          <AccordionTitle title={props.titleValue}/> <button onClick={ () => {collapsed ? setCollapsed(false) : setCollapsed(true)} }>TOGGLE</button>
          {!collapsed && <AccordionBody/>} {/*Если не коллапсед, то покажи аккбоди */}
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


export default UncontrolledAccordion;