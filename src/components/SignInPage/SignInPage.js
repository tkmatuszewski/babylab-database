import React, {useState} from "react";
import {Link, withRouter} from "react-router-dom";
import {signUp} from "../../routes";
import {signIn} from "../Firebase/FirebaseAuth";

const SignInPage = ({history}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const handleLogin = async event => {
        event.preventDefault();
        try {
            await signIn(email, password)
            history.replace("/")
                .then(() => {
                    console.log("logged in")
                })
        } catch (error) {
            switch (error.code) {
                case "auth/invalid-email":
                    setEmailError(error.message)
                    break
                case "auth/user-not-found":
                case "auth/user-disabled":
                case "auth/wrong-password":
                    setPasswordError(error.message)
                    break
            }
        }
    }

// const initialState = {
//     setEmail("");
//     setpassword(""),
//     setErrorMsg(null),
// };

    // const {currentUser} = useContext(userContext);
    //
    // if (currentUser) {
    //     return <Redirect to="/" />
    // }

    return (
        <div className="signIn__main">
            <div className="signIn__modal">
                <div className="signIn__modal__image" />
                <div className="signIn__modal__logo__container">
                    <div className="babylab__logo" />
                    <span className="decor" />
                    <h2 className="signIn__watermark"><strong>Data</strong>base</h2>
                </div>
                <div className="signIn__modal__form__container">
                    <h3 className="signIn__modal__form__title">Zaloguj się</h3>
                    <form className="signIn__form" onSubmit={handleLogin}>
                        <span className="signIn__error">{emailError}</span>
                        <label className="signIn__form__id">
                            <span className="signIn__form__email__icon" />
                            <input name="email"
                                   id="email"
                                   type="email"
                                   value={email}
                                   placeholder="Email"
                                   autoFocus
                                   autoComplete="off"
                                   required
                                   onChange={e => {
                                       setEmail(e.target.value);
                                   }}>
                            </input>
                        </label>
                        <label className="signIn__form__password">
                            <span className="signIn__form__password__icon" />
                            <input name="password"
                                   type="password"
                                   value={password}
                                   placeholder="Hasło"
                                   autoComplete="off"
                                   required
                                   onChange={e => {
                                       setPassword(e.target.value)
                                   }} />
                            <span>{passwordError}</span>
                        </label>
                        <p className="signIn__form__signUp">Jeszcze nie masz konta?
                            <Link to={signUp}>Zarejestruj się</Link>
                        </p>
                        <button className="signIn__submit" type="submit">Zaloguj</button>
                    </form>
                </div>
            </div>
            {/*<aside className="copyright">&copy; tkmatuszewski 2020</aside>*/}
        </div>
    )
}

export default withRouter(SignInPage);
