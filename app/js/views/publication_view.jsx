import React from "bower_components/react/react";
import PublicationComponent from "../components/publication_component";
import PublicationStore from "../stores/publication_store";
import ExperimentStore from "../stores/experiments_store";

var PublicationView = React.createClass({

  componentDidMount () {
    ExperimentStore.fetch({
      success: function(collection, response) {
        this.setState({experiments: collection})
      },
      error: function() {
        console.log("AHHHHHHHHHHH");
      }
    });
  },

  render () {
    return (
      <PublicationComponent data={PublicationStore.getAll()} />
    );
  }

});

export default PublicationView;
