import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";


type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    //let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
      <div>
          {/*<AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} value={collapsed}/>*/}
          <AccordionTitle title={props.titleValue} onClick={ () => dispatch({type: TOGGLE_COLLAPSED }) } />
          {!state.collapsed && <AccordionBody/>}
      </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (<div>
        <h3 onClick={ () => { props.onClick() } }>{props.title}</h3>
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