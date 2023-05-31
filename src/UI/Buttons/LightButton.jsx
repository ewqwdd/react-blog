import React from "react";
import classes from "./LightButton.module.css"

const LightButton = ({children, ...props})=>{
    return (<button {...props} className={classes.btn}>{children}</button>)
}

export default LightButton