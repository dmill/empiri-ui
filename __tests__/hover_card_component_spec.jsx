import React from "react/addons";
var TestUtils = React.addons.TestUtils;

import chai from "chai";
var expect = chai.expect

import HoverCardComponent from "../app/js/components/hover_card_component";

var spec = describe("HoverCardComponent", function() {

  before("render and locate element", function() {

    var renderedComponent, divComponent;

    // render component into DOM
    renderedComponent = TestUtils.renderIntoDocument(
      <HoverCardComponent text="test text" />
    );

    // find element
    var divComponent = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, "div");
    this.divElement = divComponent.getDOMNode();

  });

  it("<div> should render its props.text", function() {

    expect(this.divElement.textContent).to.equal("test text");

  });

});

export default spec;
