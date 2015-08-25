import React from "bower_components/react/react";
import ListComponent from "./list_component";
import FontawesomeComponent from "./fontawesome_component";

var DropdownComponent = React.createClass({

  getInitialState () {
    return {open: false}
  },

  propTypes: {
    content: React.PropTypes.element.isRequired
  },

  handleClick () {
    var currentState = this.state.open;
    this.setState({open: !currentState});
  },

  renderList () {
    if(this.state.open) {
      return <ListComponent items={this.props.items} />;
    }
  },

  render () {
    return (
      <div style={{cursor: "pointer"}} onClick={this.handleClick}>
        {this.props.content}
        <div style={{display: "inline-block", marginLeft: "5px"}}>
          <FontawesomeComponent style={{float: "left"}} iconName="caret-down" />
        </div>
        <div style={{listContainerStyle}}>
          {this.renderList()}
        </div>
      </div>
    );
  }

});

var listContainerStyle = {

}

export default DropdownComponent;
