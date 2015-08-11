define(["exports", "module", "backbone", "../constants/mocks/experiment_store_mock.js", "underscore"], function (exports, module, _backbone, _constantsMocksExperiment_store_mockJs, _underscore) {
  "use strict";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _Backbone = _interopRequireDefault(_backbone);

  var _2 = _interopRequireDefault(_underscore);

  var ExperimentModel = _Backbone["default"].Model.extend({

    defaults: {
      id: null,
      date: new Date().toISOString(),
      thread_id: null,
      title: "Untitled Experiment",
      results: {
        figures: [],
        text: ""
      },
      discussion: ""
    },

    getAll: function getAll() {
      return _2["default"].clone(this.attributes);
    }

  });

  var ExperimentsCollection = _Backbone["default"].Collection.extend({
    model: ExperimentModel
  });

  var ExperimentStoreA = new ExperimentModel(_constantsMocksExperiment_store_mockJs.EXPERIMENT_STORE_MOCK_A);
  var ExperimentStoreB = new ExperimentModel(_constantsMocksExperiment_store_mockJs.EXPERIMENT_STORE_MOCK_B);
  var ExperimentsStore = new ExperimentsCollection([ExperimentStoreA, ExperimentStoreB]);

  module.exports = ExperimentsStore;
});