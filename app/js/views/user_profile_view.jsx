import React from "react";

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

            <MaterialIconElement iconName="face" />

            <button>Sign up</button>
            <button>Sign in</button>
          </div>
        </div>
      </nav>
    );
  }

});

export default NavBarView;
