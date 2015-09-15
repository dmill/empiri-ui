import React from "react";

var DropdownListComponent = React.createClass({

  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  getInitialState () {
    return {hoveredDivKey: null};
  },

  handleMouseOver (key, event) {
    this.setState({hoveredDivKey: key});
  },

  handleMouseOut () {
    this.setState({hoveredDivKey: null});
  },

  getStyle (key) {
    if(key === this.state.hoveredDivKey) {
      return hoverStyle;
    } else {
      return defaultStyle;
    }
  },

  render () {
    return (
      <div style={listStyle}>
        {this.props.items.map(function(item, i) {
          return (
              <div
                key={i}
                onMouseOver={this.handleMouseOver.bind(null, i)}
                onMouseOut={this.handleMouseOut}
                style={this.getStyle(i)}
              >
                {item}
              </div>
          );
        }.bind(this))}
      </div>
    );
  }

});

var listStyle = {
  position: "absolute",
  borderRadius: "3px",
  border: "1px solid #000000",
  backgroundColor: "#FFFFFF",
  boxSizing: "border-box"
};

var defaultStyle = {
  backgroundColor: "#FFFFFF",
  color: "#000000",
  padding: "3px 5px",
  fontSize: "12px",
  boxSizing: "border-box",
  cursor: "pointer"
};

var hoverStyle = {
  backgroundColor: "#666",
  color: "#FFF",
  padding: "3px 5px",
  fontSize: "12px",
  boxSizing: "border-box",
  cursor: "pointer"
};

export default DropdownListComponent;
