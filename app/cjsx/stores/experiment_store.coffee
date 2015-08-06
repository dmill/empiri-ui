Backbone = require("backbone")
ExperimentDispatcher = require("../dispatchers/experiment_dispatcher.coffee")
EXPERIMENT_STORE_MOCK = require("../constants/mocks/experiment_store_mock.coffee")
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


  initialize: ->
    @dispatchToken = ExperimentDispatcher.register(@dispatchCallback)

  dispatchCallback: (payload) ->
    switch payload.actionType
      when "experiment-update"
        attributes = _.clone(@attributes)
        _.extend(attributes, payload)
        @set(attributes)

  getAll: ->
    _.clone(@attributes)


ExperimentStore = new ExperimentModel(EXPERIMENT_STORE_MOCK)


module.exports = ExperimentStore
