import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";

import homeImage from "assets/images/base/press.jpg";

import data from "../data";

function PressPage() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.languages[0];
    const { pressKit } = data;

    return (
        <>
            <Helmet>
                <title>{t("press_page.seo_title")}</title>
                <meta name="description" content={t("press_page.seo_title")} />
            </Helmet>
            <div className="content fade-in content-press">
                <div className="main-banner">
                    <img src={homeImage} alt="" className="main-photo" />
                    {pressKit?.highResPhoto?.url &&
                        <a href="/" className="high-res-image-link" alt={pressKit.highResPhoto.text[currentLang]}>
                            {pressKit.highResPhoto.text[currentLang]}
                        </a>
                    }
                </div>
                <div className="block block-main-title">
                    <div className="title-wrap">
                        <h1 className="title">
                            {t("press_page.title")}
                        </h1>
                    </div>
                </div>
                <div className="block block-bio">
                    <h2 className="title">
                        {t("press_page.bio_title")}
                    </h2>
                    <div className="bio-content">
                        <div className="left">
                            <div className="bio-items">
                                {pressKit.bioItems.map((item, index) => (
                                    <div className="bio-item" key={index}>
                                        {item[currentLang]}
                                    </div>
                                ))}
                            </div>
                            <div className="bio-links">
                                {pressKit.bioLinks.map((item, index) => (
                                    <Fragment key={index}>
                                        {item.url &&
                                            <a href={item.url} className="bio-link">
                                                {item.text[currentLang]}
                                            </a>
                                        }
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                        <div className="right">
                            <div className="bio-text-label">
                                {pressKit.shortBioText[currentLang].label}
                            </div>
                            <div className="bio-text">
                                <div dangerouslySetInnerHTML={{ __html: pressKit.shortBioText[currentLang].text }} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="block-riders">
                    <div className="left">
                        <h2 className="title">
                            {t("press_page.riders_title")}
                        </h2>
                        <div className="riders">
                            {pressKit.riderItems.map((item, index) => (
                                <Fragment key={index}>
                                    {item.url &&
                                        <div className="rider-item">
                                            <a href={item.url} alt={item[currentLang].text}>
                                                {item[currentLang].buttonText}
                                            </a>
                                            <span>{item[currentLang].text}</span>
                                        </div>
                                    }
                                </Fragment>
                            ))}
                        </div>
                    </div>
                    <div className="right">
                        <h2 className="title">
                            {t("press_page.representation_title")}
                        </h2>
                        <div className="representations">
                            {pressKit.representationItems.map((item, index) => (
                                <Fragment key={index}>
                                    <div className="representation-item">
                                        <span className="label">{item[currentLang].label}</span>
                                        <span>{item[currentLang].text}</span>
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PressPage;
