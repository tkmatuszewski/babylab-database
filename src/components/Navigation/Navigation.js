import React, {useState} from "react";
import {example2, home, newParticipantForm, projects, stats} from "../../routes";
import NavigationItem from "../NavigationItem/NavigationItem";

const classNames = require('classnames');

const Navigation = () => {

    const [showMenu, setShowMenu] = useState(false)

    const handleClickHamburger = () => {
        return setShowMenu(!showMenu);
    }

    const navigation = classNames("navigation", {
        "active": showMenu
    })
    const hamburger = classNames("database__hamburger", {
        "active": showMenu
    })
    const menu = classNames(
        "navigation__list", {
            "active": showMenu
        })
    const sidebar = classNames(
        "navigation__container", {
            "active": showMenu
        })
    const page = classNames(
        "database__page", {
            "active": showMenu
        }
    )

    return (
        <div className={navigation}>
            <button className={hamburger}
                    onClick={handleClickHamburger}>
                <span />
                <span />
                <span />
            </button>
            <div className={sidebar}>
                <div className="navigationMsg">
                    <h3 className="navigationMsg__title">Menu</h3>
                </div>
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
                    <NavigationItem name={"Statystyki"}
                                    value={stats}
                                    closeNav={setShowMenu}
                    />
                </nav>
            </div>
        </div>
    )
}

export default Navigation
