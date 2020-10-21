import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {AuthProvider} from "./components/Firebase/FirebaseAuth";
import PrivateRoute from "./components/PrivateRoute";
import '../src/settings/main.scss';
import LoginPage from "./components/LoginPage/LoginPage";
import Database from "./components/Database/Database";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className={"App"}>
                    <PrivateRoute exact path={"/"} component={Database}/>
                    <Route exact path={"/login"} component={LoginPage}/>
                    {/*<Route exact path={"/register"} component={RegistrationPage}/>*/}
                </div>
            </BrowserRouter>
        </AuthProvider>
    )
}


export default App;
