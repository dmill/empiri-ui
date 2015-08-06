Backbone = require("backbone")
ExperimentDispatcher = require("../dispatchers/experiment_dispatcher.coffee")
EXPERIMENT_STORE_MOCK_A = require("../constants/mocks/experiment_store_mock_a.coffee")
EXPERIMENT_STORE_MOCK_B = require("../constants/mocks/experiment_store_mock_b.coffee")
_ = require("underscore")


class ExperimentModel extends Backbone.Model
  defaults:
    id: null
    date: new Date().toISOString()
    thread_id: null
    title: "Untitled Experiment"
    results:
      figures: []
      text: ""
    discussion: ""


  getAll: ->
    _.clone(@attributes)


ExperimentStoreA = new ExperimentModel(EXPERIMENT_STORE_MOCK_A)
ExperimentStoreB = new ExperimentModel(EXPERIMENT_STORE_MOCK_B)

module.exports =
  A: ExperimentStoreA
  B: ExperimentStoreB

