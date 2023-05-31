import React from "react";
import { Link } from "react-router-dom";

function DropdownItems(props) {
    return(
        <li className="li">
            <Link to={props.id} preventScrollReset={true} relative="path">{props.children}</Link>
        </li>
    );
}

export default DropdownItems;