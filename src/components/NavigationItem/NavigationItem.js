import React from "react";

const NavigationItem = ({handleMenuOption, name}) => {
    return <li className="database__main__control__item"
               id={name}
               onClick={()=> handleMenuOption(name)}
    >{name}
    </li>
}

export default NavigationItem
