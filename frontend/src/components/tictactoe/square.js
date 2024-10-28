
import React from "react";


const Square = (props) => {
    return(
        <button className={props.value? "btn disabled": "btn"} onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square;