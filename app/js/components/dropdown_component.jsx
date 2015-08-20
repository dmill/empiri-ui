import React from "bower_components/react/react";
import HoverCardComponent from "./hover_card_component";

var DropdownComponent = React.createClass({

  getInitialState () {
    return {open: false}
  },

  propTypes: {
    content: React.PropTypes.element.isRequired
  },

  handleClick () {
    var currentState = this.state.open;
    this.setState({open: !currentState})
  },

  renderList () {
    if(this.state.open) {
      return <HoverCardComponent tooltip="test" />;
    }
  },

  render () {
    return (
      <div onClick={this.handleClick}>
        {this.props.content}
        <div>{this.renderList()}</div>
      </div>
    );
  }

});

export default DropdownComponent;
