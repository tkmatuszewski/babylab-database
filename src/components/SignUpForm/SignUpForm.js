import React, {useState} from "react";
import {Link, withRouter} from "react-router-dom";
import {signIn} from "../../routes";
import {createNewUser} from "../Firebase/FirebaseAuth";
import firebaseApp from "../Firebase/Firebase";

const SignUpForm = ({history}) => {

    const [userName, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRep, setPasswordRep] = useState("")
    const [errorMsg, setErrorMsg] = useState(null)

    const handleSubmit = async () => {
        try {
            await firebaseApp
            createNewUser(userName, email, password).then(
                history.replace(signIn)
            )
        } catch (error) {
            setErrorMsg(error)
        }
    };

    // const reset = () => {
    //     setUsername("")
    //     setLogin("")
    //     setPassword("")
    //     setPasswordRep("")
    //     setErrorMsg(null)
    // }

    const isInvalid = password !== passwordRep

    return (
        <form className="signUp_main"
              onSubmit={handleSubmit}>
            <span className="signUp__error">{errorMsg}</span>
            <label htmlFor="" className="signUp__form__id">
                <span className="login__form__id__icon" />
                <input name="userName"
                       type="text"
                       value={userName}
                       onChange={event => setUsername(event.target.value)}
                       autoFocus
                       required
                       placeholder="Nazwa użytkownika" />
            </label>
            <label htmlFor="" className="signUp__form__email">
                <span className="login__form__email__icon" />
                <input name="email"
                       type="email"
                       value={email}
                       onChange={event => setEmail(event.target.value)}
                       required
                       placeholder="Email" />
            </label>
            <label htmlFor="" className="signUp__form__password">
                <span className="login__form__password__icon" />
                <input name="password"
                       type="password"
                       value={password}
                       onChange={event => setPassword(event.target.value)}
                       required
                       placeholder="Hasło" />
            </label>
            <label htmlFor="" className="signUp__form__password__repeat">
                <span className="login__form__password__icon" />
                <input name="passwordRep"
                       type="password"
                       value={passwordRep}
                       onChange={event => setPasswordRep(event.target.value)}
                       required
                       placeholder="Powtórz hasło" />
            </label>
            <p className="signUp__form__link">Masz już swoje konto?
                <Link to={signIn}>Zaloguj się</Link>
            </p>
            <button className="signUp__submit"
                    type="submit"
                    disabled={isInvalid}>Zarejestruj
            </button>
        </form>
    )
}

export default withRouter(SignUpForm)
