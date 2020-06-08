import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Raiting/Rainting";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRaiting/UncontrolledRainting";


function App() {
    return (
      <div className="App">
          <Accordion titleValue={"Menu"} collapsed={true}/>
          <Accordion titleValue={"Users"} collapsed={false}/>
          <Rating value={0}/>
          <OnOff/>
          <OnOff/>
          <UncontrolledAccordion titleValue={"Uncontrolled"}/>
          <UncontrolledRating/>
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
