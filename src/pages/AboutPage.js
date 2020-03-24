import React from "react";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import homeImage from "assets/images/base/about.jpg";

import data from "../data";

const { bio } = data;

function AboutPage() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.languages[0];

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
                            {bio[currentLang].quotes.map((quote, index) => (
                                <div className={classNames("quote", "quote-" + (index + 1))}>
                                    <div className="quote-text">
                                        <div dangerouslySetInnerHTML={{ __html: quote.text }} />
                                    </div>
                                    <div className="quote-author">
                                        <div dangerouslySetInnerHTML={{ __html: quote.author }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="about-text">
                        <div dangerouslySetInnerHTML={{ __html: bio[currentLang].bioText }} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutPage;
