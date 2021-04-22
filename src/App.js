import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../src/settings/main.scss';
import * as routes from "./routes";
import {isInitialized} from "./components/Firebase/FirebaseAuth";
import Loader from "./components/Loader/Loader";
import SignInPage from "./components/SignInPage/SignInPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import DatabaseMain from "./components/DatabaseMain/DatabaseMain";
import Projects from "./components/Projects/Projects";
import ProjectsNew from "./components/ProjectsNew/ProjectsNew";
import NewParticipantPage from "./components/NewParticipantPage/NewParticipantPage";

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
                <Route exact path={routes.signIn} component={SignInPage} />
                <Route exact path={routes.signUp} component={SignUpPage} />
                <Route exact path={routes.home} component={DatabaseMain} />
                <Route exact path={routes.projects} component={Projects} />
                <Route exact path={routes.projectsNew} component={ProjectsNew} />
                <Route exact path={routes.newParticipantForm} component={NewParticipantPage} />
            </Switch>
        </Router>
    ) : <Loader />
}

export default App;
