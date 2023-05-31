import React from "react";
import DropdownItems from "./dropdownItems";

function DropdownList(props) {
    if(props.classNameTwo === "dropdown"){   
    return(
        <div id="ul-continer">
            <ul className={props.className}>
                {props.children.map((x) => <DropdownItems id={x.id}>{`${x.title}`}</DropdownItems>)}
            </ul>
        </div>
    );
    } else { return <ul style={{display: "none"}}></ul>}
}

export default DropdownList;

