import React from "react";
import PublicationComponent from "./publication_component_view.jsx";

var MainControllerView = React.createClass({

  getInitialState () {
    return {activeView: <PublicationComponent />};
  },

  render () {
    return this.state.activeView;
  }

});

export default MainControllerView;
