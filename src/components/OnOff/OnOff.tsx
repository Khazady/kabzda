import React from "react";
import classes from "./OnOff.module.css";

type OnOffPropsType = {
    value: boolean
    onClick: (value: boolean) => void
}

export function OnOff(props: OnOffPropsType) {
    return (
      <div>                                                                         {/*если on тру, то класс тру, нет, то инактив*/}
          <div onClick={ () => { props.onClick(true) /*меняем значение on*/ }} className={`${classes.on} ${props.value ? classes.true : classes.inactive}`}>On</div>
          <div onClick={ () => { props.onClick(false) }} className={`${classes.off} ${props.value ? classes.inactive : classes.false}`}>Off</div>
          <div className={`${classes.round} ${props.value ? classes.true : classes.false}`}> </div>
      </div>
    )
}