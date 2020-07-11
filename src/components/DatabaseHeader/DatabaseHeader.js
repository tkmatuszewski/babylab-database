import React from "react";
import {app} from "../Firebase/Firebase";

function DatabaseHeader() {
    return (
        <header className="database__header">
            <div className="database__container">
                <h2 className="database__logo"><strong>Data</strong>base</h2>
                <form className="database__search">
                    <label className="database__search__label">
                        <span className="database__search__icon"/>
                        <input className="database__search__input" type="text" placeholder="Szukaj"/>
                    </label>
                </form>
                <button className="database__search__filter"/>
                <button className="database__logout" onClick= {()=> {
                app.auth().signOut()}}>
                Wyloguj</button>
        </div>
        </header>
    )
}

export default DatabaseHeader
