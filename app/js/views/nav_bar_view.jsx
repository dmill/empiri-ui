import React from "react";
import DropdownComponent from "../components/dropdown_component";
import Icon from "../elements/icon_element";

var NavBarView = React.createClass({

  render () {
    return (
      <nav>
        <div className="container">
          <div className="row">
            <img src="images/symbol.png" width="20px" />

            <input type="text" placeholder="Search Empiri" />

            <span>
              <a href="#">Browse</a>
            </span>

            <span>
              <a href="#">FAQ</a>
            </span>

            <Icon iconType="material" iconName="face" />

            <button>Sign up</button>
            <button>Sign in</button>
          </div>
        </div>
      </nav>
    );
  }

});

export default NavBarView;
