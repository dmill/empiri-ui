import React from "react";
import NavBarView from "./views/nav_bar_view";
import UserProfileView from "./views/user_profile_view";

var Layout = React.createClass({

  render () {
    return (
      <div>
        <NavBarView />
        <UserProfileView />
      </div>
    );
  }

});

React.render(<Layout />, document.getElementById("root"));
