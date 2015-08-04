# @cjsx React.DOM

React = require("react")

ExperimentComponent = React.createClass
  render: ->
    <div>{@props.title}</div>

module.exports = ExperimentComponent
