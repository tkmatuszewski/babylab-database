import React from "react";

function LoginPage() {

    return (
        <div className="main">
            <div className="main__container">
                <div className="modal">
                    <aside className="modal__left__side">
                        <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" viewBox="0 0 211.4 297.4">
                            <pattern id="bgImg" patternUnits="userSpaceOnUse" width="1000" height="1000">
                                <image
                                    href="https://images.pexels.com/photos/3933250/pexels-photo-3933250.jpeg?cs=srgb&dl=dziewczyna-uroczy-oczy-granie-3933250.jpg&fm=jpg"
                                    // x="0" y="0" width="100%"
                                    // height="100%"
                                />
                            </pattern>
                            <path
                                d="M0.6 275.5V0.1L108.3 0.2c7.9 0.1 10.7 24.6 31.7 40.2 12.6 9.3 22.2 33.6 31.1 38 33.2 16.4 38.8 33.1 32.3 55.2-13.7 46.4-42.6 4.8-50 55.2-2.7 18.8-46.7 31.7-60.6 29.7-10.4-1.5-16 34.6-42 33.3-20.3-1-38.4 28.6-50.3 23.7z"
                                fill="url(#bgImg)" height="100%" width="100%"/>
                        </svg>
                        {/*<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="120%" viewBox="0 0 288.9 210.6">*/}
                        {/*    <pattern id="bgImg" patternUnits="userSpaceOnUse" width="1000" height="1000">*/}
                        {/*        <image*/}
                        {/*            href="https://images.pexels.com/photos/3933250/pexels-photo-3933250.jpeg?cs=srgb&dl=dziewczyna-uroczy-oczy-granie-3933250.jpg&fm=jpg"*/}
                        {/*            x="0" y="0" width="100%"*/}
                        {/*            height="100%"/>*/}
                        {/*    </pattern>*/}
                        {/*    <path*/}
                        {/*        d="M0 0C56.4 24.2 96.3 18.5 135.4 6.9c44.6-12.2 96.6 9.4 125.5 32.6 16.2 13-10.4 34.2 15.5 48.3 23.4 15.7 11.5 40.9-12.3 57.7-22.9 16.1-83-0.9-107.8 12.3-37.8 18.7-79.2 0.8-94.5 20.1-23.6 34.5-61.1 32.6-61.1 32.6z"*/}
                        {/*        fill="url(#bgImg)" height="100%" width="100%"/>*/}
                        {/*</svg>*/}
                    </aside>
                    <div className="modal__right__side">
                        <div className="modal__right__side__header__container">
                            <div className="babylab__logo"/>
                            <span className="decor"/>
                            <h2 className="login__form__watermark"><strong>Data</strong>base</h2>
                        </div>
                        <form className="login__form">
                            <label className="login__form__id">
                                <span className="login__form__id__icon"/>
                                <input type="text" placeholder="Login" required>
                                </input>
                            </label>
                            <label className="login__form__password">
                                <span className="login__form__password__icon"/>
                                <input type="password" placeholder="Hasło" required/>
                            </label>
                            <button className="login__submit" type="submit">Zaloguj</button>
                        </form>
                    </div>
                </div>
                {/*<aside className="copyright">&copy; tkmatuszewski 2020</aside>*/}
            </div>
        </div>
    )
}

export default LoginPage;
