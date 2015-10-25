import React from "react";
import UserStore from "../stores/user_store";

var UserProfileView = React.createClass({

  componentDidMount() {
    UserStore.addListener("change", this.onChange);
  },

  componentWillUnmount() {
    UserStore.removeListener("change", this.onChange);
  },

  onChange() {
    this.setState({user: UserStore.get("user")});
  },

  getInitialState() {
    return {user: UserStore.get("user")};
  },

  render() {
    return (
      <div>
        <h2>{this.state.user.name}</h2>
        <h6>{this.state.user.affiliation}</h6>
        <img src={this.state.user.avatar} />
      </div>
    );
  }

});

export default UserProfileView;
