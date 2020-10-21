import React from "react";
import {signOut} from "../Firebase/FirebaseAuth";
import {home, newParticipantForm, projects} from "../../routes";
import {Link} from "react-router-dom";

const DatabaseHeader = ({history}) => {

    const logout = async () => {
        await signOut()
        history.push(home)
    }

    return (
        <header className="database__header">
            <div className="database__header__container">
                <Link to={home}>
                    <h2 className="database__logo"><strong>Data</strong>base</h2>
                </Link>
                <div className="database__header__menu">
                    <div className="database__header__item">
                        <Link to={home}>
                            Home
                        </Link>
                    </div>
                    <div className="database__header__item">
                        <Link to={projects}>
                            Projekty
                        </Link>
                    </div>
                    <div className="database__header__item">
                        <Link to={newParticipantForm}>
                            Nowe dziecko
                        </Link>
                    </div>
                    <button className="database__header__item"
                            onClick={() => logout()}>
                        Wyloguj
                    </button>
                </div>
            </div>
        </header>
    )
}

export default DatabaseHeader
