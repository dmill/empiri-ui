import React from "bower_components/react/react";
import HomePageMasthead from "./components/home_page_masthead";
import HomePageMainContent from "./components/home_page_main_content";

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
