import React from "bower_components/react/react";
import HoverCardComponent from "./hover_card_component";
import FontawesomeComponent from "./fontawesome_component";

var DropdownComponent = React.createClass({

  getInitialState () {
    return {open: false}
  },

  propTypes: {
    // content: React.PropTypes.element.isRequired
  },

  handleClick () {
    var currentState = this.state.open;
    this.setState({open: !currentState});
  },

  renderList () {
    if(this.state.open) {
      return <HoverCardComponent tooltip="test" />;
    }
  },

  render () {
    return (
      <div style={{cursor: "pointer"}} onClick={this.handleClick}>
        {this.props.content}
        <div style={{display: "inline-block", marginLeft: "5px"}}>
          {this.renderList()}
          <FontawesomeComponent style={{float: "left"}} iconName="caret-down" />
        </div>
      </div>
    );
  }

});

export default DropdownComponent;
