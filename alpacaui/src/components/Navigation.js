import React from "react";
import { useHistory } from "react-router-dom";

import Logo from "../images/logo.png";

//css
import "./Navigation.css";

const Navigation = () => {

    let history = useHistory();

    return (
        <div className="navWrap">
            <img src={Logo} alt="Green capital A, and lowercase ui for our logo and branding" style={{height: "100px", width: "100px"}} />
            <div className="links">
                <button onClick={() => {history.push('/')}}>
                    Home
                </button>
                <button onClick={() => {history.push('/account')}}>
                    Account
                </button>
            </div>
        </div>
    )
}

export default Navigation;