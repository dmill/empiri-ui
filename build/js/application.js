define(["exports", "bower_components/react/react", "./components/experiment_component"], function (exports, _bower_componentsReactReact, _componentsExperiment_component) {
  "use strict";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _React = _interopRequireDefault(_bower_componentsReactReact);

  var _ExperimentComponent = _interopRequireDefault(_componentsExperiment_component);

  _React["default"].render(_React["default"].createElement(_ExperimentComponent["default"], { data: { title: "helloy" } }), document.getElementById("root"));
});