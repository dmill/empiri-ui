import React from "bower_components/react/react";
import PublicationComponent from "../components/publication_component";
import PublicationStore from "../stores/publication_store";

var PublicationView = React.createClass({

  render () {
    return (
      <PublicationComponent data={PublicationStore.getAll()} />
    );
  }

});

export default PublicationView;
