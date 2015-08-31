import React from "react";
import DropdownListComponent from "./dropdown_list_component";
import FontawesomeComponent from "./fontawesome_component";

var DropdownComponent = React.createClass({

  getInitialState () {
    return {open: false}
  },

  propTypes: {
    content: React.PropTypes.element.isRequired,
    items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },

  handleClick () {
    this.setState({open: !this.state.open});
  },

  renderList () {
    if(this.state.open) {
      return <DropdownListComponent items={this.props.items} />;
    }
  },

  render () {
    return (
      <div className="noselect" style={{cursor: "pointer"}} onClick={this.handleClick}>
        {this.props.content}

        <FontawesomeComponent iconName="caret-down" />

        {this.renderList()}
      </div>
    );
  }

});

var caretStyle = {
  marginLeft: "5px",
  marginTop: "-10px",
  verticalAlign: "middle"
}

export default DropdownComponent;
