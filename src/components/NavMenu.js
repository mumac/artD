import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import Social from "./Social";

import "../themes/styles/navMenu.scss";


function NavMenu() {
    const { t, i18n } = useTranslation();
    const [isOpen, setOpen] = useState(false);

    const langClass = lang => {
        return i18n.languages[0] === lang ? "lang active" : "lang";
    };

    return (
        <header className="header">
            <div className="toggle-wrap">
                <div className={classNames("toggle", { "open": isOpen })} onClick={() => setOpen(!isOpen)}>
                    <span></span>
                </div>
            </div>
            <div className="vn-navbar-wrap">
                <nav className="vn-navbar">
                    <div className="vn-navbar-main-outer container">
                        <div className={classNames("vn-navbar-main", { "open": isOpen })} >
                            <div className="vn-navbar-social">
                                <Social />
                            </div>
                            <div className="vn-navbar-nav-wrap">
                                <div className="vn-navbar-nav">
                                    <NavLink exact className="vn-nav-link" to="/" onClick={() => setOpen(!isOpen)}>{t("base.navbar.link.home")}</NavLink>
                                    <NavLink className="vn-nav-link" to="/about" onClick={() => setOpen(!isOpen)}>{t("base.navbar.link.about")}</NavLink>
                                    <NavLink className="vn-nav-link" to="/music" onClick={() => setOpen(!isOpen)}>{t("base.navbar.link.music")}</NavLink>
                                    <NavLink className="vn-nav-link" to="/tour" onClick={() => setOpen(!isOpen)}>{t("base.navbar.link.tour")}</NavLink>
                                    <NavLink className="vn-nav-link" to="/gallery" onClick={() => setOpen(!isOpen)}>{t("base.navbar.link.gallery")}</NavLink>
                                    {/* <NavLink className="vn-nav-link" to="/epk" onClick={() => setOpen(!isOpen)}>{t("base.navbar.link.epk")}</NavLink> */}
                                    <NavLink className="vn-nav-link" to="/contact" onClick={() => setOpen(!isOpen)}>{t("base.navbar.link.contact")}</NavLink>
                                </div>
                            </div>
                            <div className="vn-navbar-lang">
                                <span className={langClass("en")} onClick={() => i18n.changeLanguage("en")}>en</span>
                                <span className={langClass("de")} onClick={() => i18n.changeLanguage("de")}>de</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header >
    );
}

export default NavMenu;
