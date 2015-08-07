var Backbone = require("backbone")
var ExperimentDispatcher = require("../dispatchers/experiment_dispatcher.js")
var EXPERIMENT_STORE_MOCK_A = require("../constants/mocks/experiment_store_mock_a.js")
var EXPERIMENT_STORE_MOCK_B = require("../constants/mocks/experiment_store_mock_b.js")
var _ = require("underscore")

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
    return _.clone(this.attributes)
  }
});


var ExperimentStoreA = new ExperimentModel(EXPERIMENT_STORE_MOCK_A)
var ExperimentStoreB = new ExperimentModel(EXPERIMENT_STORE_MOCK_B)

module.exports = {A: ExperimentStoreA, B: ExperimentStoreB}

