import React from "react";
import PublicationView from "./publication_view.jsx";
import HomePageView from "./home_page/home_page_view.jsx";

var MainControllerView = React.createClass({

  getInitialState () {
    return {activeView: <HomePageView />};
  },

  render () {
    return this.state.activeView;
  }

});

export default MainControllerView;
