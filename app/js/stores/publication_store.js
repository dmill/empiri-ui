import Config from "../config"
import Backbone from "bower_components/backbone/backbone";
import PublicationDispatcher from "../dispatchers/publication_dispatcher";
import _ from "underscore";

var ExperimentModel = Backbone.Model.extend({

  defaults: {
    id: null,
    date: new Date().toISOString(),
    thread_id: null,
    title: "Untitled Experiment",
    results: {
      figures: [],
      text: ""
    },
    discussion: ""
  },

  getAll: function () {
    return _.clone(this.attributes);
  }

});

var PublicationModel = Backbone.Model.extend({

  defaults: {
    id: null,
    date: new Date().toISOString(),
    title: "Untitled Publication",
    experiments: [],
    discussion: ""
  },

  getAll: function () {
    return _.clone(this.attributes);
  }

});

var PublicationCollection = Backbone.Collection.extend({
  model: ExperimentModel,
  url: `${Config.empiriApiEndpoint}/${Config.publicationPath}/1`,

  initialize: function() {
    this.dispatchToken = PublicationDispatcher.register(this.dispatchCallback.bind(this))
  },

  dispatchCallback: function(payload) {
    switch(payload.actionType) {
      case "publicationView:initialize":
        this.fetch(payload.fetchOptions);
        break;
    }
  },

  parse: function(response) {
    return response._embedded.experiments;
  }

})



var PublicationStore = new PublicationCollection()


export default PublicationStore
