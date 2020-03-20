import React from "react";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";

import homeImage from "assets/images/base/home.jpg";

function StartPage() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("start_page.seo_title")}</title>
                <meta name="description" content={t("start_page.seo_title")} />
            </Helmet>
            <div className="content content-home fade-in">
                <div className="main-banner">
                    <img src={homeImage} alt="" className="main-photo" />
                </div>
                <div className="title-block">
                    <div className="title-wrap">
                        <h1 className="title">
                            {t("start_page.title")}
                        </h1>
                    </div>
                    <div className="subtitle-wrap">
                        <div className="subtitle">
                            {t("start_page.subtitle")}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StartPage;
