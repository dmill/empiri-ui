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
      <div>
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

export default DropdownListComponent;
