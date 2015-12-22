import React from "react";
import DropdownListComponent from "./dropdown_list_component";
import IconElement from "../elements/icon_element";

var DropdownComponent = React.createClass({
  getInitialState() {
    return { isOpen: false }
  },

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  },

  renderList() {
    if(this.state.isOpen) {
      return <DropdownListComponent items={this.props.items} />;
    }
  },

  render() {
    return (
      <span className="noselect" style={{cursor: "pointer", display: "inline-block"}} onClick={this.handleClick}>
        <span style={{display: "inline-block"}}>{this.props.content}</span>

        <IconElement style={{verticalAlign: "bottom", marginLeft: "2px"}} iconName="caret-down" />

        {this.props.items.map((item) => <div>item</div>)}
      </span>
    );
  }

});

export default DropdownComponent;
