import React, {useState} from "react";
import classes from "./OnOff.module.css";

type OnOffPropsType = {
    //on: boolean
}

function OnOff(props: OnOffPropsType) {
    let [on, setOn] = useState(false) //при инициализации тру
    return (
      <div>                                                                         {/*если on тру, то класс тру, нет, то инактив*/}
          <div onClick={ () => { setOn(true) /*меняем значение on*/ }} className={`${classes.on} ${on ? classes.true : classes.inactive}`}>On</div>
          <div onClick={ () => { setOn(false) }} className={`${classes.off} ${on ? classes.inactive : classes.false}`}>Off</div>
          <div className={`${classes.round} ${on ? classes.true : classes.false}`}> </div>
      </div>
    )
}

export default OnOff;