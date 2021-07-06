import React from "react";
import {withRouter} from "react-router-dom";
import DatabaseHeader from "../DatabaseHeader/DatabaseHeader";
import {getCurrentUserName} from "../Firebase/FirebaseAuth";
import {signIn} from "../../routes";
import NewParticipant from "../NewParticipant/NewParticipant";

const NewParticipantPage = ({history}) => {

    if (!getCurrentUserName()) {
        history.replace(signIn)
        return null
    }

    return (
        <section className="databaseMain">
            <DatabaseHeader />
            <NewParticipant />
        </section>
    )
}

export default withRouter(NewParticipantPage);
