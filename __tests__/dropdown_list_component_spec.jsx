import React from "react/addons";
import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import DropdownListComponent from "../app/js/components/dropdown_list_component";
var TestUtils = React.addons.TestUtils;
var expect = chai.expect;
chai.use(sinonChai);

module.exports = describe("DropdownListComponent", function(){

  before("render and locate element", function() {

    var mainChild;

    // spy on mouseEventHandlers
    this.handleMouseOutSpy = sinon.spy(DropdownListComponent.prototype.__reactAutoBindMap, "handleMouseOut");
    this.handleMouseOverSpy = sinon.spy(DropdownListComponent.prototype.__reactAutoBindMap, "handleMouseOver");

    // render component into DOM
    this.renderedComponent = TestUtils.renderIntoDocument(
      <DropdownListComponent items={["item1", "item2", "item3"]} />
    );

    // find child components
    mainChild = TestUtils.scryRenderedDOMComponentsWithTag(this.renderedComponent, "div");
    this.childItems = mainChild.slice(1);
    this.firstItemNode = this.childItems[0].getDOMNode();

  });

  it("<div> should render its items into child divs", function() {

    expect(this.childItems.length).to.equal(3);

    expect(this.childItems[0].getDOMNode().textContent).to.equal("item1");

    expect(this.childItems[1].getDOMNode().textContent).to.equal("item2");

    expect(this.childItems[2].getDOMNode().textContent).to.equal("item3");

  });

  it("<div> should pass its mouseEventHandlers down as props to each of its children", function() {

    TestUtils.Simulate.mouseOver(this.firstItemNode);

    expect(this.handleMouseOverSpy).to.have.been.called.once;

    TestUtils.Simulate.mouseOut(this.firstItemNode);

    expect(this.handleMouseOutSpy).to.have.been.called.once;

  });

  it("<div> should pass the correct style according to the hover state", function() {

    var defaultStyle, hoverStyle;

    defaultStyle = this.firstItemNode.style.cssText;
    TestUtils.Simulate.mouseOver(this.firstItemNode);
    hoverStyle = this.firstItemNode.style.cssText;

    expect(defaultStyle).to.not.equal(hoverStyle);

  });

});

