import React, {useState} from "react";
import AddNewForm from "../AddNewForm/AddNewForm";
import Projects from "../Projects/Projects";
import Other1 from "../Other1/Other1";
import Other2 from "../Other2/Other2";
import DatabaseData from "../DatabaseData/DatabaseData";
import MenuItem from "../MenuItem/MenuItem";

const classNames = require('classnames');


const DatabaseMain = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [showOption, setShowOption] = useState("Home")

    const handleClickHamburger = (state) => {
        return setShowMenu(!state);
    }

    const handleMenuOption = (option) => {
        setShowMenu(false)
        setShowOption(option)
    }

    const handleCloseModal = () => {
        setShowOption("Home")
    };

    const hamburger = classNames({
        "database__main__control__hamburger": !showMenu,
        "database__main__control__hamburger__active": showMenu
    })
    const menu = classNames({
        "database__main__control__nav": !showMenu,
        "database__main__control__nav__active": showMenu
    })
    return (
        <section className="database__main">
            <button className={hamburger}
                    onClick={() => handleClickHamburger(showMenu)} />
            <ul className={menu}>
                <div className="database__main__control__container">
                    <MenuItem name={"Home"}
                              handleMenuOption={handleMenuOption} />
                    <MenuItem name={"Nowy badany"}
                              handleMenuOption={handleMenuOption} />
                    <MenuItem name={"Projekty"}
                              handleMenuOption={handleMenuOption} />
                    <MenuItem name={"Inne 1"}
                              handleMenuOption={handleMenuOption} />
                    <MenuItem name={"Inne 2"}
                              handleMenuOption={handleMenuOption} />
                </div>
            </ul>
            {showOption === 'Projekty' ?
                <Projects handleCloseModal={handleCloseModal} /> : null}
            <div className="database__main__container">
                {showOption === 'Home' ? <DatabaseData /> : null}
                {showOption === 'Nowy badany' ?
                    <AddNewForm handleCloseModal={handleCloseModal} /> : null}
                {showOption === 'Inne 1' ? <Other1 handleCloseModal={handleCloseModal} /> : null}
                {showOption === 'Inne 2' ? <Other2 handleCloseModal={handleCloseModal} /> : null}
            </div>
        </section>
    )
}


export default DatabaseMain
