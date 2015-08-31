import React from "react/addons";
var TestUtils = React.addons.TestUtils;

import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
var expect = chai.expect;
chai.use(sinonChai);

import DropdownComponent from "../app/js/components/dropdown_component";
import DropdownListComponent from "../app/js/components/dropdown_list_component";

var spec = describe("DropdownComponent", function() {

  before("render and locate element", function() {

    // render component into DOM
    this.renderedComponent = TestUtils.renderIntoDocument(
      <DropdownComponent
        content={<div>test menu</div>}
        items={["item1", "item2", "item3"]} />
    );

    // find elements to test
    this.divTags = TestUtils.scryRenderedDOMComponentsWithTag(this.renderedComponent, "div");

  });

  it("<div> should render its props.content", function() {

    var firstChildText = this.divTags[0].getDOMNode().textContent;

    expect(firstChildText).to.equal("test menu");

  });

  it("<div> should render a DropdownListComponent when clicked", function() {

    var initialDivCount = TestUtils.scryRenderedDOMComponentsWithTag(this.renderedComponent, "div").length;
    TestUtils.Simulate.click(this.renderedComponent.getDOMNode());
    var afterClickDivCount = TestUtils.scryRenderedDOMComponentsWithTag(this.renderedComponent, "div").length;

    expect(afterClickDivCount - initialDivCount).to.equal(4);

  });

  it("<div> should pass its props.items down to its DropdownListComponent", function() {

    var divTags = TestUtils.scryRenderedDOMComponentsWithTag(this.renderedComponent, "div");
    var listItems = divTags.slice(3);

    expect(listItems[0].getDOMNode().textContent).to.equal("item1");

    expect(listItems[1].getDOMNode().textContent).to.equal("item2");

    expect(listItems[2].getDOMNode().textContent).to.equal("item3");

  });

  it("<div> should render a caret-down FontawesomeComponent", function() {

    var fontAwesomeComponent = TestUtils.findRenderedDOMComponentWithClass(this.renderedComponent, "fa-caret-down");

    expect(fontAwesomeComponent).to.exist;

  });

});

export default spec;
