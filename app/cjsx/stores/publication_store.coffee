Backbone = require("backbone")
ExperimentDispatcher = require("../dispatchers/experiment_dispatcher.coffee")
_ = require("underscore")


class PublicationModel extends Backbone.Model
  defaults:
    id: null
    date: new Date().toISOString()
    title: "Untitled Publication"
    experiments: []
    discussion: ""


  getAll: ->
    _.clone(@attributes)

module.exports = new PublicationModel()

