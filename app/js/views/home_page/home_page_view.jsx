import React from "react";
import HomePageMasthead from "./components/home_page_masthead.jsx";
import HomePageMainContent from "./components/home_page_main_content.jsx";

var HomePageView = React.createClass({

  render () {
    return (
      <div className="home-page-view">
        <HomePageMasthead />
        <HomePageMainContent />
      </div>
    );
  }

});

export default HomePageView;
