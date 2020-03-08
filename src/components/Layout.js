import React, { Fragment } from "react";

import NavMenu from "./NavMenu";
import Footer from "./Footer";

import "../themes/styles/main.scss";

function Layout({ children, pageName = "", footer = true }) {

    return (
        <Fragment>
            <div className={`page fade-in ${pageName}`}>
                <NavMenu />
                <main>
                    <div className="container">
                        {children}
                    </div>
                </main>
                {footer && <Footer />}
            </div>
        </Fragment>
    );
}

export default Layout;
