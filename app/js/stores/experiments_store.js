import Backbone from "backbone";
import ExperimentDispatcher from "../dispatchers/experiment_dispatcher.js";
import { EXPERIMENT_STORE_MOCK_A, EXPERIMENT_STORE_MOCK_B } from "../constants/mocks/experiment_store_mock.js";
import  _ from "underscore"

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

var ExperimentsCollection = Backbone.Collection.extend({
  model: ExperimentModel
});

var ExperimentStoreA = new ExperimentModel(EXPERIMENT_STORE_MOCK_A);
var ExperimentStoreB = new ExperimentModel(EXPERIMENT_STORE_MOCK_B);
var ExperimentsStore = new ExperimentsCollection([ExperimentStoreA, ExperimentStoreB])


export default ExperimentsStore;
