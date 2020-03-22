import React from "react";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";

import homeImage from "assets/images/base/tour.jpg";

import data from "../data";

const { tour } = data;

function TourPage() {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.languages[0];

    return (
        <>
            <Helmet>
                <title>{t("tour_page.seo_title")}</title>
                <meta name="description" content={t("tour_page.seo_title")} />
            </Helmet>
            <div className="content fade-in content-tour">
                <div className="main-banner">
                    <img src={homeImage} alt="" className="main-photo" />
                </div>
                <div className="title-block">
                    <div className="title-wrap">
                        <h1 className="title">
                            {t("tour_page.title")}
                        </h1>
                    </div>
                </div>
                <div className="tour-block">
                    <div className="header">
                        <div className="upcoming"></div>
                        <div className="local"></div>
                        <div className="social"></div>
                    </div>
                    {tour.events.map((event, index) => (
                        <div className="events">
                            <div className="event">
                                <div className="event-date">
                                    <span className="day">
                                        {new Date(event.date).toLocaleDateString(currentLang, { day: "numeric" })}
                                    </span>
                                    <span className="month">
                                        {new Date(event.date).toLocaleDateString(currentLang, { month: "short" })}
                                    </span>
                                    {/* <span className="year">
                                        {new Date(event.date).toLocaleDateString(currentLang, { year: "numeric" })}
                                    </span> */}
                                </div>
                                <div className="event-place">
                                    {event[currentLang].place}
                                </div>
                                <div className="event-location">
                                    {event[currentLang].location}
                                </div>
                                <div className="event-tickets">
                                    <a className="link" href={event.toTickets} alt="ticket" target="_blank" rel="noopener noreferrer">Tickets</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default TourPage;
