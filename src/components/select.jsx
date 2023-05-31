import React, { Fragment } from "react";

const Select = ({onChange, sortBy})=>{

    return(
        <Fragment>
        <select onChange={onChange}>
        <option disabled>Sort by</option>
            {sortBy.map(elem=><option key={elem.value} value={elem.value}>{elem.title}</option>)}
        </select>
        </Fragment>
    )
}

export default Select;