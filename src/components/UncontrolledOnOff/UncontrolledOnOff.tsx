import React, {useState} from "react";
import classes from "./UncontrolledOnOff.module.css";

type UncontrolledOnOffPropsType = {
    onChange: (on: boolean) => void
}

export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {
    let [on, setOn] = useState(false) //при инициализации тру

    const onClicked = () => { setOn(true);/*меняем значение on*/
                              props.onChange(true) } /*у наружного меняем значение тоже(для отображение надписи тру/фолс)*/


    const offClicked = () => { setOn(false);
        props.onChange(true)}

    return (
      <div>
          <div onClick={ onClicked }
               className={`${classes.on} ${on ? classes.true : classes.inactive}`}>On</div>
                {/*если on тру, то класс тру, нет, то инактив*/}
          <div onClick={ offClicked }
               className={`${classes.off} ${on ? classes.inactive : classes.false}`}>Off</div>
          <div className={`${classes.round} ${on ? classes.true : classes.false}`}> </div>
      </div>
    )
}