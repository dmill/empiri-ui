import Backbone from "bower_components/backbone/backbone";
import _ from "underscore";

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

var PublicationStore = new PublicationModel()


export default PublicationStore
