import React, { Fragment } from "react";


const PictureAndText = ({img, content, reverse})=>{

    return(
        <div className="picture-text">
            {reverse ? 
                <Fragment>{content} <img src={img} /></Fragment>:
                <Fragment><img src={img} />{content} </Fragment>
            }
        </div>
    )
}

export default PictureAndText;