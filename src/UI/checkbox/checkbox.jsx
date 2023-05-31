import React, { Fragment } from "react";
import classes from "./checkbox.module.css"

const CheckBox = ({checks, callback})=>{


    return(
        <div className={classes.checkbox}>
            {checks.map(elem=><div className={classes.check} key={elem} ><input id={elem}  type="checkbox" onChange={callback} value={elem} />
            <label htmlFor={elem}>{elem}</label></div>)}
            
        </div>
    )
}

export default CheckBox;