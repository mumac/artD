import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Masonry from "react-masonry-css";

import PreviousIcon from "./icons/0828-chevron-left.svg";
import NextIcon from "./icons/0829-chevron-right.svg";
import CloseIcon from "./icons/0811-cross.svg";

import "./styles/gallery.scss";

const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    959: 2,
    500: 2
};

function Gallery({ items }) {
    const { i18n } = useTranslation();
    const currentLang = i18n.languages[0];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [close, setClose] = useState(true);

    const openFullScreen = index => {
        setCurrentIndex(index);
        setClose(false);
    };

    const previousItem = () => {
        const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
    };

    const nextItem = () => {
        const nextIndex = currentIndex === (items.length - 1) ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
    };

    return (
        <div className="gallery">
            <div className="container">
                <div className="gallery-items">
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="gallery-masonry-grid"
                        columnClassName="gallery-masonry-grid-column"
                    >
                        {items.map((item, index) => (
                            <div className="gallery-item" onClick={() => openFullScreen(index)}>
                                <img
                                    src={process.env.PUBLIC_URL + "/gallery/" + item.fileName}
                                    alt={(item[currentLang] && item[currentLang].title) || ""}
                                />
                            </div>
                        ))}
                    </Masonry>
                </div>
                {!close &&
                    <div className="gallery-fullscreen fade-in">
                        <div className="gallery-fullscreen-inner">
                            <div className={"close"} onClick={() => setClose(true)}>
                                <span><img src={CloseIcon} alt="close" /></span>
                            </div>
                            <span class="arrow arrow-bar is-left" onClick={() => setClose(true)}></span>
                            <div className="fullscreen-body">
                                <div className="fullscreen-image-side">
                                    <div className="btn prev-btn" onClick={previousItem}>
                                        <span><img src={PreviousIcon} alt="previous" /></span>
                                    </div>
                                    <div className="image-wrap">
                                        <img
                                            src={process.env.PUBLIC_URL + "/gallery/" + items[currentIndex].fileName}
                                            alt={(items[currentIndex][currentLang] && items[currentIndex][currentLang].title) || ""}
                                        />
                                    </div>
                                    <div className="btn next-btn" onClick={nextItem}>
                                        <span><img src={NextIcon} alt="next" /></span>
                                    </div>
                                </div>
                                <div className="fullscreen-text-side">
                                    <div className="title">
                                        {(items[currentIndex][currentLang] && items[currentIndex][currentLang].title) || ""}
                                    </div>
                                    <div className="description">
                                        {(items[currentIndex][currentLang] && items[currentIndex][currentLang].description) || ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Gallery;
