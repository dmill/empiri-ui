import React from "react";
import DropdownListComponent from "../components/dropdown_list_component";
import IconElement from "../elements/icon_element";
import PopoverSelectComponent from "../components/popover_select_component";
import PopoverComponent from "../components/popover_component";

class NavBarView extends React.Component {

  renderAccountDropdown() {
    return (
      <DropdownListComponent items={["your account", "support", "log out"]}/>
    );
  }

  render() {
    if(!this.props.currentUser) {
      return (<div>please log in</div>);
    } else {
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
                content={<img src={this.props.currentUser.avatar}
                height="25" width="25" />}
                popoverContent={<PopoverComponent direction="up" content={this.renderAccountDropdown()} />} />

              <button>Sign up</button>
              <button>Sign in</button>
            </div>
          </div>
        </nav>
      );
    }
  }

};

export default NavBarView;
