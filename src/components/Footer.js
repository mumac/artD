import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <footer className="text-center">
            <div className="container">
                <div className="footer-content content">
                    © {year} by {t("base.footer.artist_name")}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
