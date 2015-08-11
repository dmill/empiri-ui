define(["exports", "module", "react", "./components/home_page_masthead.jsx", "./components/home_page_main_content.jsx"], function (exports, module, _react, _componentsHome_page_mastheadJsx, _componentsHome_page_main_contentJsx) {
  "use strict";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _React = _interopRequireDefault(_react);

  var _HomePageMasthead = _interopRequireDefault(_componentsHome_page_mastheadJsx);

  var _HomePageMainContent = _interopRequireDefault(_componentsHome_page_main_contentJsx);

  var HomePageView = _React["default"].createClass({
    displayName: "HomePageView",

    render: function render() {
      return _React["default"].createElement(
        "div",
        { className: "home-page-view" },
        _React["default"].createElement(_HomePageMasthead["default"], null),
        _React["default"].createElement(_HomePageMainContent["default"], null)
      );
    }

  });

  module.exports = HomePageView;
});