define(["exports", "module", "react", "./experiment_preview_component.jsx"], function (exports, module, _react, _experiment_preview_componentJsx) {
  "use strict";

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  var _React = _interopRequireDefault(_react);

  var _ExperimentPreviewComponent = _interopRequireDefault(_experiment_preview_componentJsx);

  var ExperimentPreviewsComponent = _React["default"].createClass({
    displayName: "ExperimentPreviewsComponent",

    render: function render() {
      var _props = this.props;
      var experiments = _props.experiments;

      var other = _objectWithoutProperties(_props, ["experiments"]);

      return _React["default"].createElement(
        "div",
        { className: "experiment-previews-component" },
        this.props.experiments.map(function (experiment, i) {
          return _React["default"].createElement(_ExperimentPreviewComponent["default"], _extends({
            key: i }, other, { data: experiment.getAll() }));
        })
      );
    }

  });

  module.exports = ExperimentPreviewsComponent;
});