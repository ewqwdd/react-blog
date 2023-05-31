import React from "react";
import classes from "./Modal.module.css"


const Modal = ({children, show, setShow})=>{

    return(
        <div onClick={e=>setShow(false)} className={classes.Modal} style={{display: show ? "block" : "none"}}>
            <div onClick={e=>e.stopPropagation()} className={classes.frame}>
                {children}
            </div>
        </div>
    )
}

export default Modal;