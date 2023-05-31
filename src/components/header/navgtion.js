import React, { useState } from 'react';
import json from './contant.json';
import DropdownList from "./dropdownList";

function Navgtion(props) {
    const [dropdown, setDropdown] = useState(false);
    if(props.className === "dropdown"){
        return (
            <div onClick={() => setDropdown(!dropdown)} className={`${props.className}`}>
            {props.children}
            {json.filter((x) => x.divTitle === props.title).map((x) => <DropdownList  
            className={dropdown ? `${x.divTitle} visible` : `${x.divTitle} hidden`}
            classNameTwo={`${x.className}`}
            >{x.contant}</DropdownList>)}
            </div>
        );
    }else {
        return (
            <a className={props.className} href={`#${props.title}`}>
                {props.children}
            </a>
        )
    }
}
 
export default Navgtion;