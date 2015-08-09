import React from "react";
import PublicationView from "./publication_view.jsx";

var MainControllerView = React.createClass({

  getInitialState () {
    return {activeView: <PublicationView />};
  },

  render () {
    return this.state.activeView;
  }

});

export default MainControllerView;
