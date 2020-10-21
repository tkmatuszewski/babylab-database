import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../src/settings/main.scss';
import SignInPage from "./components/SignInPage/SignInPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import DatabaseMain from "./components/DatabaseMain/DatabaseMain";
import * as routes from "./routes";
import NewParticipantPage from "./components/NewParticipantPage/NewParticipantPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import {isInitialized} from "./components/Firebase/FirebaseAuth";
import Loader from "./components/Loader/Loader";
import {projectsAddNew} from "./routes";

const App = () => {

    const [firebaseInitialized, setFirebaseInitialized] = useState(false)

    useEffect(() => {
        isInitialized()
            .then(val => setFirebaseInitialized(val)
            )
    })

    return (firebaseInitialized !== false) ? (
        <Router>
            <Switch>
                <Route path={routes.signIn} component={SignInPage} />
                <Route path={routes.signUp} component={SignUpPage} />
                <Route exact path={routes.home} component={DatabaseMain} />
                <Route path={routes.newParticipantForm} component={NewParticipantPage} />
                <Route path={routes.projects} component={ProjectsPage} />
                <Route path={routes.projectsAddNew} component={projectsAddNew} />
            </Switch>
        </Router>
    ) : <Loader />
}

export default App;
