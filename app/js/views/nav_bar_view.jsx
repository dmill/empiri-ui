import React from "react";
import DropdownComponent from "../components/dropdown_component";
import IconElement from "../elements/icon_element";
import PopoverSelectComponent from "../components/popover_select_component";
import PopoverComponent from "../components/popover_component";

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

            <PopoverSelectComponent
              content={<img src={this.props.user.avatar}
              height="20" />}
              popoverContent={<PopoverComponent content="hi" />} />

            <button>Sign up</button>
            <button>Sign in</button>
          </div>
        </div>
      </nav>
    );
  }

});

export default NavBarView;
