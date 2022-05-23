import React from "react";

function Button(props){

    return(
        <button
            id={props.id}
            className={props.markedDown ? 'markedDown' : ''}
            onClick={props.onClick}

        >
            {props.content}
        </button>
    )
}


export default Button;