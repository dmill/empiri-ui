import React from "react";

var PopoverSelectComponent = React.createClass({

  propTypes: {
    content: React.PropTypes.element.isRequired,
    popoverContent: React.PropTypes.element.isRequired
  },

  getInitialState() {
    return {open: false};
  },

  handleClick() {
    this.setState({open: !this.state.open});
  },

  renderPopover() {
    if(this.state.open) {
      return this.props.popoverContent;
    } else {
      return;
    }
  },

  render () {
    return (
      <span onClick={this.handleClick} style={{position: "relative"}}>
        {this.props.content}
        {this.renderPopover()}
      </span>
    );
  }

});

export default PopoverSelectComponent;
