import React from "bower_components/react/react";
import HoverCardComponent from "./hover_card_component";

var ListComponent = React.createClass({

  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  render () {
    return (
      <div style={listStyle}>
        {this.props.items.map(function(item, i) {
          return <HoverCardComponent text={item} key={i} />
        })}
      </div>
    );
  }

});

var listStyle = {
  position: "absolute",
  borderRadius: "3px",
  border: "1px solid #000000",
  backgroundColor: "#FFFFFF",
  boxSizing: "border-box",
}

export default ListComponent;
