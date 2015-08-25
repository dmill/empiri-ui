jest.dontMock("../../app/js/components/dropdown_component.jsx");

describe("DropdownComponent", function() {
  it("initializes in the closed state", function() {
    var React = require("../../bower_components/react/react-with-addons");
    var DropdownComponent = require("../../app/js/components/dropdown_component.jsx");
    var TestUtils = React.addons.testUtils

    TestUtils.renderIntoDocument(

    );

    var dropdownComponent = TestUtils.findRenderedDOMComponentWithTag(DropdownComponent);
    var hoverCard = dropdownComponent.findRenderedDOMComponentWithTag(HoverCardComponent);
    expect(hoverCard.getDomNode().textContent).toEqual("");



  });
});
