import React from "react";
import NavBarView from "./views/nav_bar_view";
import UserProfileView from "./views/user_profile_view";
import UserStore from "./stores/user_store";

var Layout = React.createClass({

  componentDidMount() {
    UserStore.addListener("change", this.onChange);
  },

  componentWillUnmount() {
    UserStore.removeListener("change", this.onChange);
  },

  onChange() {
    this.setState({currentUser: UserStore.get("user")});
  },

  getInitialState() {
    return {currentUser: UserStore.get("user")};
  },

  render() {
    return (
      <div>
        <NavBarView user={this.state.currentUser} />
        <UserProfileView user={this.state.currentUser} />
      </div>
    );
  }

});

React.render(<Layout />, document.getElementById("root"));
