import React from "react";
import {withRouter} from "react-router-dom";
import DatabaseHeader from "../DatabaseHeader/DatabaseHeader";
import Navigation from "../Navigation/Navigation";
import {getCurrentUserName} from "../Firebase/FirebaseAuth";
import {signIn} from "../../routes";
import DatabaseData from "../DatabaseData/DatabaseData";

const DatabaseMain = ({history}) => {

    if (!getCurrentUserName()) {
        history.replace(signIn)
        return null
    }

    return (
        <section className="databaseMain">
            <DatabaseHeader />
            <Navigation>
                <DatabaseData />
            </Navigation>
        </section>
    )
}

export default withRouter(DatabaseMain);
