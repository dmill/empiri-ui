Backbone = require("backbone")
ExperimentDispatcher = require("../dispatchers/experiment_dispatcher")
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

ExperimentStore = new ExperimentModel()

module.exports = ExperimentStore
