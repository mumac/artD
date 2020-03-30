import React from "react";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";

import homeImage from "assets/images/base/contact.jpg";

function ContactPage() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("contact_page.seo_title")}</title>
                <meta name="description" content={t("contact_page.seo_title")} />
            </Helmet>
            <div className="content fade-in content-contact">
                <div className="main-banner">
                    <img src={homeImage} alt="" className="main-photo" />
                </div>
                <div className="block block-main-title">
                    <div className="title-wrap">
                        <h1 className="title">
                            {t("contact_page.title")}
                        </h1>
                    </div>
                </div>
                <div className="contacts-block">
                    <div className="contact contact_1">
                        <div className="contact-name">
                            {t("contact_page.contact_1.name")}
                        </div>
                        <div className="contact-email">
                            {t("contact_page.contact_1.email")}
                        </div>
                        <div className="contact-phone">
                            {t("contact_page.contact_1.phone")}
                        </div>
                    </div>
                    <div className="contact contact_2">
                        <div className="contact-name">
                            {t("contact_page.contact_2.name")}
                        </div>
                        <div className="contact-email">
                            {t("contact_page.contact_2.email")}
                        </div>
                        <div className="contact-phone">
                            {t("contact_page.contact_2.phone")}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;
