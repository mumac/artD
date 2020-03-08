import React from "react";

import LogoImg from "../assets/images/base/logo.png";

export function Logo() {

    return (
        <div className="logo-wrapper">
            <img className="logo" src={LogoImg} alt="Logo" />
        </div>
    );
}
