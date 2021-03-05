import React from "react";
import { useHistory } from "react-router-dom";

import Logo from "../images/logo.png";

//css
import "./Navigation.css";

const Navigation = () => {
    return (
        <div className="navWrap">
            <img src={Logo} alt="Green capital A, and lowercase ui for our logo and branding" style={{height: "100px", width: "100px"}} />
        </div>
    )
}

export default Navigation;