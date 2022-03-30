import React from "react";

function Button(props) {
    return (
        <>
            <div className="NavB">
                <a href={props.link} target="_blank">
                    <button className="NavButton">{props.name}</button>
                </a>
            </div>
        </>
    );
}
export default Button;