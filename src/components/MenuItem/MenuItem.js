import React from "react";

const MenuItem = ({handleMenuOption, name}) => {
    return <li className="database__main__control__item"
               id={name}
               onClick={()=> handleMenuOption(name)}
    >{name}
    </li>
}

export default MenuItem
