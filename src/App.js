import React from "react";
import { Route } from "react-router";
// import ReactGA from "react-ga";

import Layout from "./components/Layout";
import StartPage from "./pages/StartPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import MusicPage from "./pages/MusicPage";
import TourPage from "./pages/TourPage";

import "./themes/styles/main.scss";


function App() {
    // ReactGA.initialize('UA-');

    return (
        <Layout>
            <Route exact path='/' component={StartPage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/music' component={MusicPage} />
            <Route exact path='/tour' component={TourPage} />
            <Route exact path='/gallery' component={GalleryPage} />
            {/* <Route exact path='/epk' component={StartPage} /> */}
            <Route exact path='/contact' component={ContactPage} />
        </Layout>
    );
}

export default App;
