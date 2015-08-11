define(["exports", "module", "react"], function (exports, module, _react) {
  "use strict";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _React = _interopRequireDefault(_react);

  var HomePageMainContent = _React["default"].createClass({
    displayName: "HomePageMainContent",

    render: function render() {
      return _React["default"].createElement(
        "div",
        { id: "main-content" },
        _React["default"].createElement(
          "section",
          null,
          _React["default"].createElement(
            "div",
            { className: "image-container" },
            _React["default"].createElement("img", { src: "app/js/views/home_page/images/nautilus.jpg" })
          ),
          _React["default"].createElement(
            "div",
            { className: "heading-container" },
            _React["default"].createElement(
              "h1",
              null,
              "Science moves faster when research is published here"
            ),
            _React["default"].createElement(
              "h2",
              null,
              "On Empiri your work is reviewed and published continuously - while your research is still happening."
            )
          ),
          _React["default"].createElement(
            "div",
            { className: "waitlist-form" },
            _React["default"].createElement("input", { className: "name", type: "text", placeholder: "First name" }),
            _React["default"].createElement("input", { className: "name", type: "text", placeholder: "Last name" }),
            _React["default"].createElement("input", { type: "text", placeholder: "Email" }),
            _React["default"].createElement(
              "button",
              null,
              "Join the waitlist"
            )
          )
        ),
        _React["default"].createElement(
          "section",
          null,
          _React["default"].createElement(
            "div",
            { className: "heading-container" },
            _React["default"].createElement(
              "h1",
              null,
              "Receive peer-reviews on individual experiments"
            ),
            _React["default"].createElement(
              "h2",
              null,
              "When your publication is ready, each of its experiments have already been peer-reviewed."
            )
          )
        ),
        _React["default"].createElement(
          "section",
          null,
          _React["default"].createElement(
            "div",
            { className: "heading-container" },
            _React["default"].createElement(
              "h1",
              null,
              "Collaborate with top researchers in your field"
            ),
            _React["default"].createElement(
              "h2",
              null,
              "Empiri is a community of science publishers sharing ideas, research, and feedback with each other, and for the rest of the world to see."
            )
          )
        )
      );
    }
  });

  module.exports = HomePageMainContent;
});