import React from "bower_components/react/react";
import DropdownItemsComponent from "./dropdown_items_component";
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

  renderItems () {
    if(this.state.open) {
      return <DropdownItemsComponent items={this.props.items} />;
    }
  },

  render () {
    return (
      <div className="noselect" style={{cursor: "pointer"}} onClick={this.handleClick}>
        {this.props.content}

        <FontawesomeComponent style={caretStyle} iconName="caret-down" />

        {this.renderItems()}
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
