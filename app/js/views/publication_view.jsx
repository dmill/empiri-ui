import React from "bower_components/react/react";
import PublicationDispatcher from "../dispatchers/publication_dispatcher";
import PublicationComponent from "../components/publication_component";
import PublicationStore from "../stores/publication_store";

var PublicationView = React.createClass({

  getInitialState: function() {
    return {experiments: []}
  },

  componentDidMount () {
    PublicationDispatcher.dispatch({
      actionType: "publicationView:initialize",
      fetchOptions: {
        success: function(collection, response) {
          this.setState({experiments: collection.models});
        }.bind(this),
        error: function() { console.error("error with 'publicationView:initialize'") }
      }
    });
  },

  render () {
    return (
      <PublicationComponent experiments={this.state.experiments} />
    );
  }

});

export default PublicationView;
