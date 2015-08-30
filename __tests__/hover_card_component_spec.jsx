var React = require("react/addons"),
    assert = require("assert"),
    HoverCardComponent = require("../app/js/components/hover_card_component.jsx"),
    TestUtils = React.addons.TestUtils;

describe("HoverCardComponent", function(){
  before("render and locate element", function() {
    var renderedComponent = TestUtils.renderIntoDocument(
      <HoverCardComponent text="test text" />
    );

    var divComponent = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, "div");

    this.divElement = divComponent.getDOMNode();
  });

  it("<div> should render its props.text", function() {
    assert.equal(this.divElement.textContent, "test text");
  });

  it("<div> should render its props.text", function() {
    assert.equal(this.divElement.textContent, "test text");
  });

  it("<div> should render its props.text", function() {
    assert.equal(this.divElement.textContent, "test text");
  });
});
