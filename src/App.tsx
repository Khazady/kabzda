import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Raiting/Rainting";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType> (0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    let [onOffValue, setOnOffValue] = useState<boolean>(true)



    return (
      <div className="App">
          <Accordion titleValue={"Users"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed} items={[{title: "a", value: 1}]} onDoubleClick={()=>{}}/>
          <Rating value={ratingValue} setRatingValueParent={setRatingValue}/>
          <UncontrolledOnOff onChange={setOnOffValue}/>
          {onOffValue.toString()}
          <UncontrolledAccordion titleValue={"Uncontrolled"}/>
          <UncontrolledRating/>
          <OnOff value={onOffValue} onClick={setOnOffValue}/>
      </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
