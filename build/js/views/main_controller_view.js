define(["exports", "module", "react", "./publication_view.jsx", "./home_page/home_page_view.jsx"], function (exports, module, _react, _publication_viewJsx, _home_pageHome_page_viewJsx) {
  "use strict";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _React = _interopRequireDefault(_react);

  var _PublicationView = _interopRequireDefault(_publication_viewJsx);

  var _HomePageView = _interopRequireDefault(_home_pageHome_page_viewJsx);

  var MainControllerView = _React["default"].createClass({
    displayName: "MainControllerView",

    getInitialState: function getInitialState() {
      return { activeView: _React["default"].createElement(_HomePageView["default"], null) };
    },

    render: function render() {
      return this.state.activeView;
    }

  });

  module.exports = MainControllerView;
});