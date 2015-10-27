import React from "react";

var UserProfileView = React.createClass({

  render() {
    if(!this.props.user) {
      return <div>no user</div>;
    } else {
      return (
        <div>
          <h2>{this.props.user.name}</h2>
          <h6>{this.props.user.affiliation}</h6>
          <img src={this.props.user.avatar} />
        </div>
      );
    }
  }

});

export default UserProfileView;
