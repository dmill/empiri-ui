import React from "react/addons";
import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import Icon from "../app/js/elements/icon_element";
var TestUtils = React.addons.TestUtils;
var expect = chai.expect;
chai.use(sinonChai);

module.exports = describe("Icon", function() {

  before("render and locate element", function() {

    // render component into DOM
    this.renderedComponent = TestUtils.renderIntoDocument(
      <div>
        <Icon iconName="close" />
        <Icon iconType="material" iconName="close" />
      </div>
    );

    // find elements to test
    this.iTags = TestUtils.scryRenderedDOMComponentsWithTag(this.renderedComponent, "i");

  });

  it("should render a fontawesome icon by default", function() {

    var iClassName = this.iTags[0].getDOMNode().className;

    expect(iClassName).to.equal("fa fa-close");

  });

  it("should render a material icon when iconType=material is specified", function() {

    var domNode, iClassName, iText;

    domNode = this.iTags[1].getDOMNode();
    iClassName = domNode.className;
    iText = domNode.textContent;

    expect(iClassName).to.equal("material-icons");
    expect(iText).to.equal("close");

  });

});

