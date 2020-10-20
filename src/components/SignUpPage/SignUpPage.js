import React from "react";
import SignUpForm from "../SignUpForm/SignUpForm";

const SignUpPage = () => {

    return (
        <div className="main">
            <div className="modal">
                <div className="modal__signUp__bg" />
                <div className="modal__logo__container">
                    <div className="babylab__logo" />
                    <span className="decor" />
                    <h2 className="login__watermark"><strong>Data</strong>base</h2>
                </div>
                <div className="modal__form__container">
                    <h3 className="modal__form__title">Zarejestruj się</h3>
                    <SignUpForm />
                </div>
            </div>
        </div>
    )
}

export default SignUpPage

