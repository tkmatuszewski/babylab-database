import React from "react";
import {Link, withRouter} from "react-router-dom";

const NavigationItem = ({name, value, history, closeNav}) => {

    const clickHandler = (value) => {
        closeNav(false)
        return  history.replace(value)
    }

    return (
        <li className="navigationItem"
            id={name}>
            <Link to={value} onClick={ ()=> {clickHandler(value)}}>
                {name}
            </Link>
        </li>
    )
}

export default withRouter(NavigationItem);
