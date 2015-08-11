define(["exports", "module", "react", "../components/publication_component.jsx", "../stores/publication_store.js"], function (exports, module, _react, _componentsPublication_componentJsx, _storesPublication_storeJs) {
  "use strict";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _React = _interopRequireDefault(_react);

  var _PublicationComponent = _interopRequireDefault(_componentsPublication_componentJsx);

  var _PublicationStore = _interopRequireDefault(_storesPublication_storeJs);

  var PublicationView = _React["default"].createClass({
    displayName: "PublicationView",

    render: function render() {
      return _React["default"].createElement(_PublicationComponent["default"], { data: _PublicationStore["default"].getAll() });
    }

  });

  module.exports = PublicationView;
});