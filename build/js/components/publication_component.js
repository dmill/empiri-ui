define(["exports", "module", "react", "../dispatchers/publication_dispatcher.js", "../stores/experiments_store.js", "./experiment_component.jsx", "./experiment_previews_component.jsx"], function (exports, module, _react, _dispatchersPublication_dispatcherJs, _storesExperiments_storeJs, _experiment_componentJsx, _experiment_previews_componentJsx) {
  "use strict";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _React = _interopRequireDefault(_react);

  var _PublicationDispatcher = _interopRequireDefault(_dispatchersPublication_dispatcherJs);

  var _ExperimentsStore = _interopRequireDefault(_storesExperiments_storeJs);

  var _ExperimentComponent = _interopRequireDefault(_experiment_componentJsx);

  var _ExperimentPreviewsComponent = _interopRequireDefault(_experiment_previews_componentJsx);

  var PublicationComponent = _React["default"].createClass({
    displayName: "PublicationComponent",

    dispatchCallBack: function dispatchCallBack(payload) {
      switch (payload.actionType) {
        case "click.experiment-preview-component":
          this.setState({ activeId: payload.experimentId });
          break;
        case "close.experiment-component":
          this.setState({ activeId: null });
          break;
      };
    },

    getInitialState: function getInitialState() {
      return { activeId: null };
    },

    componentDidMount: function componentDidMount() {
      _PublicationDispatcher["default"].register(this.dispatchCallBack);
    },

    getActiveComponent: function getActiveComponent() {
      if (this.state.activeId) {
        return _React["default"].createElement(_ExperimentComponent["default"], { dispatcher: _PublicationDispatcher["default"], data: this.getActiveExperiment().getAll() });
      } else {
        return _React["default"].createElement(_ExperimentPreviewsComponent["default"], { dispatcher: _PublicationDispatcher["default"], experiments: _ExperimentsStore["default"].models });
      }
    },

    getActiveExperiment: function getActiveExperiment() {
      return _ExperimentsStore["default"].findWhere({ id: this.state.activeId });
    },

    render: function render() {
      return _React["default"].createElement(
        "div",
        { className: "publication-component" },
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
          { className: "experiments-container" },
          this.getActiveComponent()
        )
      );
    }

  });

  module.exports = PublicationComponent;
});