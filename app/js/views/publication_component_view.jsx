import React from "react";
import PublicationComponent from "../components/publication_component.jsx";
import PublicationStore from "../stores/publication_store.js";

var PublicationComponentView = React.createClass({

  render () {
    return (
      <PublicationComponent data={PublicationStore.getAll()} />
    );
  }

});

export default PublicationComponentView;
