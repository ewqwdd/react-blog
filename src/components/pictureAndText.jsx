import React, { Fragment } from "react";


const PictureAndText = ({img, content, reverse})=>{

    return(
        <div className={reverse ? "picture-text reverse" : "picture-text"}>
            {reverse ? 
                <Fragment><div className="text-block">{content}</div> <img src={img} /></Fragment>:
                <Fragment><img src={img} /><div className="text-block">{content}</div> </Fragment>
            }
        </div>
    )
}

export default PictureAndText;