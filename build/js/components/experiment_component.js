define(["exports", "module", "bower_components/react/react"], function (exports, module, _bower_componentsReactReact) {
  "use strict";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _React = _interopRequireDefault(_bower_componentsReactReact);

  var ExperimentComponent = _React["default"].createClass({
    displayName: "ExperimentComponent",

    close: function close() {
      this.props.dispatcher.dispatch({
        actionType: "close.experiment-component",
        experimentId: this.props.data.id
      });
    },

    render: function render() {
      return _React["default"].createElement(
        "div",
        { className: "experiment-component" },
        _React["default"].createElement(
          "a",
          { href: "#", onClick: this.close },
          "Go Back"
        ),
        _React["default"].createElement(
          "section",
          { className: "introduction" },
          _React["default"].createElement(
            "h1",
            null,
            this.props.data.title
          ),
          _React["default"].createElement(
            "h2",
            null,
            this.props.data.date
          ),
          _React["default"].createElement(
            "p",
            null,
            this.props.data.synopsis
          )
        ),
        _React["default"].createElement(
          "section",
          { className: "content" },
          _React["default"].createElement(
            "div",
            { className: "results-container" },
            _React["default"].createElement(
              "h1",
              null,
              "Results"
            ),
            _React["default"].createElement(
              "p",
              null,
              this.props.data.text
            )
          ),
          _React["default"].createElement(
            "h2",
            null,
            "Discussion"
          ),
          _React["default"].createElement(
            "p",
            null,
            this.props.data.discussion
          )
        )
      );
    }

  });

  module.exports = ExperimentComponent;
});