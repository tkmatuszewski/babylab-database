import React, {useState} from "react";
import {example1, example2, home, newParticipantForm, projects} from "../../routes";
import NavigationItem from "../NavigationItem/NavigationItem";

const classNames = require('classnames');

const Navigation = ({children}) => {

    const [showMenu, setShowMenu] = useState(false)

    const handleClickHamburger = (state) => {
        return setShowMenu(!state);
    }

    const hamburger = classNames("database__hamburger", {
        "active": showMenu
    })
    const menu = classNames(
        "databaseMenu__nav", {
            "active": showMenu
        })
    const page = classNames(
        "database__page", {
            "active": showMenu
        }
    )

    return (
        <div className="database__container">
            <div className={hamburger}
                 onClick={() => handleClickHamburger(showMenu)}>
                <span />
                <span />
                <span />
            </div>
            <div className="database__nav__container">
                <nav className={menu}>
                        <NavigationItem name={"Home"}
                                        value={home}
                                        closeNav={setShowMenu}
                        />
                        <NavigationItem name={"Nowy badany"}
                                        value={newParticipantForm}
                                        closeNav={setShowMenu}
                        />
                        <NavigationItem name={"Projekty"}
                                        value={projects}
                                        closeNav={setShowMenu}
                        />
                        <NavigationItem name={"Inne 1"}
                                        value={example1}
                                        closeNav={setShowMenu}
                        />
                        <NavigationItem name={"Inne 2"}
                                        value={example2}
                                        closeNav={setShowMenu}
                        />
                </nav>
            </div>
            <div className={page}>
                {children}
            </div>
        </div>
    )
}

export default Navigation
