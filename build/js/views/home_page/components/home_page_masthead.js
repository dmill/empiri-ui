define(["exports", "module", "react"], function (exports, module, _react) {
  "use strict";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _React = _interopRequireDefault(_react);

  var HomePageMasthead = _React["default"].createClass({
    displayName: "HomePageMasthead",

    render: function render() {
      return _React["default"].createElement(
        "nav",
        { id: "masthead" },
        _React["default"].createElement(
          "span",
          { id: "logo" },
          "Empiri"
        )
      );
    }
  });

  module.exports = HomePageMasthead;
});