import React, {useState} from "react";
import {db} from "../Firebase/FirebaseFirestore";

const classNames = require('classnames');

const DataRowMenu = ({dataId}) => {

    const [menuClicked, setMenuClicked] = useState(false)

    const handleMenu = () => {
        setMenuClicked(!menuClicked)
    }

    const handleDelete = dataId => {
        db.collection('childrenDatabase').doc(dataId).delete().then("Delete successful".log).catch("Delete failure".log)
    }

    const menuActive = classNames({
        "dataRowMenu__icon" : !menuClicked,
        "menuActive" : menuClicked
    })
    return(
        <div className="dataRowMenu"
             onClick={() => handleMenu()}>
            <div className={menuActive}>
                <span className="dataRowMenu__icon__element" />
                <span className="dataRowMenu__icon__element" />
                <span className="dataRowMenu__icon__element" />
            </div>
            {menuClicked ? <ul className="dataRowMenu__options">
                <li>
                    <span className="dataRowMenu__name">Edytuj</span>
                </li>
                <li onClick={() => handleDelete(dataId)}>
                    <span className="dataRowMenu__name">Usuń</span>
                </li>
            </ul> : null}
        </div>
    )
}

export default DataRowMenu
