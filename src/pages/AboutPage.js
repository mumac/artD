import React from "react";
import Helmet from "react-helmet";
import { useTranslation, Trans } from "react-i18next";

import homeImage from "assets/images/base/about.jpg";

function AboutPage() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("about_page.seo_title")}</title>
                <meta name="description" content={t("about_page.seo_title")} />
            </Helmet>
            <div className="content fade-in content-about">
                <div className="main-banner">
                    <img src={homeImage} alt="" className="main-photo" />
                </div>
                <div className="title-block">
                    <div className="title-wrap">
                        <h1 className="title">
                            {t("about_page.title")}
                        </h1>
                    </div>
                </div>
                <div className="about-text-block">
                    <div className="quotes">
                        <div className="inner">
                            <div className="quote quote-1">
                                <div className="quote-text">
                                    {t("about_page.quote_1.text")}
                                </div>
                                <div className="quote-author">
                                    {t("about_page.quote_1.author")}
                                </div>
                            </div>
                            <div className="quote quote-2">
                                <div className="quote-text">
                                    {t("about_page.quote_2.text")}
                                </div>
                                <div className="quote-author">
                                    {t("about_page.quote_2.author")}
                                </div>
                            </div>
                            <div className="quote quote-3">
                                <div className="quote-text">
                                    {t("about_page.quote_3.text")}
                                </div>
                                <div className="quote-author">
                                    {t("about_page.quote_3.author")}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-text">
                        <Trans i18nKey="about_page.bio_text" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutPage;
