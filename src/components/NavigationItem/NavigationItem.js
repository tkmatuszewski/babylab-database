import React from "react";
import {Link} from "react-router-dom";

const NavigationItem = ({name, value, closeNav}) => {

    return (
        <li className="navigationItem"
            id={name}>
            <Link to={value}
                  onClick={() => {
                      closeNav(false)
                  }}>
                {name}
            </Link>
        </li>
    )
}

export default NavigationItem;
