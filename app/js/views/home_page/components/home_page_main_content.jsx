import React from "bower_components/react/react";

var HomePageMainContent = React.createClass({

  render () {
    return (
      <div id="main-content">
        <section>
          <div className="image-container">
            <img src="app/js/views/home_page/images/nautilus.jpg" />
          </div>
          <div className="heading-container">
            <h1>Science moves faster when research is published here</h1>
            <h2>On Empiri your work is reviewed and published continuously - while your research is still happening.</h2>
          </div>

          <div className="waitlist-form">
            <input className="name" type="text" placeholder="First name" />
            <input className="name" type="text" placeholder="Last name" />
            <input type="text" placeholder="Email" />
            <button>Join the waitlist</button>
          </div>
        </section>

        <section>
          <div className="heading-container">
            <h1>Receive peer-reviews on individual experiments</h1>
            <h2>When your publication is ready, each of its experiments have already been peer-reviewed.</h2>
          </div>
        </section>

        <section>
          <div className="heading-container">
            <h1>Collaborate with top researchers in your field</h1>
            <h2>Empiri is a community of science publishers sharing ideas, research, and feedback with each other, and for the rest of the world to see.</h2>
          </div>
        </section>
      </div>
    );
  }
});

export default HomePageMainContent;
