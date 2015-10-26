import React from "react";

var UserProfileView = React.createClass({

  render() {
    return (
      <div>
        <h2>{this.props.user.name}</h2>
        <h6>{this.props.user.affiliation}</h6>
        <img src={this.props.user.avatar} />
      </div>
    );
  }

});

export default UserProfileView;
