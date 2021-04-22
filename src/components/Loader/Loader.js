import React from "react";

const Loader = () => {
    return (
        <div className="app__loader">
            <div className="lds-ripple">
                <div/>
                <div/>
            </div>
            <div className="app__loader__text">Loading...</div>
        </div>
    )
}

export default Loader
