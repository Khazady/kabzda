import React, {useState} from "react";


type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true)

    return (
      <div>
          <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} value={collapsed}/>
          {!collapsed && <AccordionBody/>}
      </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    value: boolean
    setCollapsed: (value: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (<div>
        <h3 onClick={ () => {props.setCollapsed(!props.value)}}>{props.title}</h3>
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