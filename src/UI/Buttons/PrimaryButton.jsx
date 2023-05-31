import React from "react";
import classes from "./PrimaryButton.module.css"

const PrimaryButton = ({children, ...props})=>{
    return <button {...props} className={classes.btn}>{children}</button>
}

export default PrimaryButton