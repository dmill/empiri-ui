define(["exports", "module", "react"], function (exports, module, _react) {
  "use strict";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _React = _interopRequireDefault(_react);

  var ExperimentPreviewComponent = _React["default"].createClass({
    displayName: "ExperimentPreviewComponent",

    handleClick: function handleClick() {
      this.props.dispatcher.dispatch({
        actionType: "click.experiment-preview-component",
        experimentId: this.props.data.id
      });
    },

    render: function render() {
      return _React["default"].createElement(
        "div",
        { onClick: this.handleClick, className: "experiment-preview-component" },
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
        )
      );
    }

  });

  module.exports = ExperimentPreviewComponent;
});