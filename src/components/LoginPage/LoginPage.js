import React from "react";

function LoginPage() {

    return (
        <div className="main__container">
            <div className="login__modal__container">
                <form className="login__form">
                    <label className="login__form__login">
                        <span className="login__icon">Icon</span>
                        <input type="text" placeholder="Login" required/>
                    </label>
                    <label className="login__form__password">
                        <span className="login__icon">Icon</span>
                        <input type="password" placeholder="Hasło" required/>
                    </label>
                    <button type="submit">Zaloguj</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;
