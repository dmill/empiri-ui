import React from "bower_components/react/react";
import PublicationView from "./publication_view";
import HomePageView from "./home_page/home_page_view";

var MainControllerView = React.createClass({

  getInitialState () {
    return {activeView: <HomePageView />};
  },

  render () {
    return this.state.activeView;
  }

});

export default MainControllerView;
