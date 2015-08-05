Backbone = require("backbone")
ExperimentDispatcher = require("../dispatchers/experiment_dispatcher.coffee")
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



testData =
  id: 1
  thread_id: 1
  title: "The Effects of Nootropics"
  synopsis: "I took Modafinil every day for 30 days and measured my productivity."
  results: [
      figures: []
      text: "measured 43% increased productivity"
    ]
  discussion: "this shit works"



ExperimentStore = new ExperimentModel(testData)



module.exports = ExperimentStore
