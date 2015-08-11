define(["exports", "module", "backbone", "underscore"], function (exports, module, _backbone, _underscore) {
  "use strict";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _Backbone = _interopRequireDefault(_backbone);

  var _2 = _interopRequireDefault(_underscore);

  var PublicationModel = _Backbone["default"].Model.extend({

    defaults: {
      id: null,
      date: new Date().toISOString(),
      title: "Untitled Publication",
      experiments: [],
      discussion: ""
    },

    getAll: function getAll() {
      return _2["default"].clone(this.attributes);
    }

  });

  var PublicationStore = new PublicationModel();

  module.exports = PublicationStore;
});